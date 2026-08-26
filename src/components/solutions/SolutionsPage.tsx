import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  FlaskConical,
  PackageCheck,
  Sprout,
  Wheat,
  type LucideIcon,
} from "lucide-react";
import { CatalogDialog } from "@/components/catalog/CatalogDialog";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { localizedPath, type Locale } from "@/lib/site";

type Activity = {
  id: string;
  number: string;
  title: string;
  summary: string;
  icon: LucideIcon;
};

const content = {
  es: {
    eyebrow: "Soluciones",
    title: "Tres actividades, una mirada integral",
    intro:
      "HT Semillas articula semillas y cultivos, insumos agrícolas, y capacidades de procesamiento para acompañar operaciones concretas de la cadena agropecuaria.",
    heroAlt: "Cultivo de sorgo representativo de las soluciones de HT Semillas",
    heroPrimary: "Consultar por semillas e insumos",
    heroSecondary: "Explorar soluciones",
    activitiesEyebrow: "Qué hacemos",
    activitiesTitle: "Una propuesta enfocada en la producción y su destino comercial",
    activitiesIntro:
      "Cada actividad puede abordarse de manera independiente o integrarse según el producto, la campaña y las condiciones de la operación.",
    activities: [
      {
        id: "semillas",
        number: "01",
        title: "Semillas y cultivos",
        summary: "Alternativas para cultivos extensivos, forrajeros, de invierno y de servicio.",
        icon: Wheat,
      },
      {
        id: "insumos-agricolas",
        number: "02",
        title: "Insumos agrícolas",
        summary: "Productos complementarios para acompañar las necesidades de cada campaña.",
        icon: FlaskConical,
      },
      {
        id: "procesamiento",
        number: "03",
        title: "Procesamiento y coordinación operativa",
        summary: "Preparación y movimiento de mercadería para operaciones nacionales y de exportación.",
        icon: PackageCheck,
      },
    ] satisfies Activity[],
    seedsEyebrow: "Semillas y cultivos",
    seedsTitle: "Una oferta organizada según el planteo productivo",
    seedsText:
      "Comercializamos semillas y alternativas sujetas a campaña y disponibilidad. La consulta comercial permite confirmar variedades, marcas y condiciones vigentes para cada necesidad.",
    seedsAlt: "Semillas y cultivos comercializados por HT Semillas",
    seedGroups: [
      {
        title: "Cultivos extensivos",
        text: "Soja, trigo, maíz, sorgo y girasol.",
      },
      {
        title: "Pasturas y alfalfa",
        text: "Opciones forrajeras para distintos sistemas productivos.",
      },
      {
        title: "Cultivos de invierno",
        text: "Avena, cebada y centeno.",
      },
      {
        title: "Cultivos de servicio",
        text: "Alternativas para incorporar al planteo de cada campaña.",
      },
    ],
    seedsCta: "Consultar disponibilidad",
    seedsCatalogCta: "Ver catálogo de semillas",
    inputsEyebrow: "Insumos agrícolas",
    inputsTitle: "Un complemento para la campaña",
    inputsText:
      "La propuesta incluye agroquímicos, coadyuvantes y otros insumos agrícolas. Marcas, productos y disponibilidad se confirman en cada consulta, sin prometer un stock que puede variar durante la campaña.",
    inputsPoints: ["Agroquímicos", "Coadyuvantes", "Otros insumos complementarios"],
    inputsAlt: "Insumos agrícolas disponibles mediante consulta comercial",
    inputsCta: "Consultar por insumos",
    inputsCatalogCta: "Ver catálogo de insumos",
    processingEyebrow: "Procesamiento y coordinación operativa",
    processingTitle: "Capacidades coordinadas según cada operación",
    processingText:
      "Coordinamos selección, acondicionamiento, preparación y movimiento de mercadería de acuerdo con el producto y su destino comercial.",
    processingPoints: ["Selección", "Acondicionamiento", "Preparación", "Movimiento de mercadería"],
    scopes: [
      { title: "Operaciones nacionales", text: "Preparación y coordinación de mercadería para su circulación en el mercado argentino." },
      { title: "Operaciones de exportación", text: "Acondicionamiento y articulación operativa según las condiciones de cada negocio internacional." },
    ],
    processingAlt: "Proceso de selección y acondicionamiento de semillas",
    processingCta: "Consultar por procesamiento",
    closingTitle: "Contanos qué necesitás producir, comprar o preparar",
    closingText:
      "Indicá cultivo, producto, localidad o tipo de operación. El equipo de HT podrá orientar la conversación desde el primer contacto.",
    closingPrimary: "Hablar con el equipo comercial",
    closingSecondary: "Ofrecer producción",
    closingAlt: "Soluciones agrícolas preparadas para comercialización",
  },
  en: {
    eyebrow: "Solutions",
    title: "Three activities, one integrated approach",
    intro:
      "HT Semillas brings together seeds and crops, crop inputs, and processing capabilities to support specific operations across the agricultural value chain.",
    heroAlt: "Sorghum crop representing HT Semillas solutions",
    heroPrimary: "Enquire about seeds and inputs",
    heroSecondary: "Explore solutions",
    activitiesEyebrow: "What we do",
    activitiesTitle: "A proposition focused on production and its commercial destination",
    activitiesIntro:
      "Each activity can be approached independently or combined according to the product, crop season and operating requirements.",
    activities: [
      {
        id: "seeds",
        number: "01",
        title: "Seeds and crops",
        summary: "Options for broadacre, forage, winter and cover crops.",
        icon: Wheat,
      },
      {
        id: "agricultural-supplies",
        number: "02",
        title: "Crop inputs",
        summary: "Complementary products supporting the requirements of each crop season.",
        icon: FlaskConical,
      },
      {
        id: "processing",
        number: "03",
        title: "Processing and operational coordination",
        summary: "Product preparation and movement for domestic and export operations.",
        icon: PackageCheck,
      },
    ] satisfies Activity[],
    seedsEyebrow: "Seeds and crops",
    seedsTitle: "An offer organised around production requirements",
    seedsText:
      "We market seeds and crop options subject to season and availability. Each business enquiry allows us to confirm current varieties, brands and terms for the specific requirement.",
    seedsAlt: "Seeds and crops marketed by HT Semillas",
    seedGroups: [
      { title: "Broadacre crops", text: "Soybean, wheat, corn, sorghum and sunflower." },
      { title: "Pastures and alfalfa", text: "Forage options for different production systems." },
      { title: "Winter crops", text: "Oats, barley and rye." },
      { title: "Cover crops", text: "Options to incorporate into each crop-season plan." },
    ],
    seedsCta: "Check availability",
    seedsCatalogCta: "View seed catalogue",
    inputsEyebrow: "Crop inputs",
    inputsTitle: "A complementary offer for each crop season",
    inputsText:
      "Our offer includes crop protection products, adjuvants and other agricultural inputs. Brands, products and availability are confirmed with each enquiry, as stock may vary throughout the season.",
    inputsPoints: ["Crop protection products", "Adjuvants", "Other complementary inputs"],
    inputsAlt: "Crop inputs available through commercial enquiry",
    inputsCta: "Enquire about crop inputs",
    inputsCatalogCta: "View input catalogue",
    processingEyebrow: "Processing and operational coordination",
    processingTitle: "Capabilities coordinated for each operation",
    processingText:
      "We coordinate grading, conditioning, preparation and product movement according to the product and its commercial destination.",
    processingPoints: ["Grading", "Conditioning", "Preparation", "Product movement"],
    scopes: [
      { title: "Domestic operations", text: "Product preparation and coordination for distribution within the Argentine market." },
      { title: "Export operations", text: "Conditioning and operational coordination according to each international business requirement." },
    ],
    processingAlt: "Seed grading and conditioning process",
    processingCta: "Discuss a processing requirement",
    closingTitle: "Tell us what you need to produce, source or prepare",
    closingText:
      "Share the crop, product, location or type of operation. The HT team can make the first conversation more relevant.",
    closingPrimary: "Talk to our commercial team",
    closingSecondary: "Offer production",
    closingAlt: "Agricultural solutions prepared for commercial distribution",
  },
} as const;

export function SolutionsPage({ locale }: { locale: Locale }) {
  const c = content[locale];
  const contact = localizedPath(locale, "contact");
  const buyQuery = locale === "es" ? "motivo=comprar" : "intent=buy";
  const processingQuery = locale === "es" ? "motivo=procesamiento" : "intent=processing";
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
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`${contact}?${buyQuery}&context=seeds`} className="button-primary !bg-white !text-forest">
                  {c.heroPrimary}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link href="#actividades" className="button-secondary !border-white/25 !bg-transparent !text-white">
                  {c.heroSecondary}
                  <ArrowDown className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
          <MaskReveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/products/sorghum-field.jpg"
              alt={c.heroAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </MaskReveal>
        </div>
      </section>

      <section id="actividades" className="section-pad scroll-mt-24 bg-paper">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow text-forest">{c.activitiesEyebrow}</p>
            <h2 className="section-title mt-4 max-w-4xl">{c.activitiesTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/65">{c.activitiesIntro}</p>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {c.activities.map((activity, index) => (
              <Reveal key={activity.id} delay={index * 0.05} variant="riseSoft">
                <Link href={`#${activity.id}`} className="card group flex h-full flex-col p-7 transition-colors hover:border-forest/40">
                  <div className="flex items-center justify-between">
                    <activity.icon className="size-8 text-forest" aria-hidden="true" />
                    <span className="text-sm font-extrabold tracking-[0.15em] text-ink/35">{activity.number}</span>
                  </div>
                  <h3 className="mt-10 text-2xl font-bold tracking-tight">{activity.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-ink/65">{activity.summary}</p>
                  <ArrowDown className="mt-7 size-5 text-forest transition-transform group-hover:translate-y-1" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id={c.activities[0].id} className="section-pad scroll-mt-24 bg-cream">
        <div className="site-container grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <MaskReveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/products/seeds.jpg" alt={c.seedsAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
          </MaskReveal>
          <Reveal>
            <p className="eyebrow text-forest">{c.seedsEyebrow}</p>
            <h2 className="section-title mt-4">{c.seedsTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/65">{c.seedsText}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {c.seedGroups.map((group) => (
                <article key={group.title} className="card p-5">
                  <Sprout className="size-5 text-forest" aria-hidden="true" />
                  <h3 className="mt-4 font-bold">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/70">{group.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`${contact}?${buyQuery}&context=seeds`} className="button-primary">
                {c.seedsCta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <CatalogDialog locale={locale} catalog="seeds" label={c.seedsCatalogCta} />
            </div>
          </Reveal>
        </div>
      </section>

      <section id={c.activities[1].id} className="section-pad scroll-mt-24 bg-paper">
        <div className="site-container grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-forest">{c.inputsEyebrow}</p>
            <h2 className="section-title mt-4">{c.inputsTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/65">{c.inputsText}</p>
            <ul className="mt-7 grid gap-3">
              {c.inputsPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="grid size-7 place-items-center rounded-full bg-forest/10">
                    <Check className="size-4 text-forest" aria-hidden="true" />
                  </span>
                  <span className="font-semibold">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`${contact}?${buyQuery}&context=crop-inputs`} className="button-secondary">
                {c.inputsCta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <CatalogDialog locale={locale} catalog="crop-inputs" label={c.inputsCatalogCta} />
            </div>
          </Reveal>
          <MaskReveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/products/crop-inputs.jpg" alt={c.inputsAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
          </MaskReveal>
        </div>
      </section>

      <section id={c.activities[2].id} className="section-pad scroll-mt-24 bg-forest text-white">
        <div className="site-container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <MaskReveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/processing/seed-processing.jpg" alt={c.processingAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
          </MaskReveal>
          <Reveal>
            <p className="eyebrow text-sage">{c.processingEyebrow}</p>
            <h2 className="section-title mt-4">{c.processingTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">{c.processingText}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {c.processingPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-white/85">
                  <Check className="size-4 shrink-0 text-sage" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {c.scopes.map((scope) => (
                <article key={scope.title} className="rounded-2xl border border-white/15 bg-forest-dark/45 p-5">
                  <h3 className="font-bold">{scope.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{scope.text}</p>
                </article>
              ))}
            </div>
            <Link href={`${contact}?${processingQuery}&context=processing`} className="button-primary mt-8 !bg-white !text-forest">
              {c.processingCta}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactCTA
        title={c.closingTitle}
        text={c.closingText}
        primaryHref={contact}
        primaryLabel={c.closingPrimary}
        secondaryHref={`${contact}?${supplyQuery}`}
        secondaryLabel={c.closingSecondary}
        image="/images/cta/solutions.jpg"
        imageAlt={c.closingAlt}
        icon={Sprout}
      />
    </>
  );
}
