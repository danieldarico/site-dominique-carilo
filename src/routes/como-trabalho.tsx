import { createFileRoute, Link } from "@tanstack/react-router";
import { Laptop, Users, Lock, CalendarClock, ShieldCheck } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, SectionTitle } from "@/components/site/Section";
import { FloatingQuote } from "@/components/site/FloatingQuote";
import { Reveal } from "@/components/site/Reveal";
import { TopoPattern } from "@/components/site/TopoPattern";
import { brandButtonClass } from "@/components/site/BrandButton";
import { Card } from "@/components/ui/card";

const atendimento = [
  { icon: Laptop, text: "Sessões individuais e 100% on-line." },
  { icon: Users, text: "Atendimento para jovens, adultos e idosos." },
  { icon: Lock, text: "Encontros realizados por plataforma segura." },
  { icon: CalendarClock, text: "Frequência definida de acordo com cada caso." },
  { icon: ShieldCheck, text: "Sigilo garantido pelo código de ética profissional." },
];

export const Route = createFileRoute("/como-trabalho")({
  head: () => ({
    meta: [
      { title: "Como Trabalho | Dominique Carilo, Psicanalista Online" },
      {
        name: "description",
        content:
          "Como funciona a escuta clínica de Dominique Carilo: psicanálise de orientação lacaniana, atendimento online, sigilo e ética profissional.",
      },
    ],
  }),
  component: ComoTrabalho,
});

function ComoTrabalho() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Como Trabalho"
          title="Minha compreensão da clínica"
          subtitle="Acredito que cada pessoa chega à análise trazendo uma história singular. O sofrimento pode assumir muitas formas, mas nunca se reduz a um diagnóstico ou a uma categoria."
        />

        <Section id="escuta-etica" background="white" divider>
          <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <Eyebrow>Ética da escuta</Eyebrow>
              <SectionTitle align="left">Um espaço para investigar o que se repete</SectionTitle>
              <p className="font-sans text-base leading-relaxed text-ink/75 md:text-lg">
                Meu trabalho consiste em oferecer um espaço de escuta ética, onde seja possível
                investigar aquilo que insiste em se repetir e construir novas formas de responder à
                própria história.
              </p>
            </Reveal>
            <FloatingQuote quote="Um espaço de escuta ética, sem respostas prontas." tone="bordo" />
          </div>
        </Section>

        <Section id="como-funciona-atendimento" background="alt" divider>
          <Eyebrow>Como funciona o atendimento</Eyebrow>
          <SectionTitle>Formato do acompanhamento</SectionTitle>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {atendimento.map(({ icon: Icon, text }, i) => (
              <Reveal key={text} delay={i * 80}>
                <Card className="flex h-full items-start gap-3 rounded-2xl border-0 bg-white p-5 shadow-none">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-bordo text-white">
                    <Icon className="size-4" strokeWidth={1.75} />
                  </span>
                  <p className="font-sans text-sm leading-relaxed text-ink/80">{text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="atendimento-cta" background="bordo" className="relative overflow-hidden">
          <TopoPattern className="-left-10 -bottom-10 size-64" stroke="#ffffff" opacity={0.12} />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
            <p className="font-display text-2xl font-medium text-white md:text-3xl">
              Quer entender o passo a passo da análise?
            </p>
            <Link to="/atendimento" className={brandButtonClass("outline-light")}>
              Conheça o atendimento em detalhes
            </Link>
          </div>
        </Section>

        <Section id="cta" background="ink">
          <div className="mx-auto max-w-xl text-center">
            <p className="font-display text-2xl font-medium text-white md:text-3xl">
              O primeiro passo pode ser apenas uma conversa.
            </p>
            <div className="mt-8">
              <Link to="/" hash="fale-comigo" className={brandButtonClass("outline-light")}>
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
