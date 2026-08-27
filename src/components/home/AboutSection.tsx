import SectionHeading from "@/components/ui/SectionHeading";
import BlurReveal from "@/components/effects/BlurReveal";
import HangingProfileWidget from "./HangingProfileWidget";

const skills = [
  "Vidéo cinématique",
  "Montage",
  "Color grading",
  "Prise de son",
  "Réalisation",
];

export default function AboutSection() {
  return (
    <section id="a-propos" className="border-t border-border">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-6 py-24 md:grid-cols-[auto_1fr] md:items-start md:gap-16 md:px-12 md:py-32">
        <div className="flex justify-center md:sticky md:top-32 md:justify-start">
          <HangingProfileWidget />
        </div>

        <div>
          <BlurReveal>
            <SectionHeading eyebrow="Qui suis-je" title="Réalisatrice & monteuse" />
          </BlurReveal>

          <BlurReveal delay={0.1}>
            <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
              Passionnée d&apos;image depuis toujours, je raconte des histoires en
              vidéo — clips, portraits de marque, courts-métrages et moments de
              vie. Mon approche : une esthétique cinématographique soignée,
              accessible et fidèle à ce que vous voulez transmettre.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.2}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </BlurReveal>
        </div>
      </div>
    </section>
  );
}
