import type { Metadata } from "next";
import { pageMeta } from "@/lib/content";
import { absoluteUrl, localizedPath, type Locale, type PageKey } from "@/lib/site";

export function createMetadata(locale: Locale, page: PageKey): Metadata {
  const meta = pageMeta[locale][page];
  const canonical = localizedPath(locale, page);
  const es = localizedPath("es", page);
  const en = localizedPath("en", page);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: { "es-AR": es, en, "x-default": es },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: absoluteUrl(canonical),
      locale: locale === "es" ? "es_AR" : "en_US",
      siteName: "HT Semillas",
      type: "website",
      images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: meta.title }],
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: ["/images/og-default.jpg"] },
  };
}
