"use client";

import { motion } from "framer-motion";

const words = [
  "Mariage",
  "Clip musical",
  "Publicité",
  "Documentaire",
  "Événementiel",
  "Réseaux sociaux",
];

export default function Marquee() {
  const track = [...words, ...words];

  return (
    <div className="relative z-10 overflow-hidden border-y border-border/60 bg-surface/40 py-4">
      <motion.div
        className="flex w-max items-center gap-6 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {track.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center gap-6 font-display text-sm italic tracking-wide text-muted"
          >
            {word}
            <span className="text-accent">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
