import { AtSign, Mail } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import BlurReveal from "@/components/effects/BlurReveal";
import ShineButton from "@/components/ui/ShineButton";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32">
        <BlurReveal>
          <SectionHeading eyebrow="Discutons ensemble" title="Commençons votre projet" />
        </BlurReveal>

        <BlurReveal delay={0.1}>
          <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
            <ShineButton
              href="mailto:contact@shiroprod.fr"
              target="_self"
              className="h-14 gap-3 px-6 text-sm font-medium uppercase tracking-[0.15em] md:h-16 md:px-8"
            >
              <Mail className="h-4 w-4" />
              contact@shiroprod.fr
            </ShineButton>

            <ShineButton
              href="https://instagram.com/shiro.prod"
              className="h-14 gap-3 px-6 text-sm font-medium uppercase tracking-[0.15em] md:h-16 md:px-8"
            >
              <AtSign className="h-4 w-4" />
              shiro.prod
            </ShineButton>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}
