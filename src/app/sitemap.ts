import type { MetadataRoute } from "next";
import { absoluteUrl, locales, pageKeys, localizedPath } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pageKeys.map((page) => ({
      url: absoluteUrl(localizedPath(locale, page)),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "home" ? 1 : page === "contact" ? 0.9 : 0.8,
      alternates: {
        languages: {
          es: absoluteUrl(localizedPath("es", page)),
          en: absoluteUrl(localizedPath("en", page)),
        },
      },
    })),
  );
}
