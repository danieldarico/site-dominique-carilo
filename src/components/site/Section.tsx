import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  children: ReactNode;
  background?: "white" | "alt" | "brand";
  divider?: boolean;
  className?: string;
};

const bg = {
  white: "bg-white text-brand",
  alt: "bg-surface-alt text-brand",
  brand: "bg-brand text-brand-foreground",
};

export function Section({ id, children, background = "white", divider = false, className }: Props) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 py-12 md:py-20", bg[background], className)}
    >
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
      {divider && (
        <div className="mx-auto mt-12 w-full max-w-6xl px-6 md:mt-20">
          <hr className="border-t border-divider" />
        </div>
      )}
    </section>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-10 text-center font-display text-3xl font-bold md:text-4xl">
      {children}
    </h2>
  );
}
