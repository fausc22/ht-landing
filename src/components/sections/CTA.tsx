"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function CTA() {
  return (
    <section
      id="cta"
      className={cn(
        "scroll-mt-20 border-t border-zinc-200 py-20 dark:border-zinc-800",
        "px-4 sm:px-6 lg:px-8"
      )}
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            "rounded-3xl border border-zinc-200 bg-zinc-50 px-8 py-16 dark:border-zinc-800 dark:bg-zinc-900/50",
            "sm:px-12 sm:py-20"
          )}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            ¿Listo para tu próxima campaña?
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Escribinos y te respondemos con precios y disponibilidad de
            semillas y agroquímicos.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contacto"
              className={cn(
                "inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800",
                "dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              )}
            >
              Contactar
            </Link>
            <Link
              href="/productos"
              className={cn(
                "inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-8 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100",
                "dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
              )}
            >
              Ver productos
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
