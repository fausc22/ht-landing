/**
 * Criterios Framer Motion para el sitio: animaciones ergonómicas y minimalistas.
 * Usar en Hero (entrada suave) y secciones (aparición al scroll).
 */

/** Duración estándar para entradas (Hero, CTAs) */
export const MOTION_DURATION = 0.4;

/** Duración para animaciones al scroll (secciones, cards) */
export const MOTION_DURATION_SCROLL = 0.35;

/** Delay entre elementos en stagger (cards, listas) */
export const MOTION_STAGGER_DELAY = 0.06;

/** Opciones de viewport: animar una sola vez al entrar en vista */
export const MOTION_VIEWPORT_ONCE = { once: true, amount: 0.2 } as const;

/** Transición suave sin bounce */
export const MOTION_EASE = [0.25, 0.1, 0.25, 1];
