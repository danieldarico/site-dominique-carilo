import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { brandButtonClass } from "@/components/site/BrandButton";

const placeholders = Array.from({ length: 6 });

export const Route = createFileRoute("/biblioteca")({
  head: () => ({
    meta: [
      { title: "Biblioteca | Dominique Carilo, Psicóloga e Psicanalista" },
      {
        name: "description",
        content:
          "Livros que marcaram o percurso de Dominique Carilo como psicóloga, psicanalista e analisante, indicados com frequência em consultório.",
      },
    ],
  }),
  component: Biblioteca,
});

function Biblioteca() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Biblioteca"
          title="Livros que acompanham uma travessia."
          subtitle="A leitura nunca substitui uma análise. Mas, muitas vezes, oferece palavras para experiências que ainda não conseguimos nomear."
          tone="petroleo"
        />

        <Section id="sobre-a-biblioteca" background="white" divider>
          <div className="mx-auto max-w-2xl space-y-5 text-center font-sans text-base leading-relaxed text-ink/75">
            <p>
              Esta biblioteca reúne livros que marcaram meu percurso como psicóloga, psicanalista e
              analisante. São obras que frequentemente indico em consultório e que continuam
              atravessando minha forma de escutar, pensar e compreender a experiência humana.
            </p>
            <p>
              A seleção é atualizada periodicamente com novas leituras e também com edições que
              estejam em promoção. Alguns links direcionam para a Amazon e fazem parte do Programa
              de Associados. Isso significa que, caso a compra seja realizada por meio deles, posso
              receber uma pequena comissão, sem qualquer custo adicional para você.
            </p>
            <p>
              Mais do que uma lista de recomendações, este é um convite para ampliar o olhar sobre
              si, sobre o outro e sobre as diferentes formas de narrar a experiência humana. Boa
              leitura.
            </p>
          </div>
        </Section>

        <Section id="acervo" background="alt">
          <div className="mb-6 text-center font-sans text-xs uppercase tracking-[0.14em] text-ink/40">
            Acervo em preparação, títulos entram assim que definidos com a Dominique
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {placeholders.map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 border border-divider bg-white p-6"
              >
                <div className="flex aspect-[2/3] w-full items-center justify-center bg-surface-alt">
                  <BookOpen className="size-6 text-divider" strokeWidth={1.25} />
                </div>
                <p className="text-center font-sans text-xs text-ink/40">Título a definir</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="cta" background="ink">
          <div className="mx-auto max-w-xl text-center">
            <p className="font-display text-2xl font-medium text-white md:text-3xl">
              Quer conversar sobre o que está lendo, ou sobre o que está sentindo?
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
