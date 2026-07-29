import { ContactPage } from "@/components/contact/ContactPage"; import { createMetadata } from "@/lib/metadata";
export const metadata = createMetadata("es", "contact"); export default function Page(){ return <ContactPage locale="es"/>; }
