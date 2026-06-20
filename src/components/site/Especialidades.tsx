import { Check } from "lucide-react";
import { Section, SectionTitle } from "./Section";

const items = [
  "Uma Psicanalista em formação continuada.",
  "Pós graduada em Psicanálise.",
  "Pós graduada em Tratamento dos transtornos de ansiedade e síndrome do pânico.",
  "Pós graduada em Psicoterapia em intervenção de crises e prevenção de suicídio.",
  "Extensão em saúde mental do trabalhador pela UFRJ.",
];

export function Especialidades() {
  return (
    <Section id="especialidades" background="white" divider>
      <SectionTitle>Especialidades</SectionTitle>
      <ul className="mx-auto max-w-3xl space-y-4">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3 text-base md:text-[17px]">
            <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground">
              <Check className="size-4" />
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
