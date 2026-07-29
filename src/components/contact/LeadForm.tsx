"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import type { Locale } from "@/lib/site";

export function LeadForm({ locale }: { locale: Locale }) {
  const params = useSearchParams();
  const initial = useMemo(() => {
    const raw = params.get("motivo") ?? params.get("intent") ?? "other";
    if (["comprar", "buy"].includes(raw)) return "buy";
    if (["ofrecer-produccion", "supply"].includes(raw)) return "supply";
    if (["internacional", "international"].includes(raw)) return "international";
    return "other";
  }, [params]);
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error"|"config">("idle");
  const es = locale === "es";
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending"); trackEvent("form_start", { locale });
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, locale }) });
    if (response.ok) { setStatus("success"); event.currentTarget.reset(); trackEvent("generate_lead", { locale, intent: String(data.intent) }); return; }
    const body = await response.json().catch(() => ({}));
    setStatus(body.error === "service_not_configured" ? "config" : "error");
    trackEvent("form_submit_error", { locale, reason: body.error ?? "unknown" });
  }
  if (status === "success") return <div className="card p-8" role="status"><CheckCircle2 className="size-9 text-forest"/><h2 className="mt-5 text-2xl font-bold">{es ? "Consulta enviada" : "Enquiry sent"}</h2><p className="mt-3 text-ink/65">{es ? "Gracias. El equipo recibió tu mensaje y podrá responder por los datos informados." : "Thank you. Our team has received your message and can reply using the details provided."}</p></div>;
  const labels = es ? {
    intent: "Motivo de consulta", name: "Nombre y apellido", company: "Empresa (opcional)", email: "Correo electrónico", phone: "Teléfono o WhatsApp (opcional)", location: "Localidad y provincia / país", message: "Mensaje", send: "Enviar consulta",
    placeholder: "Contanos qué producto, servicio u oportunidad querés conversar.", privacy: "Usaremos estos datos únicamente para responder tu consulta.",
  } : {
    intent: "Enquiry type", name: "Full name", company: "Company (optional)", email: "Email", phone: "Phone or WhatsApp (optional)", location: "City, province / country", message: "Message", send: "Send enquiry",
    placeholder: "Tell us which product, service or opportunity you would like to discuss.", privacy: "We will only use these details to reply to your enquiry.",
  };
  const options = es ? [["buy","Comprar semillas o insumos"],["supply","Ofrecer producción"],["processing","Procesamiento o acondicionamiento"],["alfalfa","Alfalfa y nutrición animal"],["international","Comercio internacional"],["institutional","Consulta institucional"],["other","Otra consulta"]] : [["buy","Source seeds or crop inputs"],["supply","Offer production"],["processing","Processing or conditioning"],["alfalfa","Alfalfa and animal nutrition"],["international","International trade"],["institutional","Institutional enquiry"],["other","Other"]];
  const field = "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3.5 text-ink placeholder:text-ink/35 focus:border-forest";
  return <form onSubmit={submit} className="card grid gap-5 p-6 sm:p-8" onFocus={() => trackEvent("form_start", { locale })}>
    <label className="sr-only" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
    <label className="text-sm font-bold">{labels.intent}<select name="intent" defaultValue={initial} className={field}>{options.map(([value,label]) => <option key={value} value={value}>{label}</option>)}</select></label>
    <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-bold">{labels.name}<input name="name" required minLength={2} maxLength={100} autoComplete="name" className={field}/></label><label className="text-sm font-bold">{labels.company}<input name="company" maxLength={120} autoComplete="organization" className={field}/></label></div>
    <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-bold">{labels.email}<input name="email" type="email" required autoComplete="email" className={field}/></label><label className="text-sm font-bold">{labels.phone}<input name="phone" type="tel" autoComplete="tel" className={field}/></label></div>
    <label className="text-sm font-bold">{labels.location}<input name="location" required minLength={2} maxLength={120} autoComplete="country-name" className={field}/></label>
    <label className="text-sm font-bold">{labels.message}<textarea name="message" required minLength={10} maxLength={3000} rows={5} placeholder={labels.placeholder} className={field}/></label>
    <p className="text-xs leading-5 text-ink/50">{labels.privacy}</p>
    {status === "config" && <p role="alert" className="rounded-xl bg-gold/20 p-4 text-sm">{es ? "El canal de envío todavía no está configurado. No se envió información; podés intentar nuevamente cuando HT confirme el correo corporativo." : "The delivery channel has not been configured yet. No information was sent."}</p>}
    {status === "error" && <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-800">{es ? "No pudimos enviar la consulta. Revisá los datos e intentá nuevamente." : "We could not send your enquiry. Please review the details and try again."}</p>}
    <button disabled={status === "sending"} className="button-primary w-full justify-center sm:w-fit" type="submit"><Send className="size-4"/>{status === "sending" ? (es ? "Enviando…" : "Sending…") : labels.send}</button>
  </form>;
}
