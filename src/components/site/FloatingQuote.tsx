import { Camera, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function FloatingQuote({
  quote,
  align = "right",
  tone = "bordo",
}: {
  quote: string;
  align?: "left" | "right";
  tone?: "bordo" | "petroleo" | "ink";
}) {
  const toneBg = { bordo: "bg-bordo", petroleo: "bg-petroleo", ink: "bg-ink" }[tone];

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        aria-hidden
        className="absolute -inset-3 -z-10 rounded-2xl border border-divider opacity-70"
      />
      <div className="flex aspect-[3/4] w-full items-center justify-center rounded-2xl bg-surface-alt">
        <Camera className="size-9 text-divider" strokeWidth={1.25} />
      </div>
      <Reveal delay={150}>
        <div
          className={cn(
            "relative w-[92%] rounded-xl p-5 text-white shadow-lg",
            toneBg,
            align === "right" ? "-mt-10 ml-auto mr-[-6%]" : "-mt-10 mr-auto ml-[-6%]",
          )}
        >
          <Quote className="mb-2 size-4 text-white/60" />
          <p className="font-sans text-sm italic leading-relaxed">{quote}</p>
        </div>
      </Reveal>
    </div>
  );
}
