"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Contact() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const interest = String(formData.get("interest") ?? "");
    const message = String(formData.get("message") ?? "");
    const body = [
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Interes: ${interest}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Consulta web - ${interest || site.name}`
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section
      id="contacto"
      className="scroll-mt-20 border-t border-stone-200 bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
        <motion.h2
            className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl"
        >
          Contacto
        </motion.h2>
          <p className="mt-4 text-lg leading-8 text-stone-600">
            Contanos qué necesitás: semillas, agroquímicos, variedades de
            alfalfa o una propuesta para producir y vender heno.
          </p>
          <div className="mt-8 grid gap-4">
            <div className="flex gap-3 rounded-lg border border-stone-200 bg-stone-50 p-4">
              <MapPin className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-semibold text-stone-900">Base comercial</p>
                <p className="text-sm text-stone-600">{site.location}</p>
              </div>
            </div>
            <a
              href={`mailto:${site.email}`}
              className="flex gap-3 rounded-lg border border-stone-200 bg-stone-50 p-4 transition-colors hover:border-primary/30"
            >
              <Mail className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-semibold text-stone-900">Email</p>
                <p className="text-sm text-stone-600">{site.email}</p>
              </div>
            </a>
          </div>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-6 rounded-lg border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="interest"
              className="block text-sm font-medium text-stone-700"
            >
              Tipo de consulta
            </label>
            <select
              id="interest"
              name="interest"
              className={cn(
                "mt-2 block w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900",
                "focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              )}
            >
              <option>Producción y venta de alfalfa</option>
              <option>Semillas de alfalfa</option>
              <option>Agroquímicos</option>
              <option>Híbridos Don Mario</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-stone-700"
            >
              Nombre
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className={cn(
                "mt-2 block w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder-stone-400",
                "focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              )}
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-stone-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className={cn(
                "mt-2 block w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder-stone-400",
                "focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              )}
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-stone-700"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className={cn(
                "mt-2 block w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder-stone-400",
                "focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              )}
              placeholder="Consulta por semillas, agroquímicos o disponibilidad..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90 sm:w-auto sm:px-8"
          >
            <Send className="size-4" />
            Enviar mensaje
          </button>
        </motion.form>
      </div>
    </section>
  );
}
