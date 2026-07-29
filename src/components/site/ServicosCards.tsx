import { Link } from "@tanstack/react-router";
import { Section, Eyebrow, SectionTitle } from "./Section";

const servicos = [
  {
    title: "Escuta clínica lacaniana",
    text: "Psicanálise de orientação lacaniana, investigando a história e os sentidos que atravessam o sofrimento de cada pessoa.",
  },
  {
    title: "Ansiedade e síndrome do pânico",
    text: "Pós-graduação em Tratamento dos Transtornos de Ansiedade e Síndrome do Pânico.",
  },
  {
    title: "Crises e prevenção ao suicídio",
    text: "Pós-graduação em Psicoterapia em Intervenção em Crises e Prevenção do Suicídio.",
  },
];

export function ServicosCards() {
  return (
    <Section id="servicos" background="alt" divider>
      <Eyebrow>Serviços</Eyebrow>
      <SectionTitle>Onde a escuta se aplica</SectionTitle>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {servicos.map((s) => (
          <div key={s.title} className="border border-divider bg-white p-8">
            <h3 className="mb-3 font-display text-xl font-semibold text-ink">{s.title}</h3>
            <p className="font-sans text-sm leading-relaxed text-ink/70">{s.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link
          to="/atendimento"
          className="font-sans text-sm text-bordo underline underline-offset-4 hover:text-ink"
        >
          Ver como funciona o atendimento
        </Link>
      </div>
    </Section>
  );
}
