import { Quote, Star } from "lucide-react";
import { Section, SectionTitle } from "./Section";
import { BrandButton } from "./BrandButton";

const items = [
  "Depois de cada sessão me sinto mais conectada comigo através do auto conhecimento após as reflexões que a Dominique propõe. Excelente profissional.",
  "Ótima profissional, me ajudou muito!",
  "Profissional incrível com uma habilidade brilhante de escutar. Recomendo. Sua dedicação ao paciente e a psicanálise não tem limites.",
  "Profissional excelente sempre disposta a escutar e abrir portas para que eu seja a melhor versão de mim mesmo.",
];

export function Depoimentos() {
  return (
    <Section id="depoimentos" background="white" divider>
      <SectionTitle>Depoimentos</SectionTitle>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 rounded-md border border-divider bg-surface-alt p-6"
          >
            <Quote className="size-6 text-brand/40" />
            <p className="flex-1 text-sm leading-relaxed">{t}</p>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="size-4 fill-star text-star" />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <BrandButton type="button">Ver depoimentos</BrandButton>
        <BrandButton type="button">Dar depoimento</BrandButton>
      </div>
    </Section>
  );
}
