"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesSection() {
  return (
    <section id="prestations" className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32">
      <SectionHeading eyebrow="Prestations" title="Ce que je fais" />

      <ul className="divide-y divide-border border-t border-border">
        {services.map((service, i) => (
          <motion.li
            key={service.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <a
              href="#contact"
              className="group flex items-center justify-between gap-6 py-6 md:py-8"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  {service.category}
                </p>
                <p className="mt-1 font-display text-2xl text-foreground transition-colors group-hover:text-accent md:text-3xl">
                  {service.title}
                </p>
              </div>
              <ArrowUpRight className="h-6 w-6 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
