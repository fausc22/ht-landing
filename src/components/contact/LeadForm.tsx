"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, LoaderCircle, MessageCircle, Send } from "lucide-react";
import { TrackedContactLink } from "@/components/contact/TrackedContactLink";
import { PageSelect } from "@/components/ui/PageSelect";
import { trackEvent } from "@/lib/analytics";
import {
  contactContextFromParam,
  formIntentFromParam,
  whatsappHref,
  whatsappIntentFromParam,
} from "@/lib/contact-links";
import type { Locale } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error" | "config" | "invalid";

export function LeadForm({ locale }: { locale: Locale }) {
  const params = useSearchParams();
  const rawIntent = params.get("motivo") ?? params.get("intent");
  const initialIntent = useMemo(() => formIntentFromParam(rawIntent), [rawIntent]);
  const context = contactContextFromParam(params.get("context"));
  const [intent, setIntent] = useState(initialIntent);
  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);
  const startedAt = useRef<number | null>(null);
  const startTracked = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const es = locale === "es";
  const whatsapp = whatsappHref(locale, whatsappIntentFromParam(rawIntent));

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    setIntent(initialIntent);
  }, [initialIntent]);

  function trackStart() {
    if (startTracked.current) return;
    if (startedAt.current === null) startedAt.current = Date.now();
    startTracked.current = true;
    trackEvent("contact_form_start", { locale, context: context || "general" });
  }

  function validate(form: HTMLFormElement) {
    const data = Object.fromEntries(new FormData(form));
    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const location = String(data.location || "").trim();
    const message = String(data.message || "").trim();

    if (name.length < 2) return es ? "Indicá tu nombre completo." : "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return es ? "Revisá el correo electrónico." : "Please check the email address.";
    }
    if (location.length < 2) {
      return es ? "Indicá localidad, provincia o país." : "Please enter city, province or country.";
    }
    if (message.length < 4) {
      return es ? "Escribí un mensaje breve para orientarnos." : "Please write a short message for our team.";
    }
    return null;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const validationError = validate(form);
    if (validationError) {
      setFieldError(validationError);
      setStatus("invalid");
      return;
    }

    setFieldError(null);
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
        setIntent(initialIntent);
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
        <p className="mt-3 text-ink/70">
          {es
            ? "Gracias. El equipo recibió tu mensaje y podrá responder por los datos que informaste. Seguís en la misma página; no hace falta volver al inicio."
            : "Thank you. Our team received your message and can reply using the details you shared. You remain on this page; there is no need to go back home."}
        </p>
        {whatsapp ? (
          <TrackedContactLink
            href={whatsapp}
            event="contact_whatsapp_click"
            locale={locale}
            placement="form_success"
            target="_blank"
            className="button-secondary mt-6"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            {es ? "Continuar por WhatsApp" : "Continue on WhatsApp"}
          </TrackedContactLink>
        ) : null}
        <button type="button" className="button-nav mt-4" onClick={() => setStatus("idle")}>
          {es ? "Enviar otra consulta" : "Send another enquiry"}
        </button>
      </div>
    );
  }

  const labels = es
    ? {
        intent: "Motivo de consulta",
        name: "Nombre y apellido",
        company: "Empresa (opcional)",
        email: "Correo electrónico",
        phone: "Teléfono o WhatsApp (opcional)",
        location: "Localidad y provincia / país",
        message: "Mensaje",
        send: "Enviar consulta",
        sending: "Enviando tu consulta…",
        placeholder: "Contanos qué producto, servicio u oportunidad querés conversar.",
        privacy: "Usaremos estos datos únicamente para responder tu consulta.",
        retry: "Intentar de nuevo",
      }
    : {
        intent: "Enquiry type",
        name: "Full name",
        company: "Company (optional)",
        email: "Email",
        phone: "Phone or WhatsApp (optional)",
        location: "City, province / country",
        message: "Message",
        send: "Send enquiry",
        sending: "Sending your enquiry…",
        placeholder: "Tell us which product, service or opportunity you would like to discuss.",
        privacy: "We will only use these details to reply to your enquiry.",
        retry: "Try again",
      };

  const options = es
    ? [
        { value: "buy", label: "Comprar semillas o insumos" },
        { value: "supply", label: "Ofrecer producción" },
        { value: "processing", label: "Procesamiento o acondicionamiento" },
        { value: "alfalfa", label: "Alfalfa y nutrición animal" },
        { value: "international", label: "Comercio internacional" },
        { value: "institutional", label: "Consulta institucional" },
        { value: "other", label: "Otra consulta" },
      ]
    : [
        { value: "buy", label: "Source seeds or crop inputs" },
        { value: "supply", label: "Offer production" },
        { value: "processing", label: "Processing or conditioning" },
        { value: "alfalfa", label: "Alfalfa and animal nutrition" },
        { value: "international", label: "International trade" },
        { value: "institutional", label: "Institutional enquiry" },
        { value: "other", label: "Other" },
      ];

  const sending = status === "sending";

  return (
    <form
      ref={formRef}
      onSubmit={submit}
      onFocus={trackStart}
      className="card grid gap-5 p-6 sm:p-8"
      aria-busy={sending}
      noValidate
    >
      <label className="sr-only" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <input type="hidden" name="context" value={context} readOnly />

      <PageSelect
        name="intent"
        label={labels.intent}
        value={intent}
        options={options}
        onChange={(value) => setIntent(value as typeof intent)}
        required
        disabled={sending}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold">
          {labels.name}
          <input name="name" required minLength={2} maxLength={100} autoComplete="name" disabled={sending} className="field" />
        </label>
        <label className="text-sm font-bold">
          {labels.company}
          <input name="company" maxLength={120} autoComplete="organization" disabled={sending} className="field" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold">
          {labels.email}
          <input name="email" type="email" required maxLength={160} autoComplete="email" disabled={sending} className="field" />
        </label>
        <label className="text-sm font-bold">
          {labels.phone}
          <input name="phone" type="tel" maxLength={50} autoComplete="tel" disabled={sending} className="field" />
        </label>
      </div>
      <label className="text-sm font-bold">
        {labels.location}
        <input
          name="location"
          required
          minLength={2}
          maxLength={120}
          autoComplete="address-level2"
          disabled={sending}
          className="field"
        />
      </label>
      <label className="text-sm font-bold">
        {labels.message}
        <textarea
          name="message"
          required
          minLength={4}
          maxLength={3000}
          rows={5}
          placeholder={labels.placeholder}
          disabled={sending}
          className="field"
        />
      </label>
      <p className="text-xs leading-5 text-ink/70">{labels.privacy}</p>

      <div aria-live="polite" className="grid gap-3">
        {sending ? (
          <p className="flex items-center gap-2 rounded-xl bg-forest/8 p-4 text-sm text-forest">
            <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
            {labels.sending}
          </p>
        ) : null}
        {status === "invalid" && fieldError ? (
          <p role="alert" className="rounded-xl bg-gold/20 p-4 text-sm text-ink">
            {fieldError}
          </p>
        ) : null}
        {status === "config" ? (
          <p role="alert" className="rounded-xl bg-gold/20 p-4 text-sm">
            {es
              ? "Todavía no pudimos activar el envío automático. No se envió información. Podés escribirnos por WhatsApp o correo mientras tanto."
              : "Automatic delivery is not active yet. No information was sent. You can reach us by WhatsApp or email in the meantime."}
          </p>
        ) : null}
        {status === "error" ? (
          <div role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-800">
            <p>
              {es
                ? "No pudimos enviar la consulta en este momento. Tus datos siguen en el formulario: revisalos e intentá nuevamente."
                : "We could not send your enquiry right now. Your details are still in the form — please review them and try again."}
            </p>
            <button type="button" className="mt-3 font-bold underline" onClick={() => setStatus("idle")}>
              {labels.retry}
            </button>
          </div>
        ) : null}
      </div>

      <button
        disabled={sending}
        className="button-primary w-full justify-center disabled:cursor-wait disabled:opacity-65 sm:w-fit"
        type="submit"
      >
        {sending ? <LoaderCircle className="size-4 animate-spin" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
        {sending ? labels.sending : labels.send}
      </button>
    </form>
  );
}
