import { SolutionsPage } from "@/components/solutions/SolutionsPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("es", "solutions");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("es", "solutions")} />
      <SolutionsPage locale="es" />
    </>
  );
}
