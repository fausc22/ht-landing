import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Check,
  ClipboardCheck,
  Globe2,
  Handshake,
  LockKeyhole,
  PackageCheck,
  Route,
  Search,
  Send,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { localizedPath, type Locale } from "@/lib/site";

const content = {
  es: {
    eyebrow: "Comercio internacional",
    title: "Producción argentina conectada con el mundo",
    intro:
      "Desarrollamos oportunidades para compradores, importadores, distribuidores y socios que buscan una contraparte agroindustrial en Argentina.",
    heroAlt: "Infraestructura agroindustrial vinculada con preparación comercial",
    heroPrimary: "Solicitar información para exportación",
    heroSecondary: "Conocer el modelo de trabajo",
    audiencesEyebrow: "Interlocutores",
    audiencesTitle: "Una puerta de entrada para diferentes oportunidades",
    audiencesIntro:
      "La información y el recorrido comercial se adaptan al rol de cada organización, manteniendo una conversación simple y directa.",
    audiences: [
      {
        title: "Compradores e importadores",
        text: "Empresas que necesitan analizar producto, especificación, origen y condiciones de abastecimiento.",
        cta: "Consultar abastecimiento",
        context: "international-sourcing",
        icon: Building2,
      },
      {
        title: "Distribuidores",
        text: "Organizaciones interesadas en desarrollar canales comerciales para productos agroindustriales argentinos.",
        cta: "Conversar sobre distribución",
        context: "international-distribution",
        icon: Users,
      },
      {
        title: "Socios comerciales",
        text: "Contrapartes que buscan evaluar oportunidades de cooperación, origen, preparación o logística.",
        cta: "Proponer una oportunidad",
        context: "international-partnership",
        icon: Handshake,
      },
    ],
    productsEyebrow: "Oportunidades de producto",
    productsTitle: "Una oferta agroindustrial sujeta a cada operación",
    productsText:
      "El foco actual incluye alfalfa y productos destinados a nutrición animal. Especificaciones, disponibilidad y condiciones se confirman dentro de la conversación comercial.",
    productGroups: [
      {
        title: "Alfalfa",
        text: "Megafardos y consultas vinculadas con abastecimiento, preparación y despacho.",
        items: ["Megafardos de alfalfa", "Origen y disponibilidad", "Preparación según requerimientos"],
      },
      {
        title: "Nutrición animal",
        text: "Oportunidades con productos agroindustriales destinados a alimentación animal.",
        items: ["Afrechillo de trigo", "Burlanda seca", "High Pro"],
      },
    ],
    productsLink: "Ver alfalfa y nutrición animal",
    productsAlt: "Alfalfa compactada durante su preparación comercial",
    processEyebrow: "Modelo de trabajo",
    processTitle: "Cada consulta se analiza desde el requerimiento hasta el destino",
    processIntro:
      "HT coordina información y capacidades según el producto y la operación. El alcance se define caso por caso; no se presenta un circuito único para negocios diferentes.",
    process: [
      { title: "Requerimiento", text: "Empresa, país, producto, especificación y destino.", icon: ClipboardCheck },
      { title: "Origen", text: "Análisis de oferta y vinculación con la cadena productiva.", icon: Search },
      { title: "Definición comercial", text: "Intercambio de información relevante para evaluar la oportunidad.", icon: Handshake },
      { title: "Preparación y logística", text: "Coordinación operativa según condiciones acordadas.", icon: Truck },
      { title: "Seguimiento", text: "Comunicación durante las etapas comprendidas en la operación.", icon: Route },
    ],
    principlesEyebrow: "Criterios comerciales",
    principlesTitle: "Claridad antes de asumir compromisos",
    principlesIntro:
      "La confianza internacional se construye con información pertinente, alcance definido y tratamiento responsable de los datos comerciales.",
    principles: [
      {
        title: "Especificaciones confirmadas",
        text: "Producto, calidad requerida, presentación y destino se validan antes de avanzar.",
        icon: ShieldCheck,
      },
      {
        title: "Coordinación trazable",
        text: "Cada participante y etapa se define de acuerdo con la operación concreta.",
        icon: PackageCheck,
      },
      {
        title: "Información confidencial",
        text: "Clientes, precios, volúmenes y negociaciones privadas no se publican en la web.",
        icon: LockKeyhole,
      },
    ],
    enquiryEyebrow: "Para iniciar una conversación",
    enquiryTitle: "Información que ayuda a responder mejor",
    enquiryText:
      "Una consulta inicial no necesita ser extensa. Estos datos permiten identificar rápidamente si existe una oportunidad para evaluar.",
    enquiryItems: ["Empresa y país", "Producto de interés", "Especificación o presentación", "Destino previsto", "Volumen de referencia", "Plazo o ventana estimada"],
    enquiryCta: "Enviar consulta internacional",
    closingTitle: "Iniciá una conversación comercial",
    closingText: "Compartí empresa, país, producto y necesidad de abastecimiento. El equipo evaluará el próximo paso sin comprometer condiciones no confirmadas.",
    closingPrimary: "Solicitar información para exportación",
    closingSecondary: "Consultar por alfalfa",
    closingAlt: "Operación agroindustrial con proyección comercial",
  },
  en: {
    eyebrow: "International trade",
    title: "Connecting Argentine production with the world",
    intro:
      "We develop opportunities for buyers, importers, distributors and partners seeking an agro-industrial counterpart in Argentina.",
    heroAlt: "Agro-industrial infrastructure related to commercial preparation",
    heroPrimary: "Request export information",
    heroSecondary: "Explore how we work",
    audiencesEyebrow: "Who we work with",
    audiencesTitle: "A clear entry point for different opportunities",
    audiencesIntro:
      "Information and the commercial journey are adapted to each organisation’s role while keeping the conversation simple and direct.",
    audiences: [
      {
        title: "Buyers and importers",
        text: "Companies assessing product, specification, origin and sourcing conditions.",
        cta: "Discuss a sourcing requirement",
        context: "international-sourcing",
        icon: Building2,
      },
      {
        title: "Distributors",
        text: "Organisations interested in developing commercial channels for Argentine agro-industrial products.",
        cta: "Discuss distribution",
        context: "international-distribution",
        icon: Users,
      },
      {
        title: "Business partners",
        text: "Counterparties assessing cooperation opportunities involving origin, preparation or logistics.",
        cta: "Propose an opportunity",
        context: "international-partnership",
        icon: Handshake,
      },
    ],
    productsEyebrow: "Product opportunities",
    productsTitle: "An agro-industrial offer defined for each operation",
    productsText:
      "The current focus includes alfalfa and products intended for animal nutrition. Specifications, availability and terms are confirmed within the commercial conversation.",
    productGroups: [
      {
        title: "Alfalfa",
        text: "Large bales and enquiries involving sourcing, preparation and dispatch.",
        items: ["Large alfalfa bales", "Origin and availability", "Preparation according to requirements"],
      },
      {
        title: "Animal nutrition",
        text: "Opportunities involving agro-industrial products intended for animal feeding.",
        items: ["Wheat bran", "Dried distillers grains", "High Pro"],
      },
    ],
    productsLink: "View alfalfa and animal nutrition",
    productsAlt: "Compacted alfalfa during commercial preparation",
    processEyebrow: "How we work",
    processTitle: "Each enquiry is assessed from requirement to destination",
    processIntro:
      "HT coordinates information and capabilities according to the product and operation. Scope is defined case by case rather than presenting one process for different business requirements.",
    process: [
      { title: "Requirement", text: "Company, country, product, specification and destination.", icon: ClipboardCheck },
      { title: "Origin", text: "Supply assessment and coordination with the production chain.", icon: Search },
      { title: "Commercial definition", text: "Exchange of relevant information to assess the opportunity.", icon: Handshake },
      { title: "Preparation and logistics", text: "Operational coordination according to agreed conditions.", icon: Truck },
      { title: "Follow-up", text: "Communication throughout the stages included in the operation.", icon: Route },
    ],
    principlesEyebrow: "Commercial principles",
    principlesTitle: "Clarity before commitments",
    principlesIntro:
      "International trust is built through relevant information, defined scope and responsible treatment of commercial data.",
    principles: [
      {
        title: "Confirmed specifications",
        text: "Product, required quality, format and destination are validated before moving forward.",
        icon: ShieldCheck,
      },
      {
        title: "Traceable coordination",
        text: "Each participant and stage is defined according to the specific operation.",
        icon: PackageCheck,
      },
      {
        title: "Confidential information",
        text: "Clients, prices, volumes and private negotiations are not published on the website.",
        icon: LockKeyhole,
      },
    ],
    enquiryEyebrow: "Starting a conversation",
    enquiryTitle: "Information that helps us respond",
    enquiryText:
      "An initial enquiry does not need to be extensive. These details help identify whether there is an opportunity to assess.",
    enquiryItems: ["Company and country", "Product of interest", "Specification or format", "Intended destination", "Reference volume", "Estimated timing or window"],
    enquiryCta: "Send international enquiry",
    closingTitle: "Start a business conversation",
    closingText: "Share your company, country, product and sourcing requirement. Our team will assess the next step without committing to unconfirmed terms.",
    closingPrimary: "Request export information",
    closingSecondary: "Alfalfa enquiry",
    closingAlt: "Agro-industrial operations with commercial reach",
  },
} as const;

export function InternationalPage({ locale }: { locale: Locale }) {
  const c = content[locale];
  const contact = localizedPath(locale, "contact");
  const alfalfa = localizedPath(locale, "alfalfa");
  const intentKey = locale === "es" ? "motivo" : "intent";
  const internationalIntent = locale === "es" ? "internacional" : "international";

  const contactHref = (context: string) => `${contact}?${intentKey}=${internationalIntent}&context=${context}`;

  return (
    <>
      <section className="bg-forest-dark text-white">
        <div className="site-container grid gap-12 py-16 lg:grid-cols-[1fr_.85fr] lg:items-center lg:py-24">
          <div>
            <Reveal variant="fadeIn"><p className="eyebrow text-sage">{c.eyebrow}</p></Reveal>
            <Reveal variant="title" delay={0.05}><h1 className="page-title mt-5">{c.title}</h1></Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{c.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={contactHref("international-sourcing")} className="button-primary !bg-white !text-forest">
                  {c.heroPrimary}<ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link href="#modelo" className="button-secondary !border-white/25 !bg-transparent !text-white">
                  {c.heroSecondary}<ArrowDown className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
          <MaskReveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/cta/international.jpg" alt={c.heroAlt} fill loading="eager" className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
          </MaskReveal>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow text-forest">{c.audiencesEyebrow}</p>
            <h2 className="section-title mt-4 max-w-4xl">{c.audiencesTitle}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/65">{c.audiencesIntro}</p>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {c.audiences.map((audience, index) => (
              <Reveal key={audience.title} delay={index * 0.05} variant="riseSoft">
                <article className="card flex h-full flex-col p-7">
                  <audience.icon className="size-8 text-forest" aria-hidden="true" />
                  <h3 className="mt-8 text-2xl font-bold tracking-tight">{audience.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-ink/65">{audience.text}</p>
                  <Link href={contactHref(audience.context)} className="button-secondary mt-7 w-full">
                    {audience.cta}<ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="site-container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <MaskReveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/alfalfa/compactacion-megafardo.jpg" alt={c.productsAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 43vw" />
          </MaskReveal>
          <Reveal>
            <p className="eyebrow text-forest">{c.productsEyebrow}</p>
            <h2 className="section-title mt-4">{c.productsTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-ink/65">{c.productsText}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {c.productGroups.map((group) => (
                <article key={group.title} className="card p-5">
                  <h3 className="text-lg font-bold">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/70">{group.text}</p>
                  <ul className="mt-4 grid gap-2">
                    {group.items.map((item) => <li key={item} className="flex gap-2 text-sm font-semibold"><Check className="mt-0.5 size-4 shrink-0 text-forest" aria-hidden="true" />{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <Link href={alfalfa} className="button-secondary mt-8">{c.productsLink}<ArrowRight className="size-4" aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      <section id="modelo" className="section-pad scroll-mt-24 bg-forest text-white">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow text-sage">{c.processEyebrow}</p>
            <h2 className="section-title mt-4 max-w-4xl">{c.processTitle}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/65">{c.processIntro}</p>
          </Reveal>
          <ol className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {c.process.map((stage, index) => (
              <Reveal key={stage.title} delay={index * 0.04} variant="riseSoft">
                <li className="h-full rounded-2xl border border-white/15 bg-forest-dark/45 p-6">
                  <div className="flex items-center justify-between"><stage.icon className="size-7 text-sage" aria-hidden="true" /><span className="text-xs font-extrabold tracking-[0.15em] text-white/35">{String(index + 1).padStart(2, "0")}</span></div>
                  <h3 className="mt-8 text-lg font-bold">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{stage.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow text-forest">{c.principlesEyebrow}</p>
            <h2 className="section-title mt-4 max-w-4xl">{c.principlesTitle}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/65">{c.principlesIntro}</p>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {c.principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.05} variant="riseSoft">
                <article className="card h-full p-7"><principle.icon className="size-8 text-forest" aria-hidden="true" /><h3 className="mt-8 text-xl font-bold">{principle.title}</h3><p className="mt-4 leading-7 text-ink/65">{principle.text}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-gold">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-forest">{c.enquiryEyebrow}</p>
            <h2 className="section-title mt-4">{c.enquiryTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">{c.enquiryText}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="rounded-3xl border border-forest/15 bg-paper p-7 sm:p-8">
              <ul className="grid gap-3 sm:grid-cols-2">
                {c.enquiryItems.map((item) => <li key={item} className="flex gap-3 font-semibold"><Check className="mt-1 size-4 shrink-0 text-forest" aria-hidden="true" />{item}</li>)}
              </ul>
              <Link href={contactHref("international-sourcing")} className="button-primary mt-8 w-full sm:w-fit">{c.enquiryCta}<Send className="size-4" aria-hidden="true" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA
        title={c.closingTitle}
        text={c.closingText}
        primaryHref={contactHref("international-sourcing")}
        primaryLabel={c.closingPrimary}
        secondaryHref={`${contact}?${intentKey}=alfalfa&context=alfalfa-export`}
        secondaryLabel={c.closingSecondary}
        image="/images/alfalfa/stock-megafardos.jpg"
        imageAlt={c.closingAlt}
        icon={Globe2}
      />
    </>
  );
}
