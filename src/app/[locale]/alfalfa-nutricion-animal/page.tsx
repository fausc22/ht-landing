import { AlfalfaPage } from "@/components/alfalfa/AlfalfaPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("es", "alfalfa");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("es", "alfalfa")} />
      <AlfalfaPage locale="es" />
    </>
  );
}
