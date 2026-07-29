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
      title: "Quiénes somos",
      intro: "HT Semillas S.A. es una empresa radicada en Huinca Renancó, Córdoba, con una década de trayectoria en el negocio agropecuario. Brindamos soluciones comerciales al productor y a la cadena, con proyección hacia el comercio internacional.",
      image: "/images/company/field-vision.jpg",
      sections: [
        {
          title: "Historia y evolución",
          text: "La actividad comenzó orientada a la comercialización de semillas—principalmente soja y trigo—y se amplió hacia insumos agrícolas, insumos veterinarios y, en su etapa actual, el desarrollo de operaciones de comercio internacional.",
          points: ["Semillas", "Insumos agrícolas", "Insumos veterinarios", "Comercio internacional"],
        },
        {
          title: "Presencia regional",
          text: "Trabajamos de forma permanente en una de las regiones agrícolas y ganaderas más productivas del país, construyendo relaciones con productores, acopios, procesadores, proveedores y entidades de la cadena.",
          points: ["Sur de Córdoba", "Este de San Luis", "Norte de La Pampa"],
        },
        {
          title: "Dirección y capital humano",
          text: "La Presidencia está a cargo del Cr. Carlos Luis Tosso, Contador Público Nacional, con amplia trayectoria en administración, finanzas y comercialización agropecuaria. La dirección se complementa con el Dr. Marcelo Alejandro Houriet, Médico Veterinario con doctorado en Nutrición Animal, quien aporta criterio técnico en sistemas pecuarios y productos para alimentación animal. Esa combinación de mirada comercial y respaldo técnico orienta operaciones ágiles, seguras y enfocadas en el valor de la producción.",
        },
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
      title: "Qué hacemos",
      intro: "Cuatro unidades de negocio para acompañar la cadena productiva: desde la semilla y los insumos hasta el procesamiento, la nutrición animal y el comercio internacional.",
      image: "/images/products/corn.jpg",
      sections: [
        {
          id: "semillas",
          title: "Comercialización de semillas",
          text: "Participamos en la comercialización de semillas para la producción agrícola, con foco en soja y trigo, e incorporando maíz, pasturas y alfalfa según campaña y disponibilidad comercial.",
          points: ["Soja y trigo", "Maíz, pasturas y alfalfa", "Consulta por ambiente y entrega"],
        },
        {
          id: "insumos-agricolas",
          title: "Insumos agrícolas",
          text: "Abastecemos a productores y empresas de la región con insumos destinados al desarrollo de sus campañas. Las marcas y productos específicos se confirman en cada consulta comercial.",
        },
        {
          id: "insumos-veterinarios",
          title: "Insumos veterinarios",
          text: "Línea orientada al sector ganadero, pensada para ampliar la propuesta comercial junto a sistemas de producción animal de la región.",
        },
        {
          id: "procesamiento",
          title: "Procesamiento y coordinación operativa",
          text: "Coordinamos capacidades de selección, acondicionamiento, preparación y movimiento de mercadería según las condiciones de cada operación.",
        },
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
      intro: "Selección, acondicionamiento y preparación comercial para agregar consistencia y valor a la producción agroindustrial.",
      image: "/images/processing/seed-processing.jpg",
      sections: [
        {
          title: "De la materia prima al producto comercial",
          text: "Cada mercadería exige una secuencia definida de recepción, evaluación, selección, acondicionamiento y preparación para despacho.",
          points: ["Relevamiento de requerimientos", "Coordinación del proceso", "Preparación comercial", "Organización del despacho"],
        },
        {
          title: "Semillas y granos",
          text: "Trabajamos el procesamiento de soja, trigo, cebada, avena y centeno mediante un esquema integral de selección, acondicionamiento y envasado, orientado a estándares de calidad y eficiencia.",
        },
        {
          title: "Una capacidad integrada a la operación",
          text: "HT articula actores y recursos de la cadena según cada operación. La titularidad y el alcance exacto de instalaciones se confirman en la conversación comercial.",
        },
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
      title: "Abastecimiento con criterio técnico y comercial",
      intro: "Vinculamos oferta agroindustrial con compradores que valoran continuidad, preparación adecuada y logística ordenada—desde alfalfa en megafardos hasta productos para nutrición animal.",
      image: "/images/alfalfa-megafardos.png",
      sections: [
        {
          id: "alfalfa",
          title: "Alfalfa en megafardos",
          text: "Coordinamos compra y comercialización de alfalfa, con un proceso que contempla recolección, controles de calidad, acondicionamiento y despacho. Especificaciones y disponibilidad se informan en cada consulta.",
          points: ["Productores y proveedores", "Compradores nacionales", "Consultas de abastecimiento internacional"],
        },
        {
          id: "nutricion-animal",
          title: "Productos para nutrición animal",
          text: "Desarrollamos oportunidades con productos agroindustriales destinados a alimentación animal, sujetos a disponibilidad y confirmación comercial.",
          points: ["Afrechillo de trigo", "Harina de soja de alta proteína (High Pro)", "Burlanda seca"],
        },
        {
          title: "Un proceso coordinado",
          text: "Origen, evaluación, acondicionamiento, compactación, almacenamiento y despacho forman parte de la cadena. El rol exacto de HT se define según la operación.",
        },
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
        {
          title: "Una unidad orientada a nuevos mercados",
          text: "HT incorporó el comercio internacional como unidad de negocio estratégica, apoyándose en su conocimiento de origen, proveedores, procesamiento y logística en la región productiva.",
        },
        {
          title: "Modelo de trabajo",
          text: "Cada consulta se analiza según producto, especificación, origen, destino y condiciones operativas.",
          points: ["Sourcing y vinculación con origen", "Coordinación de información comercial", "Preparación y logística", "Seguimiento de la operación"],
        },
        {
          title: "Información responsable",
          text: "No publicamos identidades de clientes, precios, volúmenes ni negociaciones privadas. La información adecuada se comparte dentro de una conversación comercial.",
        },
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
      title: "About us",
      intro: "HT Semillas S.A. is based in Huinca Renancó, Córdoba, with a decade of experience in Argentina’s agricultural business. We provide commercial solutions for growers and the value chain, with a clear path into international trade.",
      image: "/images/company/field-vision.jpg",
      sections: [
        {
          title: "History and growth",
          text: "We began focused on seed marketing—mainly soybean and wheat—and progressively expanded into crop inputs, veterinary supplies and, in our current stage, international trade operations.",
          points: ["Seeds", "Crop inputs", "Veterinary supplies", "International trade"],
        },
        {
          title: "Regional presence",
          text: "We work continuously across one of Argentina’s most productive agricultural and livestock regions, building lasting relationships with growers, storage operators, processors, suppliers and partners along the chain.",
          points: ["Southern Córdoba", "Eastern San Luis", "Northern La Pampa"],
        },
        {
          title: "Leadership and people",
          text: "The company is chaired by Cr. Carlos Luis Tosso, a Certified Public Accountant with extensive experience in administration, finance and agricultural marketing. Leadership is complemented by Dr. Marcelo Alejandro Houriet, a veterinarian with a doctorate in Animal Nutrition, who brings technical depth in livestock systems and feed products. Together they support agile, reliable operations focused on the value of production.",
        },
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
      title: "What we do",
      intro: "Four business units supporting the production chain—from seeds and inputs through processing, animal nutrition and international trade.",
      image: "/images/products/corn.jpg",
      sections: [
        {
          id: "seeds",
          title: "Seed marketing",
          text: "We market seeds for agricultural production, with a strong focus on soybean and wheat, plus corn, forage and alfalfa according to campaign and commercial availability.",
          points: ["Soybean and wheat", "Corn, forage and alfalfa", "Environment and delivery enquiry"],
        },
        {
          id: "agricultural-supplies",
          title: "Crop inputs",
          text: "We supply growers and regional companies with inputs required for their campaigns. Specific brands and products are confirmed in each commercial conversation.",
        },
        {
          id: "veterinary-supplies",
          title: "Veterinary supplies",
          text: "A business line serving livestock producers, expanding our commercial offer alongside regional animal production systems.",
        },
        {
          id: "processing",
          title: "Processing and operational coordination",
          text: "We coordinate grading, conditioning, preparation and product movement according to the conditions of each operation.",
        },
      ],
      ctaTitle: "Tell us what you need",
      ctaText: "Share your crop, product, location or type of operation so we can respond with relevance.",
      primary: "Enquire about products",
      secondary: "Offer production",
      ctaImage: "/images/cta/solutions.jpg",
      ctaImageAlt: "Agricultural supplies ready for commercial distribution",
      ctaIcon: MapPin,
    },
    processing: {
      eyebrow: "Processing",
      title: "Preparing each product for its commercial destination",
      intro: "Grading, conditioning and commercial preparation add consistency and value to agro-industrial production.",
      image: "/images/processing/seed-processing.jpg",
      sections: [
        {
          title: "From raw material to commercial goods",
          text: "Each product requires a defined sequence of reception, assessment, grading, conditioning and preparation for dispatch.",
          points: ["Requirements review", "Process coordination", "Commercial preparation", "Dispatch organisation"],
        },
        {
          title: "Seeds and grains",
          text: "We process soybean, wheat, barley, oats and rye through an integrated scheme of grading, conditioning and packing, oriented to quality and efficiency standards.",
        },
        {
          title: "Capabilities integrated into the operation",
          text: "HT coordinates participants and resources across the value chain for each operation. Facility ownership and exact scope are confirmed in the commercial conversation.",
        },
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
      title: "Supply with technical and commercial judgement",
      intro: "We connect agro-industrial supply with buyers who value continuity, proper preparation and organised logistics—from alfalfa bales to animal nutrition products.",
      image: "/images/alfalfa-megafardos.png",
      sections: [
        {
          id: "alfalfa",
          title: "Alfalfa bales",
          text: "We coordinate alfalfa purchasing and marketing through a process that covers harvesting, quality controls, conditioning and dispatch. Specifications and availability are confirmed for each enquiry.",
          points: ["Growers and suppliers", "Domestic buyers", "International supply enquiries"],
        },
        {
          id: "animal-nutrition",
          title: "Animal nutrition products",
          text: "We develop opportunities for agro-industrial products used in animal feeding, subject to availability and commercial confirmation.",
          points: ["Wheat bran", "High-protein soybean meal (High Pro)", "Dried distillers grains (burlanda)"],
        },
        {
          title: "A coordinated process",
          text: "Origin, assessment, conditioning, compaction, storage and dispatch form part of the chain. HT’s exact role is defined for each operation.",
        },
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
        {
          title: "A unit focused on new markets",
          text: "HT has established international trade as a strategic business unit, building on regional knowledge of origin, suppliers, processing and logistics.",
        },
        {
          title: "How we work",
          text: "Each enquiry is assessed according to product, specification, origin, destination and operational conditions.",
          points: ["Sourcing and origin coordination", "Commercial information", "Preparation and logistics", "Operation follow-up"],
        },
        {
          title: "Responsible information",
          text: "We do not publish client identities, prices, volumes or private negotiations. Relevant details are shared within a business conversation.",
        },
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
