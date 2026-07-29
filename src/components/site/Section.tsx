import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  children: ReactNode;
  background?: "white" | "alt" | "petroleo" | "bordo" | "bordo-tint";
  divider?: boolean;
  className?: string;
};

const bg = {
  white: "bg-white text-ink",
  alt: "bg-surface-alt text-ink",
  petroleo: "bg-petroleo text-white",
  bordo: "bg-bordo text-white",
  "bordo-tint": "bg-bordo/[0.05] text-ink",
};

export function Section({ id, children, background = "white", divider = false, className }: Props) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-16 md:py-28", bg[background], className)}>
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
      {divider && (
        <div className="mx-auto mt-16 w-full max-w-6xl px-6 md:mt-28">
          <hr className="border-t border-divider" />
        </div>
      )}
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "bordo",
}: {
  children: ReactNode;
  tone?: "bordo" | "petroleo";
}) {
  const toneClass = tone === "petroleo" ? "text-petroleo" : "text-bordo";
  return (
    <p
      className={cn(
        "mb-3 text-center font-sans text-xs font-semibold uppercase tracking-[0.18em]",
        toneClass,
      )}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  align = "center",
}: {
  children: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className="mb-10">
      <h2
        className={cn(
          "font-display text-4xl font-semibold leading-tight md:text-5xl",
          align === "center" ? "text-center" : "text-left",
        )}
      >
        {children}
      </h2>
      <div
        aria-hidden
        className={cn(
          "mt-4 flex items-center gap-2",
          align === "center" ? "justify-center" : "justify-start",
        )}
      >
        <span className="h-px w-6 bg-divider" />
        <span className="size-1.5 rounded-full bg-bordo" />
        <span className="h-px w-6 bg-divider" />
      </div>
    </div>
  );
}
