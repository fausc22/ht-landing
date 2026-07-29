import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let payload: unknown;
  try { payload = await request.json(); } catch { return NextResponse.json({ error: "invalid_request" }, { status: 400 }); }
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) return NextResponse.json({ error: "invalid_data" }, { status: 422 });
  if (parsed.data.website) return NextResponse.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return NextResponse.json({ error: "service_not_configured" }, { status: 503 });

  const { name, company, email, phone, location, intent, message, locale } = parsed.data;
  const safe = (value: string) => value.replace(/[<>]/g, "");
  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Consulta web HT Semillas · ${intent}`,
      text: [`Idioma: ${locale}`, `Motivo: ${intent}`, `Nombre: ${name}`, `Empresa: ${company || "-"}`, `Email: ${email}`, `Teléfono: ${phone || "-"}`, `Ubicación: ${location}`, "", safe(message)].join("\n"),
    });
    if (result.error) throw new Error(result.error.message);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }
}
