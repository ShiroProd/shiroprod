"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useLenis } from "@/providers/SmoothScrollProvider";
import { gyosho } from "@/lib/fonts";

const links = [
  { label: "Travaux", href: "#travaux" },
  { label: "Prestations", href: "#prestations" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const lenis = useLenis();
  const headerRef = useRef<HTMLElement>(null);
  const [viewportHeight] = useState(() =>
    typeof window !== "undefined" ? window.innerHeight : 800
  );

  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, viewportHeight], [0, 1]);
  const backdropBlur = useTransform(scrollY, [0, viewportHeight], [0, 16]);
  const backdropFilter = useMotionTemplate`blur(${backdropBlur}px)`;
  const py = useTransform(scrollY, [0, viewportHeight], [20, 12]);

  const navLinks = useMemo(() => links, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (!elem) return;

    const navbarHeight = headerRef.current?.offsetHeight ?? 72;

    if (lenis) {
      lenis.scrollTo(elem, { offset: -navbarHeight, duration: 1.4 });
    } else {
      const offsetPosition = elem.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      ref={headerRef}
      style={{ paddingTop: py, paddingBottom: py }}
      className="fixed inset-x-0 top-0 z-40"
    >
      <motion.div
        style={{ opacity: bgOpacity, backdropFilter, WebkitBackdropFilter: backdropFilter }}
        className="absolute inset-0 bg-background/80 border-b border-border/60 -z-10 pointer-events-none"
      />

      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12">
        <a href="#" className={`${gyosho.className} text-2xl text-foreground`}>
          ShiroProd
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-xs font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
