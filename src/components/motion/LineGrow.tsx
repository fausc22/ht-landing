"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MOTION_DURATION, MOTION_EASE, MOTION_VIEWPORT } from "@/lib/motion";

export function LineGrow({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={`h-px origin-left bg-line ${className}`}
      initial={{ scaleX: reduced ? 1 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={MOTION_VIEWPORT}
      transition={{ duration: reduced ? 0 : MOTION_DURATION.lineGrow, ease: MOTION_EASE }}
    />
  );
}
