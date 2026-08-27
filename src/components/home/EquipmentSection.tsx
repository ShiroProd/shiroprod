import SectionHeading from "@/components/ui/SectionHeading";
import BlurReveal from "@/components/effects/BlurReveal";
import { equipment } from "@/data/equipment";

export default function EquipmentSection() {
  return (
    <section id="equipement" className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32">
      <BlurReveal>
        <SectionHeading eyebrow="Matériel" title="Équipement" />
      </BlurReveal>

      <div className="flex flex-col gap-10">
        {equipment.map((category, catIndex) => (
          <BlurReveal key={category.title} delay={catIndex * 0.05}>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-widest text-muted/40">
                  0{catIndex + 1}
                </span>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {category.items.map((item) => (
                  <span
                    key={item.name}
                    className="cursor-default text-sm tracking-wide text-muted opacity-60 transition-all duration-500 ease-out hover:text-foreground hover:opacity-100"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </BlurReveal>
        ))}
      </div>
    </section>
  );
}
