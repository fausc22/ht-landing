"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTA() {
  return (
    <section
      id="cta"
      className="scroll-mt-20 border-t border-stone-200 bg-stone-50/50 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-stone-200 bg-white px-8 py-14 shadow-sm sm:px-12"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            ¿Tenés hectáreas para alfalfa o necesitás insumos?
          </h2>
          <p className="mt-4 text-stone-600">
            Escribinos con tu ubicación, superficie aproximada o lista de
            productos. Respondemos con alternativas concretas para avanzar.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-700 px-8 text-sm font-medium text-white shadow-md transition-colors hover:bg-emerald-800"
            >
              Contactar
            </Link>
            <Link
              href="/productos-servicios"
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-stone-300 px-8 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-50"
            >
              Ver productos
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
