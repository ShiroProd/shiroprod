interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
        {title}
      </h2>
    </div>
  );
}
