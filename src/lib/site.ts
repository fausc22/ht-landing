export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const site = {
  name: "HT Semillas S.A.",
  shortName: "HT Semillas",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://htsemillas.com.ar",
  location: "Huinca Renancó, Córdoba, Argentina",
  region: "Sur de Córdoba, este de San Luis y norte de La Pampa",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "",
} as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const paths = {
  es: {
    home: "/es",
    company: "/es/empresa",
    solutions: "/es/soluciones",
    processing: "/es/procesamiento",
    alfalfa: "/es/alfalfa-nutricion-animal",
    international: "/es/comercio-internacional",
    contact: "/es/contacto",
  },
  en: {
    home: "/en",
    company: "/en/company",
    solutions: "/en/solutions",
    processing: "/en/processing",
    alfalfa: "/en/alfalfa-animal-nutrition",
    international: "/en/international-trade",
    contact: "/en/contact",
  },
} as const;

export const pageKeys = [
  "home",
  "company",
  "solutions",
  "processing",
  "alfalfa",
  "international",
  "contact",
] as const;
export type PageKey = (typeof pageKeys)[number];

export function localizedPath(locale: Locale, page: PageKey) {
  return paths[locale][page];
}

export function alternatePath(pathname: string, target: Locale) {
  const source: Locale = pathname.startsWith("/en") ? "en" : "es";
  const entry = pageKeys.find((key) => {
    const path = paths[source][key];
    return pathname === path || pathname.startsWith(`${path}/`);
  });
  if (!entry) return paths[target].home;
  const suffix = pathname.slice(paths[source][entry].length);
  return `${paths[target][entry]}${suffix}`;
}

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}
