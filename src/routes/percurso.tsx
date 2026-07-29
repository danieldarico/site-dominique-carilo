import { createFileRoute, Link } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Timeline } from "@/components/site/Timeline";
import { brandButtonClass } from "@/components/site/BrandButton";

const formacao = [
  { title: "Graduação em Psicologia", subtitle: "Universidade Veiga de Almeida (UVA)" },
  {
    title: "Extensão Universitária",
    subtitle: "Saúde Mental do Trabalhador, Universidade Federal do Rio de Janeiro (UFRJ)",
  },
  { title: "Pós-graduação em Psicanálise" },
  {
    title: "Pós-graduação",
    subtitle: "Tratamento dos Transtornos de Ansiedade e Síndrome do Pânico",
  },
  {
    title: "Pós-graduação",
    subtitle: "Psicoterapia em Intervenção em Crises e Prevenção do Suicídio",
  },
  { title: "Formação Permanente", subtitle: "Fórum do Campo Lacaniano, Rio de Janeiro" },
  { title: "Hoje", subtitle: "Psicóloga e Psicanalista. Atendimento clínico 100% on-line." },
];

export const Route = createFileRoute("/percurso")({
  head: () => ({
    meta: [
      { title: "Percurso | Dominique Carilo, Psicóloga e Psicanalista" },
      {
        name: "description",
        content:
          "Formação de Dominique Carilo: graduação pela UVA, extensão pela UFRJ, pós-graduações em Psicanálise e formação permanente no Fórum do Campo Lacaniano.",
      },
    ],
  }),
  component: Percurso,
});

function Percurso() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main>
        <PageHero eyebrow="Percurso" title="Formação e trajetória" />
        <Section id="formacao" background="white" divider>
          <Timeline items={formacao} />
        </Section>
        <Section id="cta" background="ink">
          <div className="mx-auto max-w-xl text-center">
            <p className="font-display text-2xl font-medium text-white md:text-3xl">
              Quem é Dominique Carilo?
            </p>
            <p className="mt-4 font-sans text-sm text-white/70">
              Conheça também como conduzo o trabalho clínico.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/como-trabalho" className={brandButtonClass("outline-light")}>
                Como trabalho
              </Link>
              <Link to="/" hash="fale-comigo" className={brandButtonClass("primary")}>
                Agendar uma primeira conversa
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
