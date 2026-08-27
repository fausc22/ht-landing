import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildContactEmail, intentLabel } from "@/lib/email/contact-notification";
import { contactSchema } from "@/lib/contact-schema";
import { site } from "@/lib/site";

const MAX_BODY_BYTES = 25_000;
const MIN_COMPLETION_MS = 800;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1_000;
const RATE_WINDOW_MS = 10 * 60 * 1_000;
const RATE_MAX = 5;

type RateEntry = { count: number; resetAt: number };
const runtime = globalThis as typeof globalThis & { htContactRate?: Map<string, RateEntry> };
const rateStore = runtime.htContactRate ?? new Map<string, RateEntry>();
runtime.htContactRate = rateStore;

function clientIp(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip")?.trim() || null;
}

function exceedsRateLimit(key: string | null) {
  if (!key) return false;
  const now = Date.now();
  if (rateStore.size > 500) {
    for (const [storedKey, entry] of rateStore) {
      if (entry.resetAt <= now) rateStore.delete(storedKey);
    }
  }
  const current = rateStore.get(key);
  if (!current || current.resetAt <= now) {
    rateStore.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  current.count += 1;
  return current.count > RATE_MAX;
}

function clean(value: string) {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "invalid_content_type" }, { status: 415 });
  }

  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "request_too_large" }, { status: 413 });
  }

  let payload: unknown;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) return NextResponse.json({ error: "request_too_large" }, { status: 413 });
    payload = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) return NextResponse.json({ error: "invalid_data" }, { status: 422 });

  const formAge = Date.now() - parsed.data.startedAt;
  if (parsed.data.website || formAge < MIN_COMPLETION_MS) return NextResponse.json({ ok: true });
  if (formAge > MAX_FORM_AGE_MS) return NextResponse.json({ error: "form_expired" }, { status: 422 });
  if (exceedsRateLimit(clientIp(request))) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429, headers: { "Retry-After": "600" } });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const fromRaw = process.env.CONTACT_FROM_EMAIL?.trim();
  // Display name helps inbox recognition; address must stay on the Resend-verified domain.
  const from = fromRaw && !fromRaw.includes("<") ? `HT Semillas <${fromRaw}>` : fromRaw;
  if (!apiKey || !from) return NextResponse.json({ error: "service_not_configured" }, { status: 503 });

  const data = {
    name: clean(parsed.data.name),
    company: clean(parsed.data.company),
    email: clean(parsed.data.email),
    phone: clean(parsed.data.phone),
    location: clean(parsed.data.location),
    intent: parsed.data.intent,
    context: clean(parsed.data.context || ""),
    message: clean(parsed.data.message),
    locale: parsed.data.locale,
  };

  const email = buildContactEmail(data);

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: email.subject,
      html: email.html,
      text: email.text,
      tags: [{ name: "intent", value: data.intent }, { name: "locale", value: data.locale }],
      headers: {
        "X-HT-Intent": intentLabel(data.intent, "es"),
      },
    });
    if (result.error) throw new Error(result.error.message);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }
}
