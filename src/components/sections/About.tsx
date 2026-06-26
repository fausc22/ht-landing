"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function About() {
  return (
    <section
      id="nosotros"
      className="scroll-mt-20 border-t border-stone-200 bg-stone-50/50 py-20"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              Una empresa agropecuaria pensada para resolver campaña y venta
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              En {site.location}, {site.name} trabaja cerca del productor con
              dos necesidades muy concretas: conseguir insumos confiables para
              sembrar y transformar producción de alfalfa en una venta
              organizada.
            </p>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              La propuesta combina semillas, agroquímicos, conocimiento del
              cultivo y red comercial. Si el productor tiene tierra apta,
              manejo y decisión de producir volumen, HT puede acompañar desde la
              planificación hasta la colocación del heno.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200 shadow-md"
          >
            <Image
              src="/images/campo-alfalfa.jpg"
              alt="Lote de alfalfa en producción"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
