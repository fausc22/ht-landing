import { ProcessingPage } from "@/components/processing/ProcessingPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("en", "processing");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("en", "processing")} />
      <ProcessingPage locale="en" />
    </>
  );
}
