import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Suspense } from "react";
import { LeadForm } from "@/components/contact/LeadForm";
import { Reveal } from "@/components/motion/Reveal";
import { contactPlaceholders } from "@/lib/contact-links";
import { site, type Locale } from "@/lib/site";

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
                : "Sourcing, supply, processing or international trade: choose a topic and share the essentials."}
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section-pad bg-paper">
        <div className="site-container grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <Reveal>
            <h2 className="text-2xl font-bold">{es ? "Canales comerciales" : "Business channels"}</h2>
            <div className="mt-6 grid gap-3">
              <Info icon={MapPin} title={es ? "Base comercial" : "Commercial base"} value={site.location} />
              <Info
                icon={MessageCircle}
                title="WhatsApp"
                value={site.whatsapp || contactPlaceholders.whatsapp}
                pending={!site.whatsapp}
              />
              <Info
                icon={Mail}
                title="Email"
                value={site.email || contactPlaceholders.email}
                pending={!site.email}
              />
              <Info
                icon={Phone}
                title={es ? "Teléfono" : "Phone"}
                value={site.phone || contactPlaceholders.phone}
                pending={!site.phone}
              />
              <Info icon={MapPin} title={es ? "Dirección" : "Address"} value={contactPlaceholders.address} pending />
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
  pending = false,
}: {
  icon: typeof MapPin;
  title: string;
  value: string;
  pending?: boolean;
}) {
  return (
    <div className="card flex gap-4 p-5">
      <Icon className="mt-1 size-5 shrink-0 text-forest" />
      <div>
        <p className="text-sm font-bold">{title}</p>
        <p className={`mt-1 text-sm ${pending ? "font-semibold text-gold" : "text-ink/60"}`}>{value}</p>
      </div>
    </div>
  );
}
