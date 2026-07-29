"use client";

import { useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MOTION_DURATION, MOTION_EASE, MOTION_STAGGER, MOTION_STAGGER_MOBILE, MOTION_VIEWPORT } from "@/lib/motion";

function useIsMobile() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia("(max-width: 767px)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(max-width: 767px)").matches,
    () => false,
  );
}

export function Stagger({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={MOTION_VIEWPORT}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduced ? 0 : isMobile ? MOTION_STAGGER_MOBILE : MOTION_STAGGER } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: reduced ? MOTION_DURATION.reduced : MOTION_DURATION.riseSoft, ease: MOTION_EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
