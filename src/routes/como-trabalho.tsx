import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, SectionTitle } from "@/components/site/Section";
import { brandButtonClass } from "@/components/site/BrandButton";

const atendimento = [
  "Sessões individuais e 100% on-line.",
  "Atendimento para jovens, adultos e idosos.",
  "Encontros realizados por plataforma segura.",
  "Frequência definida de acordo com cada caso.",
  "Sigilo garantido pelo código de ética profissional.",
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
          <div className="mx-auto max-w-2xl text-center font-sans text-base leading-relaxed text-ink/75 md:text-lg">
            <p>
              Meu trabalho consiste em oferecer um espaço de escuta ética, onde seja possível
              investigar aquilo que insiste em se repetir e construir novas formas de responder à
              própria história.
            </p>
          </div>
        </Section>
        <Section id="como-funciona-atendimento" background="alt" divider>
          <Eyebrow>Como funciona o atendimento</Eyebrow>
          <SectionTitle>Formato do acompanhamento</SectionTitle>
          <ul className="mx-auto max-w-2xl space-y-4">
            {atendimento.map((item) => (
              <li key={item} className="flex items-start gap-3 font-sans text-base text-ink/80">
                <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-bordo text-white">
                  <Check className="size-3.5" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center">
            <Link to="/atendimento" className={brandButtonClass("outline")}>
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
