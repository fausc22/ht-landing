"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { productGroups } from "@/lib/site";

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
      className="scroll-mt-20 border-t border-stone-200 bg-white py-20"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl"
          >
            Productos e insumos para producir mejor
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mt-4 text-stone-600"
          >
            HT concentra semillas, alfalfa y agroquímicos en una propuesta
            comercial simple: disponibilidad, precio competitivo y respuesta
            rápida para la campaña.
          </motion.p>
        </div>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {productGroups.map((group) => (
            <motion.li key={group.title} variants={item}>
              <Link
                href={`/productos-servicios#${group.id}`}
                className="group block h-full overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-stone-900 group-hover:text-emerald-800">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-stone-600">{group.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Ver detalle <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
