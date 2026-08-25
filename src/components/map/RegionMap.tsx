"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MOTION_DURATION, MOTION_EASE, MOTION_VIEWPORT } from "@/lib/motion";

export function RegionMap({ locale }: { locale: "es" | "en" }) {
  const reduced = useReducedMotion();
  const labels = locale === "es"
    ? {
        title: "Cobertura comercial de HT Semillas",
        badge: "Presencia regional",
        base: "Base comercial",
        huinca: "Huinca Renancó",
        coverage: "San Luis; sur, centro y este de Córdoba; sur de Santa Fe; norte de La Pampa.",
        note: "Cobertura comercial declarada",
      }
    : {
        title: "HT Semillas commercial coverage",
        badge: "Regional presence",
        base: "Commercial base",
        huinca: "Huinca Renancó",
        coverage: "San Luis; southern, central and eastern Córdoba; southern Santa Fe; northern La Pampa.",
        note: "Declared commercial coverage",
      };

  const regions = [
    { name: "San Luis", x: 112, y: 202 },
    { name: "Córdoba", x: 160, y: 180 },
    { name: "Santa Fe", x: 207, y: 188 },
    { name: "La Pampa", x: 147, y: 254 },
  ];

  return (
    <figure className="overflow-hidden rounded-[1.5rem] border border-line bg-gradient-to-br from-cream via-paper to-sage/20 p-5 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow text-forest">{labels.badge}</p>
          <figcaption className="mt-2 text-lg font-bold text-ink">{labels.title}</figcaption>
        </div>
        <span className="rounded-full bg-gold/25 px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-wider text-forest">
          {labels.note}
        </span>
      </div>

      <motion.svg
        viewBox="0 0 320 400"
        className="mx-auto mt-5 h-auto w-full max-w-md"
        role="img"
        aria-label={`${labels.title}. ${labels.coverage} ${labels.base}: ${labels.huinca}.`}
        initial={reduced ? false : { opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        viewport={MOTION_VIEWPORT}
        transition={{ duration: MOTION_DURATION.mapDraw, ease: MOTION_EASE }}
      >
        <defs>
          <linearGradient id="territory-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#9fbc8f" stopOpacity="0.45" />
            <stop offset="1" stopColor="#174c2c" stopOpacity="0.14" />
          </linearGradient>
        </defs>

        <motion.path
          d="M140 28c18-6 42-4 58 10 14 12 22 30 20 48-2 16 6 28 18 40 10 10 14 26 8 40-6 14-2 30 8 42 8 10 6 28-4 36-12 10-14 28-8 42 4 10 0 24-10 30-14 8-22 24-18 40 2 12-6 22-18 26-16 6-34 4-48-4-12-6-28-4-38 6-8 8-22 8-30-2-10-12-8-30 2-40 8-8 6-22-2-30-10-10-12-28-4-40 6-10 4-24-4-32-10-12-8-30 2-40 8-8 10-22 4-32-4-8 0-20 10-26 12-8 28-14 36-16z"
          fill="url(#territory-fill)"
          stroke="#174c2c"
          strokeWidth="2"
          initial={reduced ? false : { pathLength: 0 }}
          whileInView={reduced ? undefined : { pathLength: 1 }}
          viewport={MOTION_VIEWPORT}
          transition={{ duration: MOTION_DURATION.mapDraw, ease: MOTION_EASE }}
        />

        <path
          d="M88 221c18-35 45-58 78-67 33-8 64 2 83 27-6 32-28 71-56 93-31 13-72 6-95-14-9-10-12-24-10-39z"
          fill="#174c2c"
          fillOpacity="0.12"
          stroke="#174c2c"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />

        {regions.map((region) => (
          <g key={region.name}>
            <circle cx={region.x} cy={region.y} r="14" fill="#f4f1e7" stroke="#174c2c" strokeWidth="1.5" />
            <circle cx={region.x} cy={region.y} r="4" fill="#174c2c" />
            <text
              x={region.x}
              y={region.y - 20}
              textAnchor="middle"
              className="fill-forest"
              style={{ fontSize: 9, fontWeight: 800 }}
            >
              {region.name}
            </text>
          </g>
        ))}

        <circle cx="144" cy="220" r="8" fill="#d2a954" stroke="#fff" strokeWidth="2" />
        <circle cx="144" cy="220" r="3" fill="#0d321d" />
        <path d="M144 228v35" stroke="#d2a954" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="144" y="278" textAnchor="middle" className="fill-ink" style={{ fontSize: 10, fontWeight: 800 }}>
          {labels.huinca}
        </text>
        <text x="144" y="292" textAnchor="middle" className="fill-forest" style={{ fontSize: 8, fontWeight: 700 }}>
          {labels.base}
        </text>
      </motion.svg>

      <p className="border-t border-forest/10 pt-4 text-center text-xs font-semibold uppercase leading-6 tracking-wider text-forest/75">
        {labels.coverage}
      </p>
    </figure>
  );
}
