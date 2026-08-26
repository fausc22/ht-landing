"use client";

import Image from "next/image";

export function RegionMap({ locale }: { locale: "es" | "en" }) {
  const labels =
    locale === "es"
      ? {
          title: "Cobertura comercial de HT Semillas",
          badge: "Presencia regional",
          coverage: "San Luis; sur, centro y este de Córdoba; sur de Santa Fe; norte de La Pampa.",
          note: "Huinca Renancó · Base comercial",
          alt: "Mapa de presencia regional de HT Semillas en San Luis, Córdoba, Santa Fe y La Pampa, con base comercial en Huinca Renancó",
        }
      : {
          title: "HT Semillas commercial coverage",
          badge: "Regional presence",
          coverage: "San Luis; southern, central and eastern Córdoba; southern Santa Fe; northern La Pampa.",
          note: "Huinca Renancó · Commercial base",
          alt: "Regional presence map of HT Semillas across San Luis, Córdoba, Santa Fe and La Pampa, with commercial base in Huinca Renancó",
        };

  return (
    <figure className="overflow-hidden rounded-[1.5rem] border border-line bg-gradient-to-br from-cream via-paper to-sage/15 p-4 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="eyebrow text-forest">{labels.badge}</p>
          <figcaption className="mt-2 text-lg font-bold text-ink">{labels.title}</figcaption>
        </div>
        <span className="rounded-full bg-gold/25 px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-wider text-forest">
          {labels.note}
        </span>
      </div>

      <div className="relative mx-auto mt-4 aspect-square w-full max-w-lg overflow-hidden rounded-2xl bg-paper">
        <Image
          src="/images/maps/presencia.png"
          alt={labels.alt}
          fill
          className="object-contain object-center p-2 sm:p-3"
          sizes="(max-width: 768px) 100vw, 480px"
        />
      </div>

      <p className="mt-4 border-t border-forest/10 pt-4 text-center text-xs font-semibold uppercase leading-6 tracking-wider text-forest/75">
        {labels.coverage}
      </p>
    </figure>
  );
}
