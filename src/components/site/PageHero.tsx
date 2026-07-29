import { type ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
}) {
  return (
    <section className="border-b border-divider bg-surface-alt pb-14 pt-28 md:pb-20 md:pt-36">
      <div className="mx-auto w-full max-w-4xl px-6 text-center">
        <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-bordo">
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-ink/70 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
