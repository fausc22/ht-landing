"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="hero"
      className={cn(
        "relative flex min-h-[85vh] items-center justify-center overflow-hidden px-4 pt-20 pb-16",
        "sm:px-6 sm:pt-24 lg:px-8"
      )}
    >
      {/* Placeholder: imagen de fondo. Reemplazar por next/image con src real */}
      <div
        className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900"
        aria-hidden
      >
        <div className="absolute inset-0 flex items-center justify-center text-zinc-300 dark:text-zinc-600 text-sm">
          [ Imagen de fondo: campo / semillas / Huinca Renanco ]
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl"
        >
          {site.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:text-xl"
        >
          Híbridos Don Mario, alfalfa y agroquímicos al mejor precio.{" "}
          <span className="font-medium text-zinc-700 dark:text-zinc-300">
            {site.location}
          </span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contacto"
            className={cn(
              "inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800",
              "dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            )}
          >
            Consultar productos
          </Link>
          <Link
            href="/productos"
            className={cn(
              "inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50",
              "dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
            )}
          >
            Ver productos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
