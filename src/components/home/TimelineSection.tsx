"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import BlurReveal from "@/components/effects/BlurReveal";
import { timeline } from "@/data/timeline";
import type { TimelineItem } from "@/types/timeline";

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="parcours"
      ref={containerRef}
      className="relative overflow-hidden border-t border-border py-24 md:py-32 xl:py-40"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <BlurReveal>
          <SectionHeading eyebrow="Parcours" title="Le chemin parcouru" />
        </BlurReveal>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px -translate-x-1/2 bg-border/60 md:left-1/2" />

          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-6 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-linear-to-b from-accent via-accent to-transparent md:left-1/2"
          />

          <div className="relative z-10 flex w-full flex-col gap-8 md:gap-16">
            {timeline.map((item, index) => (
              <TimelineNode key={item.id} item={item} isEven={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineNode({ item, isEven }: { item: TimelineItem; isEven: boolean }) {
  return (
    <div className={cn("relative flex w-full items-center justify-between", isEven ? "flex-row" : "flex-row-reverse")}>
      <div className="hidden w-[calc(50%-2rem)] md:block" />

      <div className="absolute left-6 z-20 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background shadow-lg md:left-1/2">
        <div className="h-2.5 w-2.5 rounded-full bg-accent" />
      </div>

      <div className={cn("relative w-full pl-16 md:w-[calc(50%-2rem)] md:pl-0")}>
        <BlurReveal>
          <div
            className={cn(
              "relative overflow-hidden border border-border bg-surface/40 p-6 backdrop-blur-md transition-all duration-500 hover:border-accent/40 hover:bg-surface/70 md:p-8",
              isEven ? "md:text-right" : "md:text-left"
            )}
          >
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted">
              {item.id}
            </span>

            <h3 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
              {item.year}
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted md:text-base" style={{ marginLeft: isEven ? "auto" : 0 }}>
              {item.description}
            </p>

            <div className={cn("mt-5 flex flex-wrap gap-2", isEven ? "md:justify-end" : "justify-start")}>
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/60 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </BlurReveal>
      </div>
    </div>
  );
}
