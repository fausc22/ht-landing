"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MOTION_DURATION, MOTION_EASE, MOTION_VIEWPORT } from "@/lib/motion";

/**
 * PLACEHOLDER MAPA — replace file at:
 * public/images/maps/argentina-region.placeholder.svg
 * with the definitive branded SVG when ready.
 */
export function RegionMap({ locale }: { locale: "es" | "en" }) {
  const reduced = useReducedMotion();
  const labels = locale === "es"
    ? {
        title: "Presencia territorial",
        placeholder: "PLACEHOLDER MAPA",
        cordoba: "Córdoba",
        huinca: "Huinca Renancó",
        region: "Alcance regional",
        note: "Sur de Córdoba · Este de San Luis · Norte de La Pampa",
      }
    : {
        title: "Territorial presence",
        placeholder: "MAP PLACEHOLDER",
        cordoba: "Córdoba",
        huinca: "Huinca Renancó",
        region: "Regional reach",
        note: "Southern Córdoba · Eastern San Luis · Northern La Pampa",
      };

  return (
    <figure className="relative overflow-hidden rounded-[1.5rem] border border-line bg-gradient-to-br from-cream via-paper to-sage/20 p-5 sm:p-7">
      <figcaption className="sr-only">{labels.title}</figcaption>
      <p className="absolute left-4 top-4 z-10 rounded bg-gold/90 px-2 py-1 text-[0.65rem] font-extrabold uppercase tracking-wider text-forest">
        {labels.placeholder}
      </p>
      <motion.svg
        viewBox="0 0 320 400"
        className="mx-auto h-auto w-full max-w-md"
        role="img"
        aria-label={`${labels.cordoba}, ${labels.huinca}`}
        initial={reduced ? false : { opacity: 0.4 }}
        whileInView={{ opacity: 1 }}
        viewport={MOTION_VIEWPORT}
        transition={{ duration: MOTION_DURATION.mapDraw, ease: MOTION_EASE }}
      >
        {/* Stylized Argentina silhouette (simplified) */}
        <motion.path
          d="M140 28c18-6 42-4 58 10 14 12 22 30 20 48-2 16 6 28 18 40 10 10 14 26 8 40-6 14-2 30 8 42 8 10 6 28-4 36-12 10-14 28-8 42 4 10 0 24-10 30-14 8-22 24-18 40 2 12-6 22-18 26-16 6-34 4-48-4-12-6-28-4-38 6-8 8-22 8-30-2-10-12-8-30 2-40 8-8 6-22-2-30-10-10-12-28-4-40 6-10 4-24-4-32-10-12-8-30 2-40 8-8 10-22 4-32-4-8 0-20 10-26 12-8 28-14 36-16z"
          fill="#174c2c"
          fillOpacity="0.18"
          stroke="#174c2c"
          strokeWidth="2"
          initial={reduced ? false : { pathLength: 0 }}
          whileInView={reduced ? undefined : { pathLength: 1 }}
          viewport={MOTION_VIEWPORT}
          transition={{ duration: MOTION_DURATION.mapDraw, ease: MOTION_EASE }}
        />
        {/* Córdoba highlight zone */}
        <ellipse cx="155" cy="195" rx="36" ry="42" fill="#174c2c" fillOpacity="0.35" />
        <text x="155" y="175" textAnchor="middle" className="fill-forest" style={{ fontSize: 11, fontWeight: 700 }}>
          {labels.cordoba}
        </text>
        {/* Huinca Renancó pin */}
        <circle cx="148" cy="218" r="7" fill="#d2a954" stroke="#fff" strokeWidth="2" />
        <circle cx="148" cy="218" r="2.5" fill="#0d321d" />
        <text x="148" y="242" textAnchor="middle" className="fill-ink" style={{ fontSize: 10, fontWeight: 700 }}>
          {labels.huinca}
        </text>
        {/* Regional arc (San Luis / La Pampa) — abstract, not claimed routes */}
        <path
          d="M110 230c-28 18-40 48-28 78"
          fill="none"
          stroke="#9fbc8f"
          strokeWidth="2"
          strokeDasharray="4 4"
          opacity="0.85"
        />
        <path
          d="M170 235c32 14 48 44 40 76"
          fill="none"
          stroke="#9fbc8f"
          strokeWidth="2"
          strokeDasharray="4 4"
          opacity="0.85"
        />
        <text x="160" y="340" textAnchor="middle" className="fill-forest" style={{ fontSize: 9, fontWeight: 700 }}>
          {labels.region}
        </text>
      </motion.svg>
      <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-forest/80">{labels.note}</p>
    </figure>
  );
}
