import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ClipboardCheck,
  Globe2,
  PackageCheck,
  ScanLine,
  Settings2,
  Truck,
  Wheat,
  type LucideIcon,
} from "lucide-react";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { localizedPath, type Locale } from "@/lib/site";

type Stage = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const content = {
  es: {
    eyebrow: "Procesamiento",
    title: "Preparar cada producto para su destino comercial",
    intro:
      "Coordinamos selección, acondicionamiento, preparación y movimiento de mercadería según el producto y las condiciones de cada operación.",
    heroAlt: "Proceso de selección y acondicionamiento de semillas",
    heroPrimary: "Consultar por procesamiento",
    heroSecondary: "Conocer el proceso",
    processEyebrow: "Proceso de trabajo",
    processTitle: "Una secuencia definida para cada mercadería",
    processIntro:
      "El punto de partida es entender el producto, su origen, el resultado esperado y el destino comercial. A partir de esa información se coordina el alcance necesario.",
    stages: [
      {
        title: "Relevamiento",
        text: "Producto, origen, condición inicial, volumen de referencia y destino esperado.",
        icon: ClipboardCheck,
      },
      {
        title: "Evaluación",
        text: "Revisión de requerimientos y definición de la secuencia operativa adecuada.",
        icon: ScanLine,
      },
      {
        title: "Selección y acondicionamiento",
        text: "Coordinación de las tareas necesarias según las características de la mercadería.",
        icon: Settings2,
      },
      {
        title: "Preparación comercial",
        text: "Organización del producto y su presentación para el destino acordado.",
        icon: PackageCheck,
      },
      {
        title: "Movimiento y despacho",
        text: "Articulación de la salida y la logística según las condiciones de la operación.",
        icon: Truck,
      },
    ] satisfies Stage[],
    productsEyebrow: "Semillas y granos",
    productsTitle: "Experiencia aplicada a distintos cultivos",
    productsText:
      "La actividad comprende operaciones vinculadas con soja, trigo y cultivos de invierno. El servicio exacto y la disponibilidad deben confirmarse para cada producto y campaña.",
    products: ["Soja", "Trigo", "Cebada", "Avena", "Centeno"],
    productsAlt: "Semillas preparadas para acondicionamiento y despacho",
    capacityEyebrow: "Coordinación operativa",
    capacityTitle: "Capacidades integradas según la necesidad",
    capacityText:
      "HT articula actores, recursos y etapas de la cadena para organizar cada operación. El alcance del servicio, las instalaciones involucradas y las condiciones se definen durante la conversación comercial.",
    capacityPoints: [
      "Alcance definido por operación",
      "Coordinación de etapas y participantes",
      "Preparación orientada al destino comercial",
      "Información responsable, sin promesas genéricas",
    ],
    capacityAlt: "Detalle de equipamiento vinculado con el procesamiento de semillas",
    scopeEyebrow: "Alcance comercial",
    scopeTitle: "Operaciones nacionales y de exportación",
    scopeIntro:
      "El procesamiento se coordina en función del mercado de destino, sin aplicar una solución única a productos y negocios diferentes.",
    scopes: [
      {
        title: "Mercado nacional",
        text: "Preparación y movimiento de mercadería para operaciones dentro de Argentina.",
        cta: "Consultar operación nacional",
        context: "processing-domestic",
        icon: Truck,
      },
      {
        title: "Operaciones de exportación",
        text: "Articulación de acondicionamiento, preparación y logística según los requerimientos de cada negocio internacional.",
        cta: "Consultar operación de exportación",
        context: "processing-export",
        icon: Globe2,
      },
    ],
    closingTitle: "Evaluemos tu necesidad de procesamiento",
    closingText: "Contanos producto, origen, destino y servicio requerido para orientar la operación desde el primer contacto.",
    closingPrimary: "Consultar por acondicionamiento",
    closingSecondary: "Ver soluciones",
    closingAlt: "Equipamiento de procesamiento y acondicionamiento",
  },
  en: {
    eyebrow: "Processing",
    title: "Preparing each product for its commercial destination",
    intro:
      "We coordinate grading, conditioning, preparation and product movement according to the product and the requirements of each operation.",
    heroAlt: "Seed grading and conditioning process",
    heroPrimary: "Discuss a processing requirement",
    heroSecondary: "Explore the process",
    processEyebrow: "How we work",
    processTitle: "A defined sequence for each product",
    processIntro:
      "The starting point is to understand the product, its origin, the expected outcome and its commercial destination. This information defines the required scope.",
    stages: [
      {
        title: "Requirements review",
        text: "Product, origin, initial condition, reference volume and expected destination.",
        icon: ClipboardCheck,
      },
      {
        title: "Assessment",
        text: "Review of requirements and definition of the appropriate operational sequence.",
        icon: ScanLine,
      },
      {
        title: "Grading and conditioning",
        text: "Coordination of the required tasks according to the product’s characteristics.",
        icon: Settings2,
      },
      {
        title: "Commercial preparation",
        text: "Organisation of the product and its presentation for the agreed destination.",
        icon: PackageCheck,
      },
      {
        title: "Movement and dispatch",
        text: "Coordination of dispatch and logistics according to the operation’s requirements.",
        icon: Truck,
      },
    ] satisfies Stage[],
    productsEyebrow: "Seeds and grains",
    productsTitle: "Experience applied across different crops",
    productsText:
      "Our activity covers operations involving soybean, wheat and winter crops. The exact service and availability must be confirmed for each product and crop season.",
    products: ["Soybean", "Wheat", "Barley", "Oats", "Rye"],
    productsAlt: "Seeds prepared for conditioning and dispatch",
    capacityEyebrow: "Operational coordination",
    capacityTitle: "Capabilities integrated around each requirement",
    capacityText:
      "HT coordinates participants, resources and stages across the value chain. Service scope, facilities involved and operating conditions are defined during the commercial conversation.",
    capacityPoints: [
      "Scope defined for each operation",
      "Coordination of stages and participants",
      "Preparation aligned with the commercial destination",
      "Responsible information without generic promises",
    ],
    capacityAlt: "Detail of equipment related to seed processing",
    scopeEyebrow: "Commercial reach",
    scopeTitle: "Domestic and export operations",
    scopeIntro:
      "Processing is coordinated around the destination market rather than applying one solution to different products and business requirements.",
    scopes: [
      {
        title: "Domestic market",
        text: "Product preparation and movement for operations within Argentina.",
        cta: "Discuss a domestic operation",
        context: "processing-domestic",
        icon: Truck,
      },
      {
        title: "Export operations",
        text: "Coordination of conditioning, preparation and logistics according to each international business requirement.",
        cta: "Discuss an export operation",
        context: "processing-export",
        icon: Globe2,
      },
    ],
    closingTitle: "Discuss your processing requirement",
    closingText: "Share the product, origin, destination and required service so we can assess the operation from the first contact.",
    closingPrimary: "Processing enquiry",
    closingSecondary: "View solutions",
    closingAlt: "Processing and conditioning equipment",
  },
} as const;

export function ProcessingPage({ locale }: { locale: Locale }) {
  const c = content[locale];
  const contact = localizedPath(locale, "contact");
  const solutions = localizedPath(locale, "solutions");
  const processingQuery = locale === "es" ? "motivo=procesamiento" : "intent=processing";

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
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`${contact}?${processingQuery}&context=processing`} className="button-primary !bg-white !text-forest">
                  {c.heroPrimary}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link href="#proceso" className="button-secondary !border-white/25 !bg-transparent !text-white">
                  {c.heroSecondary}
                  <ArrowDown className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
          <MaskReveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/processing/seed-processing.jpg"
              alt={c.heroAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </MaskReveal>
        </div>
      </section>

      <section id="proceso" className="section-pad scroll-mt-24 bg-paper">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow text-forest">{c.processEyebrow}</p>
            <h2 className="section-title mt-4 max-w-4xl">{c.processTitle}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/65">{c.processIntro}</p>
          </Reveal>
          <ol className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {c.stages.map((stage, index) => (
              <Reveal key={stage.title} delay={index * 0.04} variant="riseSoft">
                <li className="card flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <stage.icon className="size-7 text-forest" aria-hidden="true" />
                    <span className="text-xs font-extrabold tracking-[0.15em] text-ink/35">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-8 text-lg font-bold tracking-tight">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/70">{stage.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="site-container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <MaskReveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/processing/seed-bags.jpg" alt={c.productsAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 43vw" />
          </MaskReveal>
          <Reveal>
            <p className="eyebrow text-forest">{c.productsEyebrow}</p>
            <h2 className="section-title mt-4">{c.productsTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/65">{c.productsText}</p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {c.products.map((product) => (
                <li key={product} className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white px-4 py-2.5 font-bold">
                  <Wheat className="size-4 text-forest" aria-hidden="true" />
                  {product}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-forest text-white">
        <div className="site-container grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-sage">{c.capacityEyebrow}</p>
            <h2 className="section-title mt-4">{c.capacityTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">{c.capacityText}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {c.capacityPoints.map((point) => (
                <li key={point} className="flex gap-3 text-white/85">
                  <Check className="mt-1 size-4 shrink-0 text-sage" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <MaskReveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/processing/plant-detail.jpg" alt={c.capacityAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 43vw" />
          </MaskReveal>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow text-forest">{c.scopeEyebrow}</p>
            <h2 className="section-title mt-4 max-w-4xl">{c.scopeTitle}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/65">{c.scopeIntro}</p>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {c.scopes.map((scope, index) => (
              <Reveal key={scope.title} delay={index * 0.06} variant="riseSoft">
                <article className="card flex h-full flex-col p-7 sm:p-8">
                  <scope.icon className="size-8 text-forest" aria-hidden="true" />
                  <h3 className="mt-8 text-2xl font-bold tracking-tight">{scope.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-ink/65">{scope.text}</p>
                  <Link href={`${contact}?${processingQuery}&context=${scope.context}`} className="button-secondary mt-7 w-full sm:w-fit">
                    {scope.cta}
                    <ArrowRight className="size-4" aria-hidden="true" />
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
        primaryHref={`${contact}?${processingQuery}&context=processing`}
        primaryLabel={c.closingPrimary}
        secondaryHref={solutions}
        secondaryLabel={c.closingSecondary}
        image="/images/cta/processing.jpg"
        imageAlt={c.closingAlt}
        icon={Settings2}
      />
    </>
  );
}
