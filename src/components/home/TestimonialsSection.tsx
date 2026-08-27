"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32">
      <SectionHeading eyebrow="Témoignages" title="Ce que disent mes clients" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col justify-between rounded-md border border-border bg-surface p-6 md:p-8"
          >
            <div>
              <div className="mb-4 flex gap-1 text-accent">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-accent" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
            <figcaption className="mt-6 text-xs uppercase tracking-[0.15em] text-muted">
              {t.name} — {t.role}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
