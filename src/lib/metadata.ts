import type { Metadata } from "next";
import { pageMeta } from "@/lib/content";
import { absoluteUrl, localizedPath, site, type Locale, type PageKey } from "@/lib/site";

const ogImages: Record<PageKey, string> = {
  home: "/images/og/og-home.jpg",
  company: "/images/og/og-empresa.jpg",
  solutions: "/images/og/og-soluciones.jpg",
  processing: "/images/og/og-procesamiento.jpg",
  alfalfa: "/images/og/og-alfalfa.jpg",
  international: "/images/og/og-internacional.jpg",
  contact: "/images/og/og-contacto.jpg",
};

export function createMetadata(locale: Locale, page: PageKey): Metadata {
  const meta = pageMeta[locale][page];
  const canonical = localizedPath(locale, page);
  const es = localizedPath("es", page);
  const en = localizedPath("en", page);
  const fullTitle = `HT Semillas | ${meta.title}`;
  const ogImage = ogImages[page];
  const contentLanguage = locale === "es" ? "es-AR" : "en";

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: { "es-AR": es, en, "x-default": es },
    },
    other: {
      "content-language": contentLanguage,
    },
    openGraph: {
      title: fullTitle,
      description: meta.description,
      url: absoluteUrl(canonical),
      locale: locale === "es" ? "es_AR" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_AR"],
      siteName: site.shortName,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: meta.description,
      images: [ogImage],
    },
  };
}

export function breadcrumbJsonLd(locale: Locale, page: PageKey) {
  const meta = pageMeta[locale][page];
  const homeLabel = locale === "es" ? "Inicio" : "Home";
  const items = [
    {
      "@type": "ListItem" as const,
      position: 1,
      name: homeLabel,
      item: absoluteUrl(localizedPath(locale, "home")),
    },
  ];

  if (page !== "home") {
    items.push({
      "@type": "ListItem" as const,
      position: 2,
      name: meta.title,
      item: absoluteUrl(localizedPath(locale, page)),
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}
