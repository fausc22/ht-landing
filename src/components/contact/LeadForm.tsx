"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { TrackedContactLink } from "@/components/contact/TrackedContactLink";
import { trackEvent } from "@/lib/analytics";
import {
  contactContextFromParam,
  formIntentFromParam,
  whatsappHref,
  whatsappIntentFromParam,
} from "@/lib/contact-links";
import type { Locale } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error" | "config";

export function LeadForm({ locale }: { locale: Locale }) {
  const params = useSearchParams();
  const rawIntent = params.get("motivo") ?? params.get("intent");
  const initialIntent = useMemo(() => formIntentFromParam(rawIntent), [rawIntent]);
  const context = contactContextFromParam(params.get("context"));
  const [status, setStatus] = useState<Status>("idle");
  const startedAt = useRef<number | null>(null);
  const startTracked = useRef(false);
  const es = locale === "es";
  const whatsapp = whatsappHref(locale, whatsappIntentFromParam(rawIntent));

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  function trackStart() {
    if (startTracked.current) return;
    if (startedAt.current === null) startedAt.current = Date.now();
    startTracked.current = true;
    trackEvent("contact_form_start", { locale, context: context || "general" });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    trackEvent("contact_form_submit", { locale, context: context || "general" });

    try {
      const data = Object.fromEntries(new FormData(form));
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale, startedAt: startedAt.current ?? Date.now() }),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        trackEvent("generate_lead", {
          locale,
          intent: String(data.intent),
          context: String(data.context || "general"),
        });
        return;
      }

      const body = await response.json().catch(() => ({}));
      setStatus(body.error === "service_not_configured" ? "config" : "error");
      trackEvent("contact_form_error", { locale, reason: body.error ?? "unknown" });
    } catch {
      setStatus("error");
      trackEvent("contact_form_error", { locale, reason: "network_error" });
    }
  }

  if (status === "success") {
    return (
      <div className="card p-8" role="status" aria-live="polite">
        <CheckCircle2 className="size-9 text-forest" aria-hidden="true" />
        <h2 className="mt-5 text-2xl font-bold">{es ? "Consulta enviada" : "Enquiry sent"}</h2>
        <p className="mt-3 text-ink/65">
          {es
            ? "Gracias. El equipo recibió tu mensaje y podrá responder por los datos informados."
            : "Thank you. Our team has received your message and can reply using the details provided."}
        </p>
        {whatsapp ? (
          <TrackedContactLink href={whatsapp} event="contact_whatsapp_click" locale={locale} placement="form_success" target="_blank" className="button-secondary mt-6">
            <MessageCircle className="size-4" aria-hidden="true" />
            {es ? "Continuar por WhatsApp" : "Continue on WhatsApp"}
          </TrackedContactLink>
        ) : null}
      </div>
    );
  }

  const labels = es
    ? {
        intent: "Motivo de consulta", name: "Nombre y apellido", company: "Empresa (opcional)", email: "Correo electrónico", phone: "Teléfono o WhatsApp (opcional)", location: "Localidad y provincia / país", message: "Mensaje", send: "Enviar consulta",
        placeholder: "Contanos qué producto, servicio u oportunidad querés conversar.", privacy: "Usaremos estos datos únicamente para responder tu consulta.",
      }
    : {
        intent: "Enquiry type", name: "Full name", company: "Company (optional)", email: "Email", phone: "Phone or WhatsApp (optional)", location: "City, province / country", message: "Message", send: "Send enquiry",
        placeholder: "Tell us which product, service or opportunity you would like to discuss.", privacy: "We will only use these details to reply to your enquiry.",
      };
  const options = es
    ? [["buy", "Comprar semillas o insumos"], ["supply", "Ofrecer producción"], ["processing", "Procesamiento o acondicionamiento"], ["alfalfa", "Alfalfa y nutrición animal"], ["international", "Comercio internacional"], ["institutional", "Consulta institucional"], ["other", "Otra consulta"]]
    : [["buy", "Source seeds or crop inputs"], ["supply", "Offer production"], ["processing", "Processing or conditioning"], ["alfalfa", "Alfalfa and animal nutrition"], ["international", "International trade"], ["institutional", "Institutional enquiry"], ["other", "Other"]];
  const field = "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3.5 text-ink placeholder:text-ink/35 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15";

  return (
    <form onSubmit={submit} onFocus={trackStart} className="card grid gap-5 p-6 sm:p-8" aria-busy={status === "sending"}>
      <label className="sr-only" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <input type="hidden" name="context" value={context} readOnly />
      <label className="text-sm font-bold">{labels.intent}<select name="intent" defaultValue={initialIntent} className={field}>{options.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold">{labels.name}<input name="name" required minLength={2} maxLength={100} autoComplete="name" className={field} /></label>
        <label className="text-sm font-bold">{labels.company}<input name="company" maxLength={120} autoComplete="organization" className={field} /></label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold">{labels.email}<input name="email" type="email" required maxLength={160} autoComplete="email" className={field} /></label>
        <label className="text-sm font-bold">{labels.phone}<input name="phone" type="tel" maxLength={50} autoComplete="tel" className={field} /></label>
      </div>
      <label className="text-sm font-bold">{labels.location}<input name="location" required minLength={2} maxLength={120} autoComplete="address-level2" className={field} /></label>
      <label className="text-sm font-bold">{labels.message}<textarea name="message" required minLength={10} maxLength={3000} rows={5} placeholder={labels.placeholder} className={field} /></label>
      <p className="text-xs leading-5 text-ink/70">{labels.privacy}</p>
      <div aria-live="polite">
        {status === "config" ? <p role="alert" className="rounded-xl bg-gold/20 p-4 text-sm">{es ? "El canal de envío todavía no está configurado. No se envió información; también podés usar WhatsApp o correo electrónico." : "The delivery channel has not been configured yet. No information was sent; you can also use WhatsApp or email."}</p> : null}
        {status === "error" ? <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-800">{es ? "No pudimos enviar la consulta. Revisá los datos e intentá nuevamente." : "We could not send your enquiry. Please review the details and try again."}</p> : null}
      </div>
      <button disabled={status === "sending"} className="button-primary w-full justify-center disabled:cursor-wait disabled:opacity-65 sm:w-fit" type="submit"><Send className="size-4" aria-hidden="true" />{status === "sending" ? (es ? "Enviando…" : "Sending…") : labels.send}</button>
    </form>
  );
}
