import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Suspense } from "react";
import { LeadForm } from "@/components/contact/LeadForm";
import { Reveal } from "@/components/motion/Reveal";
import { site, telHref, whatsappDigits, type Locale } from "@/lib/site";

export function ContactPage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  return (
    <>
      <section className="bg-forest-dark py-16 text-white lg:py-24">
        <div className="site-container">
          <Reveal variant="fadeIn">
            <p className="eyebrow text-sage">{es ? "Contacto" : "Contact"}</p>
          </Reveal>
          <Reveal variant="title" delay={0.05}>
            <h1 className="page-title mt-5 max-w-4xl">
              {es ? "Una consulta clara es el mejor punto de partida" : "A clear enquiry is the best place to start"}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              {es
                ? "Compras, oferta de producción, procesamiento o comercio internacional: elegí el motivo y contanos lo esencial."
                : "Whether you need to source products, offer supply, discuss processing or explore export opportunities, choose a topic and share the essentials."}
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section-pad bg-paper">
        <div className="site-container grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <Reveal>
            <h2 className="text-2xl font-bold">{es ? "Canales comerciales" : "Business channels"}</h2>
            <div className="mt-6 grid gap-3">
              <Info icon={MapPin} title={es ? "Dirección" : "Address"} value={site.address.full} />
              <Info
                icon={MessageCircle}
                title="WhatsApp"
                value={site.phones[0]}
                href={`https://wa.me/${whatsappDigits()}`}
              />
              <Info icon={Mail} title="Email" value={site.email} href={`mailto:${site.email}`} />
              {site.phones.map((phone) => (
                <Info
                  key={phone}
                  icon={Phone}
                  title={es ? "Teléfono" : "Phone"}
                  value={phone}
                  href={telHref(phone)}
                />
              ))}
            </div>
            <h3 className="mt-10 text-lg font-bold">{es ? "Equipo" : "Team contacts"}</h3>
            <div className="mt-4 grid gap-3">
              {site.teamEmails.map((member) => (
                <Info
                  key={member.email}
                  icon={Mail}
                  title={member.label}
                  value={member.email}
                  href={`mailto:${member.email}`}
                />
              ))}
            </div>
          </Reveal>
          <Suspense>
            <LeadForm locale={locale} />
          </Suspense>
        </div>
      </section>
    </>
  );
}

function Info({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: typeof MapPin;
  title: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="card flex gap-4 p-5">
      <Icon className="mt-1 size-5 shrink-0 text-forest" />
      <div>
        <p className="text-sm font-bold">{title}</p>
        {href ? (
          <a href={href} className="mt-1 block text-sm text-ink/60 transition hover:text-forest">
            {value}
          </a>
        ) : (
          <p className="mt-1 text-sm text-ink/60">{value}</p>
        )}
      </div>
    </div>
  );
}
