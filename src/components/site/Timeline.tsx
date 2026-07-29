type TimelineItem = { title: string; subtitle?: string };
type Tone = "bordo" | "petroleo";

const dotClass: Record<Tone, string> = {
  bordo: "bg-bordo",
  petroleo: "bg-petroleo",
};

export function Timeline({ items, tone = "bordo" }: { items: TimelineItem[]; tone?: Tone }) {
  return (
    <ol className="mx-auto max-w-2xl">
      {items.map((item, i) => (
        <li key={item.title} className="relative flex gap-6 pb-10 last:pb-0">
          <div className="flex flex-col items-center">
            <span className={`mt-1.5 size-2.5 shrink-0 rounded-full ${dotClass[tone]}`} />
            {i < items.length - 1 && <span className="mt-1 w-px flex-1 bg-divider" />}
          </div>
          <div className="pb-2">
            <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
            {item.subtitle && (
              <p className="mt-1 font-sans text-sm leading-relaxed text-ink/65">{item.subtitle}</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
