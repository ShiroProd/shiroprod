import Counter from "@/components/ui/Counter";

const stats = [
  { value: 40, suffix: "+", label: "Projets réalisés" },
  { value: 4.9, suffix: "★", label: "Note moyenne", decimals: 1 },
  { value: 3, suffix: " ans", label: "D'expérience" },
];

export default function StatsBar() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-12">
        {stats.map((stat) => (
          <div key={stat.label} className="px-6 py-12 text-center md:py-16">
            <p className="font-display text-4xl text-foreground md:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
            </p>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
