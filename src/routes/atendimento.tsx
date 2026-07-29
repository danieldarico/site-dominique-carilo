import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, HelpCircle, KeyRound, Compass, Route as RouteIcon } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, SectionTitle } from "@/components/site/Section";
import { Timeline } from "@/components/site/Timeline";
import { FloatingQuote } from "@/components/site/FloatingQuote";
import { Reveal } from "@/components/site/Reveal";
import { TopoPattern } from "@/components/site/TopoPattern";
import { brandButtonClass } from "@/components/site/BrandButton";

const etapas = [
  {
    title: "Entrevistas Preliminares",
    subtitle: "O primeiro encontro, dedicado a te escutar.",
    icon: MessageCircle,
  },
  {
    title: "Da queixa à demanda",
    subtitle: "Da queixa inicial ao desejo de compreender.",
    icon: HelpCircle,
  },
  {
    title: "Instalação da análise",
    subtitle: "Quando o processo realmente começa.",
    icon: KeyRound,
  },
  {
    title: "Direção do tratamento",
    subtitle: "O percurso construído em conjunto.",
    icon: Compass,
  },
  {
    title: "A Travessia da história",
    subtitle: "Revisitar a história para seguir adiante.",
    icon: RouteIcon,
  },
];

export const Route = createFileRoute("/atendimento")({
  head: () => ({
    meta: [
      { title: "Atendimento | Dominique Carilo, Psicanalista Online" },
      {
        name: "description",
        content:
          "Como funciona a análise com Dominique Carilo: entrevistas preliminares, direção do tratamento e a travessia da história, 100% online.",
      },
    ],
  }),
  component: Atendimento,
});

function Atendimento() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Atendimento"
          title="Toda análise começa por uma conversa."
          subtitle="Antes de qualquer interpretação, existe um tempo dedicado à escuta. É nesse primeiro momento que conhecemos sua história, compreendemos sua demanda e avaliamos juntos se este é o caminho mais adequado."
        />

        <Section id="travessia" background="white">
          <Eyebrow>A travessia da análise</Eyebrow>
          <SectionTitle>O percurso do tratamento</SectionTitle>
          <Timeline items={etapas} />
        </Section>

        <Section id="sobre-o-processo" background="alt">
          <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <FloatingQuote
              quote="Assim como o barqueiro conduz a travessia sem decidir o destino do viajante, o analista acompanha o percurso."
              align="left"
              tone="petroleo"
            />
            <Reveal className="space-y-5 font-sans text-base leading-relaxed text-ink/75 md:text-lg">
              <p>
                Cada análise encontra seu próprio tempo. O objetivo não é apagar o passado, mas
                permitir que ele deixe de ser a única forma possível de responder à vida.
              </p>
              <p>
                Muitas pessoas chegam dizendo: “Quero parar de sentir isso.” Com o tempo, a pergunta
                pode mudar. Em vez de apenas eliminar o sofrimento, passamos a investigar por que
                determinadas situações continuam produzindo as mesmas respostas.
              </p>
              <p>
                Meu papel não é dizer como você deve viver. Sustento uma escuta para que seu próprio
                percurso possa acontecer, respeitando seu tempo e sua singularidade.
              </p>
            </Reveal>
          </div>
        </Section>

        <Section id="cta" background="bordo" className="relative overflow-hidden">
          <TopoPattern className="-right-10 -top-10 size-64" stroke="#ffffff" opacity={0.12} />
          <div className="relative mx-auto max-w-xl text-center">
            <p className="font-display text-2xl font-medium text-white md:text-3xl">
              Estou pronto para conversar.
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
