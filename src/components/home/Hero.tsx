"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeroBackground from "./HeroBackground";
import InteractiveParticles from "@/components/effects/InteractiveParticles";
import { gyosho } from "@/lib/fonts";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 700], [1, 0]);
  const scale = useTransform(scrollY, [0, 700], [1, 0.94]);
  const y = useTransform(scrollY, [0, 700], [0, -120]);
  const blurValue = useTransform(scrollY, [0, 700], [0, 8]);
  const filter = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden"
    >
      <HeroBackground />
      <InteractiveParticles />

      <motion.div
        style={{ opacity, scale, y, filter }}
        className="relative z-10 flex flex-col items-center px-6 text-center will-change-[opacity,transform,filter]"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-accent"
        >
          Réalisatrice &amp; monteuse
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          className={`${gyosho.className} text-7xl leading-[0.95] text-foreground md:text-9xl`}
        >
          ShiroProd
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
          className="mt-6 max-w-xl text-balance text-base text-muted md:text-lg"
        >
          Des images qui racontent une histoire — clips, portraits de marque et
          courts-métrages tournés avec soin.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { delay: 1, duration: 1.8, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-8 z-10 text-muted"
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
