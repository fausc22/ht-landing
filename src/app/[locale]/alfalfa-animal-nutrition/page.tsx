import { AlfalfaPage } from "@/components/alfalfa/AlfalfaPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("en", "alfalfa");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("en", "alfalfa")} />
      <AlfalfaPage locale="en" />
    </>
  );
}
