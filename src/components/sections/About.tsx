"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function About() {
  return (
    <section
      id="nosotros"
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
              Sobre {site.name}
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              En {site.location} trabajamos con híbridos Don Mario, variedades de
              alfalfa (AlphaTec, Hybriforce, Magna) y una amplia línea de
              agroquímicos al mejor precio. Nuestro objetivo es acompañar al
              productor con calidad y precios competitivos.
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Consultanos por semillas para tu planificación de campaña o por
              tu lista de agroquímicos; te respondemos con disponibilidad y
              precios.
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
            [ Imagen: equipo / local / campo ]
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
