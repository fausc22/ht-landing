import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Producción y comercialización de alfalfa`,
    template: `%s | ${site.name}`,
  },
  description:
    "HT Semillas comercializa semillas, agroquímicos y alfalfa. Trabaja junto a productores agropecuarios en Huinca Renanco, Córdoba.",
  keywords: [
    "HT Semillas",
    "alfalfa",
    "semillas de alfalfa",
    "agroquímicos",
    "Huinca Renanco",
    "Córdoba",
    "heno de alfalfa",
  ],
  openGraph: {
    title: `${site.name} | Alfalfa, semillas y agroquímicos`,
    description:
      "Insumos agropecuarios y producción de alfalfa con demanda organizada.",
    url: site.url,
    siteName: site.name,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/alfalfa-megafardos.png",
        width: 1792,
        height: 1024,
        alt: "Producción y comercialización de alfalfa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Alfalfa, semillas y agroquímicos`,
    description:
      "Insumos agropecuarios y producción de alfalfa con demanda organizada.",
    images: ["/images/alfalfa-megafardos.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.tagline,
    url: site.url,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Huinca Renanco",
      addressRegion: "Córdoba",
      addressCountry: "AR",
    },
    areaServed: site.region,
    knowsAbout: [
      "Semillas de alfalfa",
      "Agroquímicos",
      "Producción de alfalfa",
      "Heno de alfalfa",
    ],
  };

  return (
    <html lang="es" className="light">
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
