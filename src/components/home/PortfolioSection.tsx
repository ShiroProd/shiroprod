import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioGrid from "./PortfolioGrid";

export default function PortfolioSection() {
  return (
    <section id="travaux" className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32">
      <SectionHeading eyebrow="Sélection" title="Travaux récents" />
      <PortfolioGrid />
    </section>
  );
}
