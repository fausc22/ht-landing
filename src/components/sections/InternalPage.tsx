import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Globe2, MapPin, Settings2, type LucideIcon } from "lucide-react";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { localizedPath, type Locale, type PageKey } from "@/lib/site";

type InternalKey = Exclude<PageKey, "home" | "contact">;
type Section = { id?: string; title: string; text: string; points?: string[] };
type Config = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  sections: Section[];
  ctaTitle: string;
  ctaText: string;
  primary: string;
  secondary?: string;
  ctaImage: string;
  ctaImageAlt: string;
  ctaIcon: LucideIcon;
};

const configs: Record<Locale, Record<InternalKey, Config>> = {
  es: {
    company: {
      eyebrow: "Empresa",
      title: "Experiencia agropecuaria con mirada de futuro",
      intro: "HT Semillas desarrolla soluciones comerciales desde Huinca Renancó, integrando conocimiento regional, relaciones de largo plazo y nuevas oportunidades para la producción argentina.",
      image: "/images/company/field-vision.jpg",
      sections: [
        { title: "Una empresa conectada con el territorio", text: "La actividad comenzó vinculada a la comercialización de semillas y se amplió hacia insumos agrícolas, soluciones para la producción animal y comercio internacional.", points: ["Sur de Córdoba", "Este de San Luis", "Norte de La Pampa"] },
        { title: "Conocimiento de toda la cadena", text: "El trabajo cotidiano vincula productores, contratistas, acopios, procesadores, plantas de acondicionamiento, proveedores y compradores. Esa red permite comprender cada operación más allá del producto." },
        { title: "Criterio técnico y comercial", text: "HT combina capacidades de administración, producción agropecuaria, nutrición animal y desarrollo comercial. La información personal del equipo se incorporará cuando cuente con aprobación expresa." },
      ],
      ctaTitle: "Hablemos de una oportunidad concreta",
      ctaText: "Compras, abastecimiento, producción o una consulta institucional.",
      primary: "Hablar con el equipo",
      ctaImage: "/images/cta/company.jpg",
      ctaImageAlt: "Infraestructura industrial de HT Semillas",
      ctaIcon: MapPin,
    },
    solutions: {
      eyebrow: "Soluciones",
      title: "Respuestas comerciales para cada etapa productiva",
      intro: "Semillas, insumos y capacidades de articulación para productores y empresas de la cadena agropecuaria.",
      image: "/images/products/corn.jpg",
      sections: [
        { id: "semillas", title: "Semillas", text: "Alternativas para soja, trigo, maíz, pasturas y alfalfa, sujetas a campaña, disponibilidad y lista comercial aprobada.", points: ["Consulta por cultivo y ambiente", "Disponibilidad comercial", "Coordinación de entrega"] },
        { id: "insumos-agricolas", title: "Insumos agrícolas", text: "Soluciones para acompañar la planificación productiva. Las marcas y productos específicos se publicarán únicamente con autorización." },
        { id: "insumos-veterinarios", title: "Insumos veterinarios", text: "Una línea orientada a necesidades vinculadas con ganadería y producción animal. Su catálogo definitivo se encuentra pendiente de validación." },
        { id: "procesamiento", title: "Procesamiento y soluciones logísticas", text: "HT coordina capacidades de selección, acondicionamiento, preparación y movimiento de mercadería según las condiciones de cada operación." },
      ],
      ctaTitle: "Contanos qué necesitás",
      ctaText: "Indicá cultivo, producto, localidad o tipo de operación para orientar mejor la respuesta.",
      primary: "Consultar por semillas e insumos",
      secondary: "Ofrecer producción",
      ctaImage: "/images/cta/solutions.jpg",
      ctaImageAlt: "Insumos agrícolas preparados para comercialización",
      ctaIcon: MapPin,
    },
    processing: {
      eyebrow: "Procesamiento",
      title: "Preparar cada producto para su destino comercial",
      intro: "Selección, acondicionamiento y coordinación operativa para agregar consistencia y valor a la producción.",
      image: "/images/processing/seed-processing.jpg",
      sections: [
        { title: "De la materia prima al producto comercial", text: "Cada mercadería exige una secuencia definida de recepción, evaluación, selección, acondicionamiento y preparación para despacho.", points: ["Relevamiento de requerimientos", "Coordinación del proceso", "Preparación comercial", "Organización del despacho"] },
        { title: "Semillas y productos agroindustriales", text: "La documentación menciona procesamiento de soja, trigo, cebada, avena y centeno. La oferta pública definitiva dependerá de confirmar instalaciones, productos y modalidades vigentes." },
        { title: "Una capacidad integrada a la operación", text: "HT articula actores y recursos de la cadena. El sitio no atribuye propiedad sobre instalaciones cuya titularidad todavía no fue confirmada." },
      ],
      ctaTitle: "Evaluemos tu necesidad de procesamiento",
      ctaText: "Contanos producto, origen, destino y servicio requerido.",
      primary: "Consultar por acondicionamiento",
      ctaImage: "/images/cta/processing.jpg",
      ctaImageAlt: "Equipamiento de procesamiento y acondicionamiento",
      ctaIcon: Settings2,
    },
    alfalfa: {
      eyebrow: "Alfalfa y nutrición animal",
      title: "Producción, abastecimiento y coordinación comercial",
      intro: "HT vincula oferta agroindustrial con compradores que valoran continuidad, preparación adecuada y logística ordenada.",
      image: "/images/alfalfa-megafardos.png",
      sections: [
        { id: "alfalfa", title: "Alfalfa en megafardos", text: "La empresa compra y comercializa alfalfa, coordinando requerimientos de producto y operación. Las especificaciones, disponibilidad y condiciones se informan en cada consulta.", points: ["Productores y proveedores", "Compradores nacionales", "Consultas de abastecimiento internacional"] },
        { title: "Un proceso coordinado", text: "Origen, evaluación, acondicionamiento, compactación, almacenamiento y despacho forman parte de la cadena. La participación exacta de HT se define según la operación." },
        { id: "nutricion-animal", title: "Productos para nutrición animal", text: "HT desarrolla oportunidades con productos agroindustriales destinados a alimentación animal. La lista comercial se publicará una vez aprobada; no se exponen negociaciones, volúmenes ni precios privados." },
      ],
      ctaTitle: "¿Querés comprar u ofrecer producción?",
      ctaText: "Elegí el motivo de consulta y compartí la información esencial.",
      primary: "Consultar por alfalfa",
      secondary: "Ofrecer producción",
      ctaImage: "/images/cta/alfalfa.jpg",
      ctaImageAlt: "Fardos de alfalfa preparados para abastecimiento",
      ctaIcon: MapPin,
    },
    international: {
      eyebrow: "Comercio internacional",
      title: "Producción argentina conectada con el mundo",
      intro: "Desarrollamos oportunidades para compradores, importadores, distribuidores y socios que buscan una contraparte agroindustrial en Argentina.",
      image: "/images/alfalfa_jpg.jpg",
      sections: [
        { title: "Una unidad orientada a nuevos mercados", text: "HT incorporó el comercio internacional a su desarrollo comercial, apoyándose en su conocimiento de origen, proveedores, procesamiento y logística." },
        { title: "Modelo de trabajo", text: "Cada consulta se analiza según producto, especificación, origen, destino y condiciones operativas.", points: ["Sourcing y vinculación con origen", "Coordinación de información comercial", "Preparación y logística", "Seguimiento de la operación"] },
        { title: "Información responsable", text: "No publicamos identidades de clientes, precios, volúmenes, negociaciones ni proyecciones. La información adecuada se comparte dentro de una conversación comercial." },
      ],
      ctaTitle: "Iniciá una conversación comercial",
      ctaText: "Compartí empresa, país, producto y necesidad de abastecimiento.",
      primary: "Solicitar información para exportación",
      ctaImage: "/images/cta/international.jpg",
      ctaImageAlt: "Operación agroindustrial con proyección comercial",
      ctaIcon: Globe2,
    },
  },
  en: {
    company: {
      eyebrow: "Company",
      title: "Agricultural experience with a forward-looking approach",
      intro: "HT Semillas develops commercial solutions from Huinca Renancó, combining regional knowledge, long-term relationships and new opportunities for Argentine production.",
      image: "/images/company/field-vision.jpg",
      sections: [
        { title: "Connected to the territory", text: "Our activity began with seed marketing and expanded into agricultural supplies, animal production solutions and international trade.", points: ["Southern Córdoba", "Eastern San Luis", "Northern La Pampa"] },
        { title: "Knowledge across the value chain", text: "Our work connects growers, contractors, storage operators, processors, conditioning facilities, suppliers and buyers." },
        { title: "Technical and commercial insight", text: "HT combines experience in administration, agricultural production, animal nutrition and business development." },
      ],
      ctaTitle: "Let’s discuss a specific opportunity",
      ctaText: "Sourcing, supply, production or an institutional enquiry.",
      primary: "Talk to our team",
      ctaImage: "/images/cta/company.jpg",
      ctaImageAlt: "HT Semillas industrial infrastructure",
      ctaIcon: MapPin,
    },
    solutions: {
      eyebrow: "Solutions",
      title: "Commercial answers for every production stage",
      intro: "Seeds, supplies and coordination capabilities for growers and agricultural companies.",
      image: "/images/products/corn.jpg",
      sections: [
        { id: "seeds", title: "Seeds", text: "Soybean, wheat, corn, forage and alfalfa alternatives, subject to campaign and commercial availability." },
        { id: "agricultural-supplies", title: "Agricultural supplies", text: "Solutions supporting production planning. Specific brands and products will only be published when authorised." },
        { id: "veterinary-supplies", title: "Veterinary supplies", text: "A business line serving livestock and animal production needs. The final portfolio is pending validation." },
        { id: "processing", title: "Processing and logistics", text: "HT coordinates grading, conditioning, preparation and product movement according to each operation." },
      ],
      ctaTitle: "Tell us what you need",
      ctaText: "Include your crop, product, location or type of operation.",
      primary: "Enquire about products",
      secondary: "Offer production",
      ctaImage: "/images/cta/solutions.jpg",
      ctaImageAlt: "Agricultural supplies ready for commercial distribution",
      ctaIcon: MapPin,
    },
    processing: {
      eyebrow: "Processing",
      title: "Preparing each product for its commercial destination",
      intro: "Grading, conditioning and operational coordination add consistency and value to agricultural production.",
      image: "/images/processing/seed-processing.jpg",
      sections: [
        { title: "From raw material to commercial goods", text: "Each product requires a defined sequence of reception, assessment, grading, conditioning and preparation.", points: ["Requirements review", "Process coordination", "Commercial preparation", "Dispatch organisation"] },
        { title: "Seeds and agro-industrial products", text: "Available products and services are confirmed for each enquiry and operation." },
        { title: "Integrated capabilities", text: "HT coordinates participants and resources across the value chain. This website does not claim ownership of facilities whose status has not been confirmed." },
      ],
      ctaTitle: "Discuss your processing requirement",
      ctaText: "Tell us about the product, origin, destination and required service.",
      primary: "Processing enquiry",
      ctaImage: "/images/cta/processing.jpg",
      ctaImageAlt: "Processing and conditioning equipment",
      ctaIcon: Settings2,
    },
    alfalfa: {
      eyebrow: "Alfalfa & animal nutrition",
      title: "Production, supply and commercial coordination",
      intro: "HT connects agro-industrial supply with buyers who value continuity, adequate preparation and organised logistics.",
      image: "/images/alfalfa-megafardos.png",
      sections: [
        { id: "alfalfa", title: "Alfalfa bales", text: "HT buys and markets alfalfa, coordinating product and operational requirements. Specifications and availability are discussed for each enquiry." },
        { title: "A coordinated process", text: "Origin, assessment, conditioning, compaction, storage and dispatch form part of the value chain. HT’s exact role is defined for each operation." },
        { id: "animal-nutrition", title: "Animal nutrition products", text: "HT develops opportunities for agro-industrial products used in animal nutrition. Private negotiations, volumes and prices are not published." },
      ],
      ctaTitle: "Do you want to source or offer production?",
      ctaText: "Choose your enquiry type and share the essential information.",
      primary: "Alfalfa enquiry",
      secondary: "Offer production",
      ctaImage: "/images/cta/alfalfa.jpg",
      ctaImageAlt: "Alfalfa bales prepared for supply",
      ctaIcon: MapPin,
    },
    international: {
      eyebrow: "International trade",
      title: "Connecting Argentine production with the world",
      intro: "We develop opportunities for buyers, importers, distributors and partners seeking an agro-industrial counterpart in Argentina.",
      image: "/images/alfalfa_jpg.jpg",
      sections: [
        { title: "A business unit focused on new markets", text: "HT has added international trade to its commercial development, supported by knowledge of origin, suppliers, processing and logistics." },
        { title: "How we work", text: "Each enquiry is assessed according to product, specification, origin, destination and operational requirements.", points: ["Sourcing and origin coordination", "Commercial information", "Preparation and logistics", "Operation follow-up"] },
        { title: "Responsible information", text: "We do not publish client identities, prices, volumes, negotiations or projections. Relevant information is shared in a business conversation." },
      ],
      ctaTitle: "Start a business conversation",
      ctaText: "Share your company, country, product and sourcing requirement.",
      primary: "Request export information",
      ctaImage: "/images/cta/international.jpg",
      ctaImageAlt: "Agro-industrial operations with commercial reach",
      ctaIcon: Globe2,
    },
  },
};

export function InternalPage({ locale, page }: { locale: Locale; page: InternalKey }) {
  const c = configs[locale][page];
  const contact = localizedPath(locale, "contact");
  const supplyQuery = locale === "es" ? "motivo=ofrecer-produccion" : "intent=supply";

  return (
    <>
      <section className="bg-forest-dark text-white">
        <div className="site-container grid gap-12 py-16 lg:grid-cols-[1fr_.85fr] lg:items-center lg:py-24">
          <div>
            <Reveal variant="fadeIn">
              <p className="eyebrow text-sage">{c.eyebrow}</p>
            </Reveal>
            <Reveal variant="title" delay={0.05}>
              <h1 className="page-title mt-5">{c.title}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{c.intro}</p>
              <Link href={contact} className="button-primary mt-8 !bg-white !text-forest">
                {c.primary}
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
          <MaskReveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={c.image} alt={c.title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
          </MaskReveal>
        </div>
      </section>
      <section className="section-pad bg-paper">
        <div className="site-container grid gap-5">
          {c.sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.04} variant="riseSoft">
              <article id={section.id} className="card scroll-mt-28 grid gap-7 p-7 md:grid-cols-[4rem_1fr] md:p-10">
                <span className="grid size-12 place-items-center rounded-full bg-forest text-lg font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{section.title}</h2>
                  <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/65">{section.text}</p>
                  {section.points && (
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {section.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <Check className="mt-1 size-4 shrink-0 text-forest" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <ContactCTA
        title={c.ctaTitle}
        text={c.ctaText}
        primaryHref={contact}
        primaryLabel={c.primary}
        secondaryHref={c.secondary ? `${contact}?${supplyQuery}` : undefined}
        secondaryLabel={c.secondary}
        image={c.ctaImage}
        imageAlt={c.ctaImageAlt}
        icon={c.ctaIcon}
      />
    </>
  );
}
