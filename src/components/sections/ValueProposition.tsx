"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

const propositions = [
  {
    title: "Híbridos Don Mario",
    description:
      "Sojas DM Enlist con tolerancia a glifosato, glufosinato y Colex-D. Mejoramiento genético y excelente calidad de semilla para los mejores rendimientos.",
    href: "/productos#soja",
  },
  {
    title: "Alfalfa",
    description:
      "AlphaTec 621, 821, 921, Hybriforce 3600, Magna 868 y 995. Diferentes tecnologías y latencias para pastoreo o corte. Calidad y persistencia.",
    href: "/productos#alfalfa",
  },
  {
    title: "Agroquímicos",
    description:
      "Mejor precio del mercado: S-Metolacloro, Terbyne, Tordon, Zidua Pack, Dual Gold, Fierce, Finesse, Equip y amplia línea de herbicidas e insecticidas.",
    href: "/productos#agroquimicos",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function ValueProposition() {
  return (
    <section
      id="propuesta"
      className={cn(
        "scroll-mt-20 border-t border-zinc-200 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-950"
      )}
    >
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
        >
          Qué ofrecemos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-zinc-600 dark:text-zinc-400"
        >
          Semillas de calidad y agroquímicos para tu próxima campaña.
        </motion.p>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={cn(
            "mt-16 grid gap-8",
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {propositions.map((prop) => (
            <motion.li key={prop.title} variants={item}>
              <Link
                href={prop.href}
                className={cn(
                  "block rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-6 transition-colors hover:border-zinc-300 hover:bg-zinc-50",
                  "dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/50"
                )}
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {prop.title}
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {prop.description}
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Ver más →
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
