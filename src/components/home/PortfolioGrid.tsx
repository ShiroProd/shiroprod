"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import type { Project } from "@/types/project";
import { projects } from "@/data/projects";
import { useMediaQuery, BREAKPOINTS } from "@/hooks/useMediaQuery";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function PortfolioGrid() {
  const [active, setActive] = useState<Project | null>(null);
  const isDesktop = useMediaQuery(BREAKPOINTS.xl);

  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [measurements, setMeasurements] = useState({ scrollRange: 0, dynamicHeight: "auto" });

  useEffect(() => {
    if (!isDesktop) {
      setMeasurements({ scrollRange: 0, dynamicHeight: "auto" });
      return;
    }

    const updateMeasurements = () => {
      if (!trackRef.current) return;
      const totalWidth = trackRef.current.scrollWidth;
      const viewportW = window.innerWidth;
      const range = Math.max(totalWidth - viewportW, 0);

      setMeasurements({
        scrollRange: range,
        dynamicHeight: `${range + window.innerHeight}px`,
      });
    };

    updateMeasurements();
    const timeout = setTimeout(updateMeasurements, 100);

    const resizeObserver = new ResizeObserver(() => requestAnimationFrame(updateMeasurements));
    if (trackRef.current) resizeObserver.observe(trackRef.current);

    return () => {
      clearTimeout(timeout);
      resizeObserver.disconnect();
    };
  }, [isDesktop]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -measurements.scrollRange]);
  const smoothX = useSpring(x, { stiffness: 400, damping: 60, restDelta: 0.5 });

  return (
    <>
      <div ref={targetRef} className="relative" style={{ height: measurements.dynamicHeight }}>
        {isDesktop ? (
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div ref={trackRef} style={{ x: smoothX }} className="flex w-max items-center gap-6 px-6 md:px-12">
              {projects.map((project) => (
                <div key={project.id} className="w-[70vw] shrink-0 xl:w-[42vw]">
                  <ProjectCard project={project} onOpen={setActive} />
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          <div ref={trackRef} className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setActive} />
            ))}
          </div>
        )}
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
