"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Leaf, PackageCheck } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[88vh] items-center overflow-hidden px-4 pt-24 pb-20 sm:px-6 sm:pt-28 lg:px-8"
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
          }}
          aria-label="Campo y agricultura - HT Semillas"
        >
          <source src="/images/video-final.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.75fr] lg:items-end">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
          >
            <Leaf className="size-4" />
            {site.location}
          </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
            className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white drop-shadow-md sm:text-6xl lg:text-7xl"
        >
          {site.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-stone-100 sm:text-xl"
        >
            Semillas, agroquímicos y una salida comercial clara para productores
            que quieren convertir hectáreas de alfalfa en heno con demanda
            organizada.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
              href="/produccion-alfalfa"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
          >
              Vender alfalfa a HT
              <ArrowRight className="size-4" />
          </Link>
          <Link
              href="/productos-servicios"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/70 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Ver productos
          </Link>
        </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid gap-3 rounded-lg border border-white/20 bg-white/12 p-4 text-white shadow-2xl backdrop-blur-md"
        >
          {[
            "Compra y comercialización de alfalfa",
            "Clientes preparados para recibir volumen",
            "Insumos y asesoramiento para la campaña",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-white/15">
                <PackageCheck className="size-4" />
              </span>
              <span className="text-sm font-medium leading-5">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
