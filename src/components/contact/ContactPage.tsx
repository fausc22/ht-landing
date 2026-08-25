import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { Suspense } from "react";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { LeadForm } from "@/components/contact/LeadForm";
import { TrackedContactLink } from "@/components/contact/TrackedContactLink";
import { Reveal } from "@/components/motion/Reveal";
import { site, telHref, type Locale } from "@/lib/site";

export function ContactPage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  const steps = es
    ? ["Elegí el motivo de la consulta.", "Compartí únicamente los datos esenciales.", "El equipo podrá responder por el canal informado."]
    : ["Choose the purpose of your enquiry.", "Share only the essential details.", "Our team can reply using the channel you provide."];

  return (
    <>
      <section className="bg-forest-dark py-16 text-white lg:py-24">
        <div className="site-container">
          <Reveal variant="fadeIn"><p className="eyebrow text-sage">{es ? "Contacto" : "Contact"}</p></Reveal>
          <Reveal variant="title" delay={0.05}>
            <h1 className="page-title mt-5 max-w-4xl">{es ? "Hablemos de tu próxima operación" : "Let’s discuss your next business opportunity"}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              {es
                ? "Compras, oferta de producción, procesamiento o comercio internacional: elegí el canal más conveniente y contanos lo esencial."
                : "Whether you need to source products, offer supply, discuss processing or explore international trade, choose the most convenient channel and share the essentials."}
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-10">
            <Suspense fallback={<div className="h-36" aria-hidden="true" />}><ContactChannels locale={locale} /></Suspense>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="site-container grid items-start gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <Reveal>
            <p className="eyebrow text-forest">{es ? "Consulta comercial" : "Business enquiry"}</p>
            <h2 className="mt-4 text-3xl font-bold">{es ? "Contanos lo esencial" : "Tell us the essentials"}</h2>
            <p className="mt-4 leading-7 text-ink/65">
              {es
                ? "El formulario adapta el motivo según la página desde la que llegaste. Podés corregirlo antes de enviarlo."
                : "The form adapts its enquiry type based on the page you came from. You can change it before sending."}
            </p>
            <ul className="mt-7 grid gap-4">
              {steps.map((step) => <li key={step} className="flex gap-3 text-sm leading-6 text-ink/70"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-forest" aria-hidden="true" />{step}</li>)}
            </ul>

            <div className="mt-10 grid gap-3">
              <Info icon={MapPin} title={es ? "Dirección" : "Address"} value={site.address.full} />
              {site.phones.slice(1).map((phone) => (
                <Info key={phone} icon={Phone} title={es ? "Teléfono alternativo" : "Alternative phone"} value={phone} href={telHref(phone)} event="contact_phone_click" locale={locale} placement="contact_details" />
              ))}
            </div>

            <h3 className="mt-10 text-lg font-bold">{es ? "Contactos del equipo" : "Team contacts"}</h3>
            <div className="mt-4 grid gap-3">
              {site.teamEmails.map((member) => (
                <Info key={member.email} icon={Mail} title={member.label} value={member.email} href={`mailto:${member.email}`} event="contact_email_click" locale={locale} placement="contact_team" />
              ))}
            </div>
          </Reveal>

          <div>
            <div className="mb-5">
              <h2 className="text-2xl font-bold">{es ? "Enviar una consulta" : "Send an enquiry"}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/70">{es ? "Los campos obligatorios son los mínimos necesarios para poder responderte." : "Required fields are limited to the minimum details needed to reply."}</p>
            </div>
            <Suspense fallback={<div className="card h-[38rem] animate-pulse" aria-hidden="true" />}><LeadForm locale={locale} /></Suspense>
          </div>
        </div>
      </section>
    </>
  );
}

type ContactEvent = "contact_email_click" | "contact_phone_click";

function Info({ icon: Icon, title, value, href, event, locale, placement }: { icon: typeof MapPin; title: string; value: string; href?: string; event?: ContactEvent; locale?: Locale; placement?: string }) {
  const content = <><p className="text-sm font-bold">{title}</p><span className="mt-1 block text-sm text-ink/70">{value}</span></>;
  return (
    <div className="card flex gap-4 p-5">
      <Icon className="mt-1 size-5 shrink-0 text-forest" aria-hidden="true" />
      {href && event && locale && placement ? (
        <TrackedContactLink href={href} event={event} locale={locale} placement={placement} className="min-w-0 transition hover:text-forest">{content}</TrackedContactLink>
      ) : <div>{content}</div>}
    </div>
  );
}
