import { Check } from "lucide-react";
import { Section, Eyebrow, SectionTitle } from "./Section";

const items = [
  "Sessões individuais e 100% on-line.",
  "Atendimento para jovens, adultos e idosos.",
  "Encontros realizados por plataforma segura.",
  "Frequência definida de acordo com cada caso.",
  "Sigilo garantido pelo código de ética profissional.",
];

export function ComoFuncionaBullets() {
  return (
    <Section id="como-funciona" background="white" divider>
      <Eyebrow>Como funciona</Eyebrow>
      <SectionTitle>O formato do atendimento</SectionTitle>
      <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-xl bg-surface-alt p-4 font-sans text-sm text-ink/80"
          >
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-bordo text-white">
              <Check className="size-3" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
