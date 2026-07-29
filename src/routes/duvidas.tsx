import { createFileRoute, Link } from "@tanstack/react-router";
import { HelpCircle, TrendingUp, Wallet } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { brandButtonClass } from "@/components/site/BrandButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const grupos = [
  {
    label: "Sobre o processo",
    icon: HelpCircle,
    perguntas: [
      {
        q: "Como saber se está na hora de procurar terapia?",
        a: "Você não precisa esperar uma crise para procurar terapia. Muitas pessoas iniciam o processo quando percebem que algo se repete em suas vidas, quando a angústia se torna difícil de sustentar ou simplesmente quando desejam compreender melhor a própria história.",
      },
      {
        q: "Qual é a diferença entre Psicologia Clínica e Psicanálise?",
        a: "A Psicanálise é uma das abordagens da Psicologia Clínica. No meu trabalho, utilizo a Psicanálise de orientação lacaniana para investigar não apenas o sintoma, mas também a história e os sentidos que atravessam o sofrimento de cada pessoa.",
      },
      {
        q: "Preciso ter um diagnóstico psiquiátrico para iniciar uma terapia?",
        a: "Não. A maioria das pessoas inicia a terapia sem um diagnóstico. O ponto de partida é o sofrimento e o desejo de compreender o que está acontecendo, independentemente de existir um diagnóstico formal.",
      },
      {
        q: "A terapia é indicada apenas para quem está vivendo uma crise?",
        a: "Não. A terapia também pode ser um espaço para compreender padrões que se repetem, elaborar mudanças importantes ou desenvolver uma relação diferente com aquilo que causa sofrimento.",
      },
      {
        q: "Como funciona a primeira sessão de terapia?",
        a: "Gosto de iniciar pelas entrevistas preliminares. É um primeiro encontro para escutar sua história, compreender sua demanda, explicar como conduzo o trabalho e verificar, juntos, se esse percurso faz sentido para você.",
      },
      {
        q: "O que acontece durante uma sessão de análise?",
        a: "Cada sessão é construída a partir do que você traz. Não há um roteiro ou respostas prontas. Meu papel é sustentar uma escuta ética para que possamos investigar aquilo que insiste em se repetir e abrir espaço para novas possibilidades de elaboração.",
      },
    ],
  },
  {
    label: "Resultados e formato",
    icon: TrendingUp,
    perguntas: [
      {
        q: "Como saber se a terapia está fazendo efeito?",
        a: "As mudanças costumam acontecer de forma gradual. Muitas vezes, elas aparecem quando você passa a compreender melhor o que sente, responde de maneira diferente a situações conhecidas ou percebe novas possibilidades diante daquilo que antes parecia sem saída.",
      },
      {
        q: "Quanto tempo dura um processo terapêutico?",
        a: "Não existe um tempo igual para todos. Cada processo é singular e respeita a história, a demanda e o ritmo de cada pessoa.",
      },
      {
        q: "A terapia on-line funciona? Ela é tão eficaz quanto a presencial?",
        a: "Sim. Quando realizada de forma ética e em um ambiente adequado, a terapia on-line apresenta resultados semelhantes aos do atendimento presencial para grande parte das demandas clínicas.",
      },
      {
        q: "Quem pode e quem não deve realizar atendimento psicológico on-line?",
        a: "O atendimento on-line é indicado para jovens, adultos e idosos que tenham privacidade durante as sessões. Em situações de urgência ou quando o formato remoto não é o mais adequado, outros encaminhamentos podem ser necessários.",
      },
    ],
  },
  {
    label: "Prático",
    icon: Wallet,
    perguntas: [
      {
        q: "Como funciona o sigilo e a privacidade durante as sessões?",
        a: "O sigilo é um princípio fundamental da prática psicológica. Tudo o que é compartilhado nas sessões é protegido pelo Código de Ética Profissional do Psicólogo, respeitando as exceções previstas em lei.",
      },
      {
        q: "As sessões podem ser gravadas ou utilizar ferramentas de anotação por inteligência artificial?",
        a: "Não utilizo gravações nem ferramentas automáticas de transcrição durante as sessões. Esse cuidado preserva a privacidade, o sigilo e a liberdade da palavra, fundamentais para o processo analítico.",
      },
      {
        q: "O consultório atende convênios ou planos de saúde?",
        a: "Os atendimentos são particulares. Emito nota fiscal para que você possa solicitar reembolso ao seu plano de saúde, caso essa modalidade esteja prevista no seu contrato.",
      },
      {
        q: "Qual é o investimento da terapia e como funciona o pagamento?",
        a: "Os valores não podem ser divulgados publicamente, conforme as orientações do Conselho Federal de Psicologia. Durante nosso primeiro contato, explico como funciona o investimento e esclareço todas as dúvidas. Caso o valor não seja viável para você neste momento, sempre que possível procuro indicar outros profissionais ou serviços que possam oferecer um acompanhamento adequado.",
      },
    ],
  },
];

export const Route = createFileRoute("/duvidas")({
  head: () => ({
    meta: [
      { title: "Dúvidas | Dominique Carilo, Psicóloga e Psicanalista Online" },
      {
        name: "description",
        content:
          "Tire suas dúvidas sobre psicanálise, terapia online, sigilo, primeira sessão e investimento com Dominique Carilo.",
      },
    ],
  }),
  component: Duvidas,
});

function Duvidas() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Dúvidas"
          title="Tire suas dúvidas"
          subtitle="A FAQ reduz ansiedades relacionadas a sigilo, funcionamento, investimento, primeira entrevista e modalidade online."
        />
        <Section id="faq" background="white">
          <div className="mx-auto max-w-3xl space-y-12">
            {grupos.map((grupo, gi) => (
              <Reveal key={grupo.label} delay={gi * 100}>
                <div className="mb-4 flex items-center gap-2.5">
                  <grupo.icon className="size-4 text-bordo" strokeWidth={1.75} />
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-bordo">
                    {grupo.label}
                  </p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {grupo.perguntas.map((item, i) => (
                    <AccordionItem key={item.q} value={`${gi}-${i}`} className="border-divider">
                      <AccordionTrigger className="font-display text-lg font-semibold text-ink hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="font-sans text-sm leading-relaxed text-ink/75">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Reveal>
            ))}
          </div>
        </Section>
        <Section id="cta" background="petroleo">
          <div className="mx-auto max-w-xl text-center">
            <p className="font-display text-2xl font-medium text-white md:text-3xl">
              Posso confiar?
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
