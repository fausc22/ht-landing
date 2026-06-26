import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | Alfalfa, semillas y agroquímicos`,
  description:
    "HT Semillas comercializa semillas, agroquímicos y alfalfa. Producción de alfalfa con demanda organizada en Huinca Renanco, Córdoba.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <About />
      <Process />
      <CTA />
      <Contact />
    </>
  );
}
