type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold leading-tight text-[var(--color-ink)] sm:text-[2.65rem]">
        {title}
      </h2>
      {description ? <p className="max-w-2xl text-[15px] leading-7 md:text-base">{description}</p> : null}
    </div>
  );
}
