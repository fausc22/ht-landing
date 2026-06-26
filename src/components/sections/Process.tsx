"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { alfalfaSteps, site } from "@/lib/site";

export function Process() {
  return (
    <section
      id="proceso"
      className="scroll-mt-20 border-t border-stone-200 bg-white py-20"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              De lote sembrado a heno con comprador
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              La alfalfa exige implantación prolija, manejo de cortes y
              logística. El diferencial comercial de HT es ordenar esa
              producción con una demanda ya identificada, para que el productor
              no quede dependiendo de salir a buscar comprador recién cuando el
              fardo está hecho.
            </p>
            <div className="mt-8 grid gap-4">
              {alfalfaSteps.slice(0, 3).map((step) => (
                <div key={step.title} className="flex gap-3">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-stone-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-stone-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/produccion-alfalfa"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Ver plan para productores
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200 shadow-md order-1 lg:order-2"
          >
            <Image
              src="/images/alfalfa-megafardos.png"
              alt={`Megafardos de alfalfa listos para comercializar - ${site.name}`}
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
