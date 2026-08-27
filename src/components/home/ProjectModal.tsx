"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/types/project";
import PlayButton from "@/components/ui/PlayButton";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-3xl overflow-hidden rounded-lg border border-border bg-surface"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur-sm transition-colors hover:bg-background/90"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative flex aspect-video items-center justify-center">
              {project.image ? (
                <Image src={project.image} alt={project.title} fill sizes="100vw" className="object-cover" />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${project.gradient[0]} 0%, ${project.gradient[1]} 100%)`,
                  }}
                />
              )}
              <PlayButton size="lg" className="relative z-10" />
            </div>

            <div className="p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">
                {project.category} — {project.year}
              </p>
              <h3 className="mt-2 font-display text-2xl text-foreground md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-muted">Client : {project.client}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
