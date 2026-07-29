import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ExternalLink } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, SectionTitle } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { brandButtonClass } from "@/components/site/BrandButton";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const destaques = [{ categoria: "Psicanálise" }, { categoria: "Clínica lacaniana" }];

const acervo = ["Ensaio", "Psicanálise", "Clínica", "Ensaio", "Psicanálise", "Clínica"];

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
              Alguns links direcionam para a Amazon e fazem parte do Programa de Associados. Isso
              significa que, caso a compra seja realizada por meio deles, posso receber uma pequena
              comissão, sem qualquer custo adicional para você.
            </p>
          </div>
        </Section>

        <Section id="destaques" background="alt">
          <Eyebrow tone="petroleo">Em destaque</Eyebrow>
          <SectionTitle>As leituras mais indicadas</SectionTitle>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {destaques.map((d, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex h-full flex-col gap-4 rounded-2xl bg-petroleo p-6 text-white sm:flex-row sm:items-center">
                  <div className="flex aspect-[3/4] w-full max-w-[140px] shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <BookOpen className="size-8 text-white/70" strokeWidth={1.25} />
                  </div>
                  <div>
                    <Badge className="mb-2 border-0 bg-white/15 text-white hover:bg-white/15">
                      {d.categoria}
                    </Badge>
                    <p className="font-display text-xl font-semibold">Título a definir</p>
                    <p className="mt-1 font-sans text-sm text-white/70">Autor a definir</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="acervo" background="white" divider>
          <div className="mb-8 flex flex-col items-center gap-2 text-center">
            <Eyebrow>Acervo</Eyebrow>
            <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink/40">
              Em preparação, títulos entram assim que definidos com a Dominique
            </p>
          </div>
          <Carousel opts={{ align: "start" }} className="mx-auto w-full max-w-5xl">
            <CarouselContent>
              {acervo.map((cat, i) => (
                <CarouselItem key={i} className="basis-1/2 sm:basis-1/3 lg:basis-1/4">
                  <div className="flex h-full flex-col gap-3 rounded-2xl bg-surface-alt p-5">
                    <div className="flex aspect-[3/4] w-full items-center justify-center rounded-xl bg-white">
                      <BookOpen className="size-6 text-divider" strokeWidth={1.25} />
                    </div>
                    <Badge variant="outline" className="w-fit border-divider text-ink/60">
                      {cat}
                    </Badge>
                    <div>
                      <p className="font-sans text-sm font-semibold text-ink">Título a definir</p>
                      <p className="font-sans text-xs text-ink/50">Autor a definir</p>
                    </div>
                    <span className="mt-auto inline-flex items-center gap-1.5 font-sans text-xs text-ink/35">
                      <ExternalLink className="size-3.5" />
                      Ver na Amazon (em breve)
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex justify-center gap-3">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </Section>

        <Section id="cta" background="petroleo">
          <div className="mx-auto max-w-xl text-center">
            <p className="font-display text-2xl font-medium text-white md:text-3xl">
              Quer conversar sobre o que está sentindo?
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
