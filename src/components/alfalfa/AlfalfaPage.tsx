import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ClipboardCheck,
  Globe2,
  PackageCheck,
  Sprout,
  Truck,
  Warehouse,
} from "lucide-react";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { localizedPath, type Locale } from "@/lib/site";

const content = {
  es: {
    eyebrow: "Alfalfa y nutrición animal",
    title: "Abastecimiento con criterio técnico y comercial",
    intro:
      "Vinculamos producción agroindustrial con compradores que valoran origen, preparación adecuada y una logística ordenada.",
    heroAlt: "Megafardos de alfalfa almacenados para su comercialización",
    heroPrimary: "Consultar por alfalfa",
    heroSecondary: "Explorar productos",
    offerLabel: "Ofrecer producción",
    productsEyebrow: "Productos",
    productsTitle: "Alfalfa y alternativas para nutrición animal",
    productsIntro:
      "La disponibilidad, especificaciones y condiciones se confirman para cada operación. La web presenta las líneas comerciales sin publicar precios ni comprometer stock.",
    productGroups: [
      {
        id: "alfalfa",
        title: "Alfalfa",
        text: "Compra y comercialización de alfalfa para operaciones nacionales y consultas de abastecimiento internacional.",
        items: ["Megafardos de alfalfa", "Rollos de alfalfa"],
        cta: "Consultar disponibilidad de alfalfa",
        href: "alfalfa-buy",
      },
      {
        id: "nutricion-animal",
        title: "Nutrición animal",
        text: "Desarrollo de oportunidades con productos agroindustriales destinados a alimentación animal.",
        items: ["Afrechillo de trigo", "Burlanda seca", "High Pro"],
        cta: "Consultar por nutrición animal",
        href: "animal-nutrition",
      },
    ],
    processEyebrow: "Cadena coordinada",
    processTitle: "Del origen al despacho",
    processIntro:
      "Cada operación se organiza según producto, especificación, origen y destino. El rol y alcance exacto de HT se acuerdan comercialmente en cada caso.",
    process: [
      { title: "Origen", text: "Vinculación con productores y proveedores.", icon: Sprout },
      { title: "Evaluación", text: "Revisión de producto y requerimientos.", icon: ClipboardCheck },
      { title: "Acondicionamiento", text: "Preparación según la operación acordada.", icon: PackageCheck },
      { title: "Almacenamiento", text: "Coordinación del resguardo y el movimiento.", icon: Warehouse },
      { title: "Despacho", text: "Organización logística hacia el destino comercial.", icon: Truck },
    ],
    galleryEyebrow: "Infraestructura y producto",
    galleryTitle: "Alfalfa en sus distintas etapas y presentaciones",
    galleryIntro:
      "Registro fotográfico autorizado de Alfazal, instalación vinculada con almacenamiento y compactación. Su participación y el alcance de HT se definen según cada operación.",
    gallery: [
      { src: "/images/alfalfa/rollos-almacenados.jpg", alt: "Rollos de alfalfa almacenados bajo cubierta", caption: "Rollos almacenados bajo cubierta" },
      { src: "/images/alfalfa/megafardos-almacenados.jpg", alt: "Megafardos de alfalfa almacenados bajo cubierta", caption: "Megafardos preparados para almacenamiento" },
      { src: "/images/alfalfa/planta-compactacion.jpg", alt: "Equipamiento de una instalación de compactación de alfalfa", caption: "Infraestructura de compactación" },
      { src: "/images/alfalfa/compactacion-megafardo.jpg", alt: "Megafardo durante el proceso de compactación", caption: "Compactación del producto" },
      { src: "/images/alfalfa/stock-megafardos.jpg", alt: "Stock de megafardos organizado en depósito", caption: "Organización y resguardo del producto" },
      { src: "/images/alfalfa/detalle-alfalfa-compactada.jpg", alt: "Detalle de alfalfa compactada en un megafardo", caption: "Detalle del material compactado" },
    ],
    audiencesEyebrow: "Oportunidades comerciales",
    audiencesTitle: "Una conversación diferente para cada necesidad",
    audiences: [
      {
        title: "Comprar producto",
        text: "Consultas nacionales sobre alfalfa o productos para nutrición animal.",
        cta: "Consultar abastecimiento",
        intent: "alfalfa",
        context: "alfalfa-buy",
        icon: PackageCheck,
      },
      {
        title: "Ofrecer producción",
        text: "Productores y proveedores interesados en vincular su oferta con HT Semillas.",
        cta: "Ofrecer alfalfa o producción",
        intent: "ofrecer-produccion",
        context: "alfalfa-supply",
        icon: Sprout,
      },
      {
        title: "Consulta internacional",
        text: "Importadores, distribuidores y socios que buscan abastecimiento desde Argentina.",
        cta: "Solicitar información internacional",
        intent: "internacional",
        context: "alfalfa-export",
        icon: Globe2,
      },
    ],
    closingTitle: "¿Querés comprar u ofrecer producción?",
    closingText: "Elegí el motivo de consulta y compartí producto, ubicación, disponibilidad o necesidad de abastecimiento.",
    closingPrimary: "Consultar por alfalfa",
    closingSecondary: "Ofrecer producción",
    closingAlt: "Fardos de alfalfa preparados para abastecimiento",
  },
  en: {
    eyebrow: "Alfalfa & animal nutrition",
    title: "Supply with technical and commercial judgement",
    intro:
      "We connect agro-industrial production with buyers who value origin, proper preparation and organised logistics.",
    heroAlt: "Alfalfa bales stored for commercial distribution",
    heroPrimary: "Alfalfa enquiry",
    heroSecondary: "Explore products",
    offerLabel: "Offer production",
    productsEyebrow: "Products",
    productsTitle: "Alfalfa and animal nutrition options",
    productsIntro:
      "Availability, specifications and terms are confirmed for each operation. The website presents commercial lines without publishing prices or implying permanent stock.",
    productGroups: [
      {
        id: "alfalfa",
        title: "Alfalfa",
        text: "Alfalfa purchasing and marketing for domestic operations and international sourcing enquiries.",
        items: ["Large alfalfa bales", "Round alfalfa bales"],
        cta: "Check alfalfa availability",
        href: "alfalfa-buy",
      },
      {
        id: "animal-nutrition",
        title: "Animal nutrition",
        text: "Development of opportunities involving agro-industrial products intended for animal feeding.",
        items: ["Wheat bran", "Dried distillers grains", "High Pro"],
        cta: "Animal nutrition enquiry",
        href: "animal-nutrition",
      },
    ],
    processEyebrow: "A coordinated chain",
    processTitle: "From origin to dispatch",
    processIntro:
      "Each operation is organised according to product, specification, origin and destination. HT’s exact role and scope are commercially agreed for each case.",
    process: [
      { title: "Origin", text: "Coordination with growers and suppliers.", icon: Sprout },
      { title: "Assessment", text: "Review of product and requirements.", icon: ClipboardCheck },
      { title: "Conditioning", text: "Preparation according to the agreed operation.", icon: PackageCheck },
      { title: "Storage", text: "Coordination of product protection and movement.", icon: Warehouse },
      { title: "Dispatch", text: "Logistics organised around the commercial destination.", icon: Truck },
    ],
    galleryEyebrow: "Infrastructure and product",
    galleryTitle: "Alfalfa across different stages and formats",
    galleryIntro:
      "Authorised photographic record of Alfazal, a facility related to storage and compaction. Its participation and HT’s scope are defined for each operation.",
    gallery: [
      { src: "/images/alfalfa/rollos-almacenados.jpg", alt: "Round alfalfa bales stored under cover", caption: "Round bales stored under cover" },
      { src: "/images/alfalfa/megafardos-almacenados.jpg", alt: "Large alfalfa bales stored under cover", caption: "Large bales prepared for storage" },
      { src: "/images/alfalfa/planta-compactacion.jpg", alt: "Equipment at an alfalfa compaction facility", caption: "Compaction infrastructure" },
      { src: "/images/alfalfa/compactacion-megafardo.jpg", alt: "Large bale during the compaction process", caption: "Product compaction" },
      { src: "/images/alfalfa/stock-megafardos.jpg", alt: "Stock of large bales organised in a warehouse", caption: "Product organisation and protection" },
      { src: "/images/alfalfa/detalle-alfalfa-compactada.jpg", alt: "Detail of compacted alfalfa in a large bale", caption: "Detail of compacted material" },
    ],
    audiencesEyebrow: "Business opportunities",
    audiencesTitle: "A different conversation for each requirement",
    audiences: [
      {
        title: "Source product",
        text: "Domestic enquiries about alfalfa or animal nutrition products.",
        cta: "Discuss a supply requirement",
        intent: "alfalfa",
        context: "alfalfa-buy",
        icon: PackageCheck,
      },
      {
        title: "Offer production",
        text: "Growers and suppliers interested in connecting their offer with HT Semillas.",
        cta: "Offer alfalfa or production",
        intent: "supply",
        context: "alfalfa-supply",
        icon: Sprout,
      },
      {
        title: "International enquiry",
        text: "Importers, distributors and partners seeking supply from Argentina.",
        cta: "Request international information",
        intent: "international",
        context: "alfalfa-export",
        icon: Globe2,
      },
    ],
    closingTitle: "Do you want to source or offer production?",
    closingText: "Choose the enquiry type and share the product, location, availability or sourcing requirement.",
    closingPrimary: "Alfalfa enquiry",
    closingSecondary: "Offer production",
    closingAlt: "Alfalfa bales prepared for supply",
  },
} as const;

export function AlfalfaPage({ locale }: { locale: Locale }) {
  const c = content[locale];
  const contact = localizedPath(locale, "contact");
  const intentKey = locale === "es" ? "motivo" : "intent";
  const alfalfaIntent = "alfalfa";
  const supplyIntent = locale === "es" ? "ofrecer-produccion" : "supply";

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
                <Link href={`${contact}?${intentKey}=${alfalfaIntent}&context=alfalfa-buy`} className="button-primary !bg-white !text-forest">
                  {c.heroPrimary}<ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link href="#productos" className="button-secondary !border-white/25 !bg-transparent !text-white">
                  {c.heroSecondary}<ArrowDown className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
          <MaskReveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/alfalfa/megafardos-almacenados.jpg" alt={c.heroAlt} fill loading="eager" className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
          </MaskReveal>
        </div>
      </section>

      <section id="productos" className="section-pad scroll-mt-24 bg-paper">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow text-forest">{c.productsEyebrow}</p>
            <h2 className="section-title mt-4 max-w-4xl">{c.productsTitle}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/65">{c.productsIntro}</p>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {c.productGroups.map((group, index) => (
              <Reveal key={group.id} delay={index * 0.06} variant="riseSoft">
                <article id={group.id} className="card scroll-mt-24 p-7 sm:p-8">
                  <Sprout className="size-8 text-forest" aria-hidden="true" />
                  <h3 className="mt-8 text-3xl font-bold tracking-tight">{group.title}</h3>
                  <p className="mt-4 leading-7 text-ink/65">{group.text}</p>
                  <ul className="mt-6 grid gap-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 font-semibold"><Check className="mt-1 size-4 shrink-0 text-forest" aria-hidden="true" />{item}</li>
                    ))}
                  </ul>
                  <Link href={`${contact}?${intentKey}=${alfalfaIntent}&context=${group.href}`} className="button-secondary mt-7">
                    {group.cta}<ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-forest text-white">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow text-sage">{c.processEyebrow}</p>
            <h2 className="section-title mt-4 max-w-4xl">{c.processTitle}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/65">{c.processIntro}</p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {c.process.map((stage, index) => (
              <Reveal key={stage.title} delay={index * 0.04} variant="riseSoft">
                <article className="h-full rounded-2xl border border-white/15 bg-forest-dark/45 p-6">
                  <div className="flex items-center justify-between">
                    <stage.icon className="size-7 text-sage" aria-hidden="true" />
                    <span className="text-xs font-extrabold tracking-[0.15em] text-white/55">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-8 text-lg font-bold">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{stage.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow text-forest">{c.galleryEyebrow}</p>
            <h2 className="section-title mt-4 max-w-4xl">{c.galleryTitle}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/65">{c.galleryIntro}</p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {c.gallery.map((item, index) => (
              <Reveal key={item.src} delay={(index % 3) * 0.04} variant="riseSoft">
                <figure className="card h-full overflow-hidden">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-500 hover:scale-[1.025] motion-reduce:transition-none motion-reduce:hover:scale-100" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  </div>
                  <figcaption className="p-5 text-sm font-bold text-ink/70">{item.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="site-container">
          <Reveal><p className="eyebrow text-forest">{c.audiencesEyebrow}</p><h2 className="section-title mt-4 max-w-4xl">{c.audiencesTitle}</h2></Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {c.audiences.map((audience, index) => (
              <Reveal key={audience.title} delay={index * 0.05} variant="riseSoft">
                <article className="card flex h-full flex-col p-7">
                  <audience.icon className="size-8 text-forest" aria-hidden="true" />
                  <h3 className="mt-8 text-2xl font-bold tracking-tight">{audience.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-ink/65">{audience.text}</p>
                  <Link href={`${contact}?${intentKey}=${audience.intent}&context=${audience.context}`} className="button-secondary mt-7 w-full">
                    {audience.cta}<ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title={c.closingTitle}
        text={c.closingText}
        primaryHref={`${contact}?${intentKey}=${alfalfaIntent}&context=alfalfa-buy`}
        primaryLabel={c.closingPrimary}
        secondaryHref={`${contact}?${intentKey}=${supplyIntent}&context=alfalfa-supply`}
        secondaryLabel={c.closingSecondary}
        image="/images/cta/alfalfa.jpg"
        imageAlt={c.closingAlt}
        icon={Sprout}
      />
    </>
  );
}
