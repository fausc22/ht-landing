"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Rápido",
    description: "Optimizado para Core Web Vitals y entrega desde el edge.",
  },
  {
    title: "Responsivo",
    description: "Se adapta a móvil, tablet y escritorio sin sacrificar claridad.",
  },
  {
    title: "Minimalista",
    description: "Diseño limpio que prioriza el contenido y la usabilidad.",
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

export function Features() {
  return (
    <section
      id="features"
      className={cn(
        "scroll-mt-20 border-t border-zinc-200 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-950",
        "px-4 sm:px-6 lg:px-8"
      )}
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
        >
          Por qué elegir esta base
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-zinc-600 dark:text-zinc-400"
        >
          Tres pilares que hacen que la experiencia sea fluida y profesional.
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
          {features.map((feature) => (
            <motion.li
              key={feature.title}
              variants={item}
              className={cn(
                "rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-zinc-700"
              )}
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {feature.title}
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
