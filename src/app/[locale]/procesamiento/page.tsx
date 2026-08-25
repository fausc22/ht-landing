import { ProcessingPage } from "@/components/processing/ProcessingPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("es", "processing");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("es", "processing")} />
      <ProcessingPage locale="es" />
    </>
  );
}
