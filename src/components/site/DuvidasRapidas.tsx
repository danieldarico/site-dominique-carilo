import { Link } from "@tanstack/react-router";
import { Section, Eyebrow, SectionTitle } from "./Section";
import { brandButtonClass } from "./BrandButton";

const perguntas = [
  {
    q: "Como funciona o sigilo e a privacidade durante as sessões?",
    a: "Tudo o que é compartilhado é protegido pelo Código de Ética Profissional do Psicólogo.",
  },
  {
    q: "A terapia on-line funciona? É tão eficaz quanto a presencial?",
    a: "Sim, quando realizada de forma ética e em um ambiente adequado.",
  },
  {
    q: "Como funciona a primeira sessão?",
    a: "Começamos pelas entrevistas preliminares, um encontro para escutar sua história.",
  },
];

export function DuvidasRapidas() {
  return (
    <Section id="duvidas-rapidas" background="white" divider>
      <Eyebrow>Dúvidas</Eyebrow>
      <SectionTitle>Tire suas dúvidas</SectionTitle>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
        {perguntas.map((p) => (
          <div key={p.q} className="rounded-2xl bg-surface-alt p-5">
            <p className="mb-2 font-sans text-sm font-semibold text-ink">{p.q}</p>
            <p className="font-sans text-sm leading-relaxed text-ink/65">{p.a}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link to="/duvidas" className={brandButtonClass("outline")}>
          Ver todas as dúvidas
        </Link>
      </div>
    </Section>
  );
}
