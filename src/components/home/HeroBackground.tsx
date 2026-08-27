"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Placeholder for the future showreel video background.
 * Swap point: once real footage exists, replace the motion.div below with
 *   <video autoPlay muted loop playsInline poster="/hero-poster.jpg" className="h-full w-full object-cover">
 *     <source src="/video/reel.mp4" type="video/mp4" />
 *   </video>
 */
export default function HeroBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      <motion.div
        className="absolute inset-[-10%]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 20%, #24314f 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 75% 70%, #3a2a1f 0%, transparent 55%), #0a0a0b",
        }}
        animate={
          reduceMotion
            ? undefined
            : { scale: [1, 1.06, 1], opacity: [0.9, 1, 0.9] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
