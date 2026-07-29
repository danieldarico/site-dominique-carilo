import { type ReactNode } from "react";
import { TopoPattern } from "./TopoPattern";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  tone = "bordo",
}: {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
  tone?: "bordo" | "petroleo";
}) {
  const toneClass = tone === "petroleo" ? "text-petroleo" : "text-bordo";
  const stroke = tone === "petroleo" ? "#2F4F4F" : "#971D1D";
  return (
    <section className="relative overflow-hidden border-b border-divider bg-surface-alt pb-14 pt-28 md:pb-20 md:pt-36">
      <TopoPattern className="-right-16 -top-16 size-72 md:size-96" stroke={stroke} opacity={0.1} />
      <div className="relative mx-auto w-full max-w-4xl px-6 text-center">
        <p
          className={`mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] ${toneClass}`}
        >
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
