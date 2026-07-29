import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type TimelineItem = { title: string; subtitle?: string; icon?: LucideIcon };
type Tone = "bordo" | "petroleo";

const toneBg: Record<Tone, string> = { bordo: "bg-bordo", petroleo: "bg-petroleo" };
const toneRing: Record<Tone, string> = { bordo: "ring-bordo/20", petroleo: "ring-petroleo/20" };

export function Timeline({ items, tone = "bordo" }: { items: TimelineItem[]; tone?: Tone }) {
  return (
    <ol className="mx-auto max-w-2xl">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <li key={item.title} className="relative flex gap-6 pb-10 last:pb-0">
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "grid size-9 shrink-0 place-items-center rounded-full text-white ring-4",
                  toneBg[tone],
                  toneRing[tone],
                )}
              >
                {Icon ? (
                  <Icon className="size-4" strokeWidth={1.75} />
                ) : (
                  <span className="size-2 rounded-full bg-white" />
                )}
              </span>
              {i < items.length - 1 && (
                <span className="mt-1 w-px flex-1 origin-top scale-y-100 bg-divider transition-transform duration-700" />
              )}
            </div>
            <Reveal delay={i * 90} className="pb-2 pt-1">
              <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
              {item.subtitle && (
                <p className="mt-1 font-sans text-sm leading-relaxed text-ink/65">
                  {item.subtitle}
                </p>
              )}
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
