"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contacto"
      className={cn(
        "scroll-mt-20 border-t border-zinc-200 py-20 dark:border-zinc-800",
        "px-4 sm:px-6 lg:px-8"
      )}
    >
      <div className="mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
        >
          Contacto
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-4 text-center text-zinc-600 dark:text-zinc-400"
        >
          Escribinos y te respondemos lo antes posible. {site.location}.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-12 space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Nombre
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className={cn(
                "mt-2 block w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500",
                "dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-400 dark:focus:border-zinc-500 dark:focus:ring-zinc-500"
              )}
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className={cn(
                "mt-2 block w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500",
                "dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-400 dark:focus:border-zinc-500 dark:focus:ring-zinc-500"
              )}
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className={cn(
                "mt-2 block w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500",
                "dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-400 dark:focus:border-zinc-500 dark:focus:ring-zinc-500"
              )}
              placeholder="Consulta por semillas, agroquímicos o disponibilidad..."
            />
          </div>
          <button
            type="submit"
            className={cn(
              "w-full rounded-xl bg-zinc-900 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800",
              "dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 sm:w-auto sm:px-8"
            )}
          >
            Enviar mensaje
          </button>
        </motion.form>
      </div>
    </section>
  );
}
