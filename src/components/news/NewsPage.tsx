import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { getNews } from "@/lib/news";
import { localizedPath, type Locale } from "@/lib/site";

export function NewsPage({ locale }: { locale: Locale }) {
  const items = getNews(locale);
  const es = locale === "es";
  return (
    <>
      <section className="bg-forest-dark py-16 text-white lg:py-24">
        <div className="site-container">
          <Reveal variant="fadeIn">
            <p className="eyebrow text-sage">{es ? "Novedades" : "News"}</p>
          </Reveal>
          <Reveal variant="title" delay={0.05}>
            <h1 className="page-title mt-5">{es ? "Actividad, campañas y conocimiento" : "Activity, campaigns and insight"}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              {es
                ? "Un espacio para comunicar novedades reales de HT Semillas y aportar información útil a la cadena agropecuaria."
                : "A space for verified HT Semillas updates and useful information for the agricultural value chain."}
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section-pad bg-paper">
        <div className="site-container">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <StaggerItem key={item.slug}>
                <article className="card h-full overflow-hidden transition hover:-translate-y-1 hover:border-forest/30">
                  {item.image && (
                    <div className="relative aspect-[16/10]">
                      <Image src={item.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="eyebrow text-forest">
                      {item.category} ·{" "}
                      <time dateTime={item.date}>
                        {new Intl.DateTimeFormat(es ? "es-AR" : "en", { dateStyle: "medium" }).format(
                          new Date(`${item.date}T12:00:00`),
                        )}
                      </time>
                    </p>
                    <h2 className="mt-4 text-2xl font-bold">{item.title}</h2>
                    <p className="mt-3 leading-7 text-ink/70">{item.excerpt}</p>
                    <Link href={localizedPath(locale, "contact")} className="button-secondary mt-6">
                      {es ? "Leer novedad" : "Read article"}
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          {items.length === 0 && <p>{es ? "Todavía no hay novedades publicadas." : "No news has been published yet."}</p>}
        </div>
      </section>
    </>
  );
}
