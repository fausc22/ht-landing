import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Reveal } from "@/components/motion/Reveal";
import { getArticle } from "@/lib/news";
import { localizedPath, type Locale } from "@/lib/site";

export async function ArticlePage({ locale, slug }: { locale: Locale; slug: string }) {
  const article = getArticle(locale, slug);
  if (!article) return null;
  const es = locale === "es";
  return (
    <article>
      <header className="bg-forest-dark py-16 text-white lg:py-24">
        <div className="site-container max-w-4xl">
          <Link href={locale === "es" ? "/es" : "/en"} className="inline-flex items-center gap-2 text-sm text-white/65">
            <ArrowLeft className="size-4" />
            {es ? "Volver al inicio" : "Back to home"}
          </Link>
          <Reveal variant="fadeIn">
            <p className="eyebrow mt-10 text-sage">
              {article.category} · <time dateTime={article.date}>{article.date}</time>
            </p>
          </Reveal>
          <Reveal variant="title" delay={0.05}>
            <h1 className="page-title mt-5">{article.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 text-xl leading-8 text-white/70">{article.excerpt}</p>
          </Reveal>
        </div>
      </header>
      {article.image && (
        <div className="site-container relative -mt-8 aspect-[16/7] overflow-hidden rounded-2xl">
          <Image src={article.image} alt="" fill priority className="object-cover" sizes="100vw" />
        </div>
      )}
      <div className="site-container section-pad max-w-3xl">
        <div className="prose prose-lg max-w-none prose-headings:text-ink prose-a:text-forest">
          <MDXRemote source={article.body} />
        </div>
        <div className="mt-16 rounded-2xl bg-gold p-7">
          <h2 className="text-2xl font-bold">{es ? "¿Querés conversar sobre este tema?" : "Would you like to discuss this topic?"}</h2>
          <Link href={localizedPath(locale, "contact")} className="button-primary mt-5">
            {es ? "Realizar una consulta" : "Make an enquiry"}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
