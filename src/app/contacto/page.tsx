import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contactá a ${site.name}. ${site.location}. Consultas por semillas y agroquímicos.`,
};

export default function ContactoPage() {
  return (
    <div className="py-12">
      <Contact />
    </div>
  );
}
