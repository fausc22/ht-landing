import { Hero } from "@/components/sections/Hero";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

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
