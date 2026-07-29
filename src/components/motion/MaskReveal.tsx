"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MOTION_DURATION, MOTION_EASE, MOTION_VIEWPORT } from "@/lib/motion";

export function MaskReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, clipPath: "inset(8% 8% 8% 8%)" }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={MOTION_VIEWPORT}
      transition={{ duration: reduced ? MOTION_DURATION.reduced : MOTION_DURATION.maskReveal, delay, ease: MOTION_EASE }}
    >
      {children}
    </motion.div>
  );
}
