import { createFileRoute, Link } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, SectionTitle } from "@/components/site/Section";
import { Timeline } from "@/components/site/Timeline";
import { brandButtonClass } from "@/components/site/BrandButton";

const etapas = [
  { title: "Entrevistas Preliminares" },
  { title: "Da queixa à demanda" },
  { title: "Instalação da análise" },
  { title: "Direção do tratamento" },
  { title: "A Travessia da história" },
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

        <Section id="travessia" background="white" divider>
          <Eyebrow>A travessia da análise</Eyebrow>
          <SectionTitle>O percurso do tratamento</SectionTitle>
          <Timeline items={etapas} />
        </Section>

        <Section id="sobre-o-processo" background="alt" divider>
          <div className="mx-auto max-w-2xl space-y-5 font-sans text-base leading-relaxed text-ink/75 md:text-lg">
            <p>
              Gosto de pensar a análise como uma travessia. Assim como o barqueiro conduz a passagem
              sem decidir o destino do viajante, o analista acompanha esse percurso sustentando a
              escuta e a ética do processo.
            </p>
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
              A análise se inicia quando nasce o desejo de compreender aquilo que insiste em se
              repetir. Não se trata de encontrar respostas prontas, mas de construir perguntas que
              permitam uma nova relação com a própria história.
            </p>
            <p>
              Meu papel não é dizer como você deve viver. Também não é oferecer conselhos ou decidir
              por você. Sustento uma escuta para que seu próprio percurso possa acontecer,
              respeitando seu tempo e sua singularidade.
            </p>
          </div>
        </Section>

        <Section id="cta" background="ink">
          <div className="mx-auto max-w-xl text-center">
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
