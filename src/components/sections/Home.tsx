import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Boxes, Globe2, Handshake, Leaf, Settings2, Sprout, Wheat } from "lucide-react";
import { HeroMedia, type HeroSlide } from "@/components/home/HeroMedia";
import { RegionMap } from "@/components/map/RegionMap";
import { LineGrow } from "@/components/motion/LineGrow";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { getContent } from "@/lib/content";
import { localizedPath, type Locale } from "@/lib/site";


function heroSlides(locale: Locale): HeroSlide[] {
  const es = locale === "es";
  return [
    {
      src: "/images/home/hero-01.jpg",
      alt: es ? "Planta de procesamiento de semillas HT Semillas" : "HT Semillas seed processing plant",
      position: "object-[45%_40%] md:object-[45%_40%]",
    },
    {
      src: "/images/home/hero-02.jpg",
      alt: es ? "Semillas en proceso de acondicionamiento" : "Seeds during conditioning",
      position: "object-center",
    },
    {
      src: "/images/home/hero-03.jpg",
      alt: es ? "Equipamiento de ensachetado industrial" : "Industrial bagging equipment",
      position: "object-[30%_center] md:object-[30%_center]",
    },
    {
      src: "/images/home/hero-04.jpg",
      alt: es ? "Alfalfa preparada para comercialización" : "Alfalfa prepared for commercial supply",
      position: "object-center",
    },
  ];
}

export function Home({ locale }: { locale: Locale }) {
  const c = getContent(locale).home;
  const es = locale === "es";
  const intents = es
    ? [
        { icon: Sprout, title: "Comprar semillas o insumos", text: "Encontrá una respuesta comercial para tu próxima campaña.", href: `${localizedPath(locale, "contact")}?motivo=comprar` },
        { icon: Handshake, title: "Ofrecer producción", text: "Presentanos producto, ubicación y disponibilidad.", href: `${localizedPath(locale, "contact")}?motivo=ofrecer-produccion` },
        { icon: Globe2, title: "Explorar comercio internacional", text: "Iniciá una conversación de abastecimiento o distribución.", href: `${localizedPath(locale, "contact")}?motivo=internacional` },
      ]
    : [
        { icon: Sprout, title: "Source seeds or supplies", text: "Talk to our team about your next agricultural campaign.", href: `${localizedPath(locale, "contact")}?intent=buy` },
        { icon: Handshake, title: "Offer production", text: "Introduce your product, location and availability.", href: `${localizedPath(locale, "contact")}?intent=supply` },
        { icon: Globe2, title: "Explore international trade", text: "Start a sourcing or distribution conversation.", href: `${localizedPath(locale, "contact")}?intent=international` },
      ];
  const solutions = es
    ? [
        { icon: Sprout, title: "Semillas", text: "Soja, trigo, maíz, pasturas y alternativas sujetas a disponibilidad.", anchor: "semillas" },
        { icon: Wheat, title: "Insumos agrícolas", text: "Soluciones para acompañar decisiones productivas y comerciales.", anchor: "insumos-agricolas" },
        { icon: Leaf, title: "Insumos veterinarios", text: "Una línea vinculada a sistemas ganaderos y producción animal.", anchor: "insumos-veterinarios" },
        { icon: Settings2, title: "Procesamiento", text: "Selección, acondicionamiento y preparación comercial.", anchor: "procesamiento" },
      ]
    : [
        { icon: Sprout, title: "Seeds", text: "Soybean, wheat, corn and forage alternatives subject to availability.", anchor: "seeds" },
        { icon: Wheat, title: "Agricultural supplies", text: "Solutions supporting productive and commercial decisions.", anchor: "agricultural-supplies" },
        { icon: Leaf, title: "Veterinary supplies", text: "A business line linked to livestock and animal production systems.", anchor: "veterinary-supplies" },
        { icon: Settings2, title: "Processing", text: "Grading, conditioning and commercial preparation.", anchor: "processing" },
      ];

  return (
    <>
      <section className="relative min-h-[min(100svh-5rem,52rem)] overflow-hidden bg-forest-dark text-white sm:min-h-[calc(100svh-5rem)]">
        <HeroMedia slides={heroSlides(locale)} locale={locale} />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest-dark/80 to-forest-dark/25" />
        <div className="site-container relative flex min-h-[min(100svh-5rem,52rem)] items-end py-14 sm:min-h-[calc(100svh-5rem)] sm:py-24">
          <div className="max-w-5xl pb-12 sm:pb-0">
            <Reveal variant="fadeIn">
              <p className="eyebrow text-sage">{c.eyebrow}</p>
            </Reveal>
            <Reveal variant="title" delay={0.05}>
              <h1 className="display mt-6 max-w-5xl">{c.title}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">{c.intro}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href={localizedPath(locale, "contact")} className="button-primary !bg-white !text-forest">
                  {c.primary}
                  <ArrowRight className="size-4" />
                </Link>
                <Link href={localizedPath(locale, "solutions")} className="button-secondary !border-white/40 !bg-white/10 !text-white">
                  {c.secondary}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow text-forest">{es ? "Recorridos directos" : "Direct routes"}</p>
            <h2 className="section-title mt-4 max-w-3xl">{c.intentsTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/65">{c.intentsIntro}</p>
          </Reveal>
          <Stagger className="mt-12 grid gap-4 lg:grid-cols-3">
            {intents.map((item) => (
              <StaggerItem key={item.title}>
                <Link href={item.href} className="card group block h-full p-7 transition hover:-translate-y-1 hover:border-forest/40">
                  <item.icon className="size-8 text-forest" />
                  <h3 className="mt-8 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-ink/60">{item.text}</p>
                  <ArrowRight className="mt-7 size-5 text-forest transition group-hover:translate-x-1" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-forest">{es ? "Empresa" : "Company"}</p>
            <h2 className="section-title mt-4">{c.companyTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-ink/65">{c.companyText}</p>
            <Link href={localizedPath(locale, "company")} className="button-secondary mt-8">
              {es ? "Conocer HT Semillas" : "Discover HT Semillas"}
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <MaskReveal className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
            <Image
              src="/images/company/field-vision.jpg"
              alt={es ? "Infraestructura y operación de HT Semillas" : "HT Semillas infrastructure and operations"}
              fill
              className="object-cover object-[45%_40%]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </MaskReveal>
        </div>
      </section>

      <section className="section-pad bg-forest text-white">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow text-sage">{es ? "Soluciones" : "Solutions"}</p>
            <h2 className="section-title mt-4 max-w-4xl">{c.solutionsTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">{c.solutionsIntro}</p>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/15 md:grid-cols-2">
            {solutions.map((item) => (
              <Link
                key={item.title}
                href={`${localizedPath(locale, "solutions")}#${item.anchor}`}
                className="group bg-forest-dark/55 p-7 transition hover:bg-forest-dark"
              >
                <item.icon className="size-7 text-sage" />
                <h3 className="mt-12 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 max-w-sm leading-7 text-white/65">{item.text}</p>
                <ArrowRight className="mt-7 size-5 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeatureSplit
        eyebrow={es ? "Procesamiento" : "Processing"}
        title={c.processTitle}
        text={c.processText}
        image="/images/processing/seed-processing.jpg"
        href={localizedPath(locale, "processing")}
        cta={es ? "Conocer capacidades" : "Explore capabilities"}
      />
      <FeatureSplit
        dark
        reverse
        eyebrow={es ? "Alfalfa y nutrición animal" : "Alfalfa & animal nutrition"}
        title={c.alfalfaTitle}
        text={c.alfalfaText}
        image="/images/alfalfa-megafardos.png"
        href={localizedPath(locale, "alfalfa")}
        cta={es ? "Consultar por alfalfa" : "Enquire about alfalfa"}
      />

      <section className="section-pad bg-paper">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Globe2 className="size-10 text-forest" />
            <h2 className="section-title mt-7">{c.internationalTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-ink/65">{c.internationalText}</p>
            <Link href={localizedPath(locale, "international")} className="button-primary mt-8">
              {es ? "Solicitar información comercial" : "Request business information"}
              <ArrowRight className="size-4" />
            </Link>
            <div className="mt-10">
              <h3 className="text-2xl font-bold">{c.regionTitle}</h3>
              <p className="mt-4 leading-7 text-ink/65">{c.regionText}</p>
              <LineGrow className="mt-8 bg-forest/25" />
              <p className="mt-8 text-sm font-bold uppercase tracking-widest text-forest">Huinca Renancó · Córdoba · Argentina</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <RegionMap locale={locale} />
          </Reveal>
        </div>
      </section>

      <ContactCTA
        title={c.finalTitle}
        text={c.finalText}
        primaryHref={localizedPath(locale, "contact")}
        primaryLabel={c.primary}
        image="/images/cta/home.jpg"
        imageAlt={es ? "Planta de procesamiento HT Semillas" : "HT Semillas processing plant"}
        icon={Boxes}
      />
    </>
  );
}

function FeatureSplit({
  eyebrow,
  title,
  text,
  image,
  href,
  cta,
  reverse = false,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  href: string;
  cta: string;
  reverse?: boolean;
  dark?: boolean;
}) {
  return (
    <section className={`section-pad ${dark ? "bg-forest-dark text-white" : "bg-cream"}`}>
      <div className="site-container grid gap-12 lg:grid-cols-2 lg:items-center">
        <MaskReveal className={`relative aspect-[4/3] overflow-hidden rounded-[1.5rem] ${reverse ? "lg:order-2" : ""}`}>
          <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </MaskReveal>
        <Reveal>
          <p className={`eyebrow ${dark ? "text-sage" : "text-forest"}`}>{eyebrow}</p>
          <h2 className="section-title mt-4">{title}</h2>
          <p className={`mt-6 text-lg leading-8 ${dark ? "text-white/65" : "text-ink/65"}`}>{text}</p>
          <Link href={href} className={`mt-8 ${dark ? "button-secondary !border-white/30 !text-white" : "button-secondary"}`}>
            {cta}
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
