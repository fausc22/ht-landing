"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function Process() {
  return (
    <section
      id="proceso"
      className={cn(
        "scroll-mt-20 border-t border-zinc-200 py-20 dark:border-zinc-800"
      )}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Trabajamos cerca tuyo
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Estamos en <strong className="text-zinc-800 dark:text-zinc-200">{site.location}</strong>.
              Atendemos con precios competitivos y asesoramiento para tu campaña:
              semillas de calidad y agroquímicos al mejor precio del mercado.
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Consultanos por variedades de alfalfa, híbridos Don Mario o por
              tu lista de agroquímicos para la próxima campaña.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
              "rounded-2xl bg-zinc-100 dark:bg-zinc-800/50",
              "aspect-video flex items-center justify-center text-zinc-500 dark:text-zinc-400 text-sm"
            )}
          >
            [ Imagen o mapa: ubicación / local / campo ]
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
