import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { DocumentLang } from "@/components/layout/DocumentLang";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { getContent } from "@/lib/content";
import { isLocale, locales, site } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const copy = getContent(value);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    additionalType: "https://schema.org/AgriculturalBusiness",
    name: site.name,
    legalName: site.name,
    url: site.url,
    logo: absoluteLogoUrl(),
    image: absoluteLogoUrl(),
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.8406,
      longitude: -64.3756,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Provincia de San Luis" },
      { "@type": "AdministrativeArea", name: "Sur, centro y este de Córdoba" },
      { "@type": "AdministrativeArea", name: "Sur de Santa Fe" },
      { "@type": "AdministrativeArea", name: "Norte de La Pampa" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "sales",
        email: site.email,
        availableLanguage: ["Spanish", "English"],
        areaServed: "AR",
      },
    ],
  };

  return (
    <>
      <DocumentLang locale={value} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a href="#main" className="skip-link">{copy.skip}</a>
      <Header locale={value} />
      <main id="main">{children}</main>
      <Footer locale={value} />
      <Suspense><WhatsAppButton locale={value} /></Suspense>
    </>
  );
}

function absoluteLogoUrl() {
  return new URL("/brand/variants/logo-ht-mark.png", site.url).toString();
}
