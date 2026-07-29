import { Activity, MessageCircle, HeartHandshake, Users, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section, Eyebrow, SectionTitle } from "./Section";
import { Reveal } from "./Reveal";

const servicos = [
  {
    icon: Activity,
    title: "Ansiedade e síndrome do pânico",
    text: "Pós-graduação em Tratamento dos Transtornos de Ansiedade e Síndrome do Pânico.",
  },
  {
    icon: MessageCircle,
    title: "Escuta clínica lacaniana",
    text: "Psicanálise de orientação lacaniana, investigando história e sentidos, não só o sintoma.",
  },
  {
    icon: HeartHandshake,
    title: "Crises e prevenção ao suicídio",
    text: "Pós-graduação em Psicoterapia em Intervenção em Crises e Prevenção do Suicídio.",
  },
  {
    icon: Users,
    title: "Jovens, adultos e idosos",
    text: "Atendimento individual, 100% online, para diferentes fases da vida.",
  },
];

export function ServicosCards() {
  return (
    <Section id="especialidades" background="alt">
      <Eyebrow>Especialidades</Eyebrow>
      <SectionTitle>Onde a escuta se aplica</SectionTitle>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {servicos.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 80} className="h-full">
            <div className="group flex h-full flex-col rounded-2xl bg-white p-6 transition-shadow hover:shadow-md">
              <span className="mb-4 grid size-9 place-items-center rounded-full bg-bordo text-white">
                <Icon className="size-4" strokeWidth={1.75} />
              </span>
              <p className="font-sans text-sm font-semibold leading-snug text-ink">{title}</p>
              <p className="mt-2 flex-1 font-sans text-xs leading-relaxed text-ink/60">{text}</p>
              <Link
                to="/atendimento"
                className="mt-4 inline-flex items-center gap-1 font-sans text-xs font-medium text-bordo transition-transform group-hover:translate-x-0.5"
              >
                Saiba mais
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
