import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";
import { RegionMap } from "@/components/map/RegionMap";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { localizedPath, type Locale } from "@/lib/site";

const companyContent = {
  es: {
    eyebrow: "Empresa",
    title: "Quiénes somos",
    intro:
      "HT Semillas S.A. nació en Huinca Renancó hace una década. Desde el procesamiento de semillas fiscalizadas construimos una propuesta que integra conocimiento productivo, coordinación comercial y una mirada hacia nuevos mercados.",
    heroAlt: "Actividad de procesamiento de semillas vinculada con HT Semillas",
    historyEyebrow: "Historia y evolución",
    historyTitle: "Una década creciendo junto a la cadena agropecuaria",
    historyIntro:
      "La evolución de HT responde a una misma lógica: sumar capacidades alrededor de la producción y convertirlas en soluciones comerciales concretas.",
    milestones: [
      {
        label: "El origen",
        title: "Procesamiento de semillas fiscalizadas",
        text: "La empresa comenzó procesando semillas fiscalizadas, principalmente soja y trigo, para compañías del mercado.",
      },
      {
        label: "Ampliación productiva",
        title: "Nuevos cultivos de invierno",
        text: "Con los años se incorporaron avena y centeno, ampliando la experiencia de HT en semillas y cultivos de invierno.",
      },
      {
        label: "Una propuesta complementaria",
        title: "Insumos para la campaña",
        text: "La comercialización de agroquímicos, coadyuvantes y otros insumos agrícolas se sumó como complemento de la actividad semillera.",
      },
      {
        label: "La etapa actual",
        title: "Producción con proyección internacional",
        text: "HT desarrolla operaciones comerciales y de exportación vinculadas con megafardos de alfalfa, afrechillo de trigo, burlanda seca y High Pro.",
      },
    ],
    regionEyebrow: "Presencia regional",
    regionTitle: "Cercanía con el productor, alcance entre provincias",
    regionText:
      "Trabajamos en una región agrícola y ganadera estratégica, construyendo relaciones con productores, acopios, procesadores, proveedores y empresas de la cadena.",
    regions: [
      { name: "San Luis", scope: "Toda la provincia" },
      { name: "Córdoba", scope: "Sur, centro y este" },
      { name: "Santa Fe", scope: "Sur provincial" },
      { name: "La Pampa", scope: "Norte provincial" },
    ],
    peopleEyebrow: "Dirección y capital humano",
    peopleTitle: "Gestión comercial y respaldo técnico",
    peopleIntro:
      "La conducción combina experiencia administrativa, conocimiento del negocio agropecuario y formación técnica aplicada a la producción animal.",
    people: [
      {
        name: "Cr. Carlos Luis Tosso",
        role: "Presidencia · Contador Público Nacional",
        text: "Aporta una amplia trayectoria en administración, finanzas y comercialización agropecuaria, con foco en estructurar operaciones sólidas y relaciones de largo plazo.",
        icon: BriefcaseBusiness,
      },
      {
        name: "Dr. Marcelo Alejandro Houriet",
        role: "Médico Veterinario · Doctor en Nutrición Animal",
        text: "Aporta criterio técnico en sistemas pecuarios y productos para alimentación animal, integrando la mirada productiva con las necesidades comerciales.",
        icon: GraduationCap,
      },
    ],
    ctaTitle: "Hablemos de una oportunidad concreta",
    ctaText: "Compras, abastecimiento, producción o una consulta institucional.",
    ctaLabel: "Hablar con el equipo",
    ctaAlt: "Actividad agroindustrial vinculada con HT Semillas",
  },
  en: {
    eyebrow: "Company",
    title: "About us",
    intro:
      "HT Semillas S.A. was established in Huinca Renancó a decade ago. From certified seed processing, we built a proposition combining production knowledge, commercial coordination and access to new markets.",
    heroAlt: "Seed processing activity connected with HT Semillas",
    historyEyebrow: "History and growth",
    historyTitle: "A decade of growth across the agricultural value chain",
    historyIntro:
      "HT has evolved around one principle: add capabilities around agricultural production and turn them into clear commercial solutions.",
    milestones: [
      {
        label: "Our origin",
        title: "Certified seed processing",
        text: "The company began by processing certified seed, primarily soybean and wheat, for companies in the agricultural market.",
      },
      {
        label: "Production expansion",
        title: "New winter crops",
        text: "Oats and rye were added over time, expanding HT’s experience in seeds and winter crops.",
      },
      {
        label: "A complementary offer",
        title: "Inputs for each campaign",
        text: "Crop protection products, adjuvants and other crop inputs were added as a complement to the seed business.",
      },
      {
        label: "Our current stage",
        title: "Production with international reach",
        text: "HT develops commercial and export operations involving alfalfa bales, wheat bran, dried distillers grains and High Pro.",
      },
    ],
    regionEyebrow: "Regional presence",
    regionTitle: "Close to growers, connected across provinces",
    regionText:
      "We operate across a strategic agricultural and livestock region, building relationships with growers, storage operators, processors, suppliers and companies along the value chain.",
    regions: [
      { name: "San Luis", scope: "Entire province" },
      { name: "Córdoba", scope: "South, centre and east" },
      { name: "Santa Fe", scope: "Southern area" },
      { name: "La Pampa", scope: "Northern area" },
    ],
    peopleEyebrow: "Leadership and people",
    peopleTitle: "Commercial management and technical expertise",
    peopleIntro:
      "Our leadership combines administrative experience, knowledge of the agricultural business and technical training applied to animal production.",
    people: [
      {
        name: "Carlos Luis Tosso",
        role: "President · Public Accountant",
        text: "He brings extensive experience in administration, finance and agricultural marketing, focused on structuring sound operations and long-term relationships.",
        icon: BriefcaseBusiness,
      },
      {
        name: "Dr Marcelo Alejandro Houriet",
        role: "Veterinarian · Doctor in Animal Nutrition",
        text: "He contributes technical expertise in livestock systems and animal feed products, connecting production insight with commercial requirements.",
        icon: GraduationCap,
      },
    ],
    ctaTitle: "Let’s discuss a specific opportunity",
    ctaText: "Sourcing, supply, production or an institutional enquiry.",
    ctaLabel: "Talk to our team",
    ctaAlt: "Agro-industrial activity connected with HT Semillas",
  },
} as const;

export function CompanyPage({ locale }: { locale: Locale }) {
  const c = companyContent[locale];
  const contact = localizedPath(locale, "contact");

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
                {c.ctaLabel}
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
          <MaskReveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/company/field-vision.jpg"
              alt={c.heroAlt}
              fill
              priority
              className="object-cover object-[45%_40%]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </MaskReveal>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow text-forest">{c.historyEyebrow}</p>
            <h2 className="section-title mt-4 max-w-4xl">{c.historyTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/65">{c.historyIntro}</p>
          </Reveal>
          <ol className="relative mt-14 grid gap-5 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-px before:bg-forest/20 lg:grid-cols-4 lg:gap-4 lg:before:bottom-auto lg:before:left-8 lg:before:right-8 lg:before:top-6 lg:before:h-px lg:before:w-auto">
            {c.milestones.map((milestone, index) => (
              <li key={milestone.title} className="relative grid grid-cols-[3rem_1fr] gap-5 lg:block">
                <span className="relative z-10 grid size-12 place-items-center rounded-full bg-forest text-sm font-extrabold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="card p-6 lg:mt-7 lg:min-h-72">
                  <p className="eyebrow text-forest">{milestone.label}</p>
                  <h3 className="mt-4 text-xl font-bold tracking-tight">{milestone.title}</h3>
                  <p className="mt-4 leading-7 text-ink/65">{milestone.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="site-container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-forest">{c.regionEyebrow}</p>
            <h2 className="section-title mt-4">{c.regionTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-ink/65">{c.regionText}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {c.regions.map((region) => (
                <div key={region.name} className="card flex gap-3 p-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-forest" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold">{region.name}</h3>
                    <p className="mt-1 text-sm text-ink/70">{region.scope}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <RegionMap locale={locale} />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-forest text-white">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow text-sage">{c.peopleEyebrow}</p>
            <h2 className="section-title mt-4 max-w-4xl">{c.peopleTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">{c.peopleIntro}</p>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {c.people.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.06}>
                <article className="h-full rounded-2xl border border-white/15 bg-forest-dark/50 p-7 sm:p-8">
                  <person.icon className="size-8 text-sage" aria-hidden="true" />
                  <h3 className="mt-8 text-2xl font-bold">{person.name}</h3>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-sage">{person.role}</p>
                  <p className="mt-5 leading-7 text-white/65">{person.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title={c.ctaTitle}
        text={c.ctaText}
        primaryHref={contact}
        primaryLabel={c.ctaLabel}
        image="/images/cta/company.jpg"
        imageAlt={c.ctaAlt}
        icon={MapPin}
      />
    </>
  );
}
