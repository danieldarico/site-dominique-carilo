import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, BookOpen, Award, Users, Sparkles } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Timeline } from "@/components/site/Timeline";
import { brandButtonClass } from "@/components/site/BrandButton";
import { TopoPattern } from "@/components/site/TopoPattern";
import { Badge } from "@/components/ui/badge";

const formacao = [
  {
    title: "Graduação em Psicologia",
    subtitle: "Universidade Veiga de Almeida (UVA)",
    icon: GraduationCap,
  },
  {
    title: "Extensão Universitária",
    subtitle: "Saúde Mental do Trabalhador, Universidade Federal do Rio de Janeiro (UFRJ)",
    icon: BookOpen,
  },
  { title: "Pós-graduação em Psicanálise", icon: Award },
  {
    title: "Pós-graduação",
    subtitle: "Tratamento dos Transtornos de Ansiedade e Síndrome do Pânico",
    icon: Award,
  },
  {
    title: "Pós-graduação",
    subtitle: "Psicoterapia em Intervenção em Crises e Prevenção do Suicídio",
    icon: Award,
  },
  {
    title: "Formação Permanente",
    subtitle: "Fórum do Campo Lacaniano, Rio de Janeiro",
    icon: Users,
  },
  {
    title: "Hoje",
    subtitle: "Psicóloga e Psicanalista. Atendimento clínico 100% on-line.",
    icon: Sparkles,
  },
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
        <PageHero eyebrow="Percurso" title="Formação e trajetória" tone="petroleo" />
        <Section id="formacao" background="white">
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <Badge className="border-0 bg-petroleo/10 text-petroleo hover:bg-petroleo/10">
              UVA
            </Badge>
            <Badge className="border-0 bg-petroleo/10 text-petroleo hover:bg-petroleo/10">
              UFRJ
            </Badge>
            <Badge className="border-0 bg-petroleo/10 text-petroleo hover:bg-petroleo/10">
              Fórum do Campo Lacaniano
            </Badge>
          </div>
          <Timeline items={formacao} tone="petroleo" />
        </Section>
        <Section id="cta" background="petroleo" className="relative overflow-hidden">
          <TopoPattern className="-right-12 -bottom-12 size-72" stroke="#ffffff" opacity={0.12} />
          <div className="relative mx-auto max-w-xl text-center">
            <p className="font-display text-2xl font-medium text-white md:text-3xl">
              Quem é Dominique Carilo?
            </p>
            <p className="mt-3 font-sans text-sm text-white/70">
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
