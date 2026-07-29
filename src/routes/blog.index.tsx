import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
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
import { posts, type Post } from "@/data/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Dominique Carilo, Psicanálise Aplicada ao Cotidiano" },
      {
        name: "description",
        content:
          "Artigos sobre psicanálise, ansiedade, saúde mental e repetição de padrões, escritos por Dominique Carilo, psicóloga e psicanalista.",
      },
    ],
  }),
  component: BlogIndex,
});

function PostCard({
  post,
  delay = 0,
  tag,
  surface = "alt",
}: {
  post: Post;
  delay?: number;
  tag?: string;
  surface?: "alt" | "white";
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={`flex h-full flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-md ${surface === "white" ? "bg-white" : "bg-surface-alt"}`}
      >
        <div className="aspect-video w-full bg-divider/40" />
        <div className="flex flex-1 flex-col gap-3 p-6">
          {tag && (
            <Badge className="w-fit border-0 bg-petroleo/10 text-petroleo hover:bg-petroleo/10">
              {tag}
            </Badge>
          )}
          <h2 className="font-display text-lg font-semibold leading-snug text-ink">{post.title}</h2>
          <p className="flex-1 font-sans text-sm leading-relaxed text-ink/70">{post.excerpt}</p>
          <div className="pt-2">
            <Link
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className={brandButtonClass("outline", "px-5 py-2 text-xs")}
            >
              Ler artigo
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function BlogIndex() {
  const favoritos = posts.filter((p) => p.featured);
  const recentes = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Blog"
          title="Psicanálise aplicada ao cotidiano"
          subtitle="Artigos sobre repetição de padrões, angústia, relacionamentos e escuta clínica."
          tone="petroleo"
        />

        {favoritos.length > 0 && (
          <Section id="favoritos" background="white">
            <div className="mb-2 flex items-center justify-center gap-2">
              <Star className="size-4 text-bordo" strokeWidth={1.75} />
              <Eyebrow>Favoritos da autora</Eyebrow>
            </div>
            <SectionTitle>Selecionados pela Dominique</SectionTitle>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {favoritos.map((post, i) => (
                <PostCard key={post.slug} post={post} delay={i * 80} tag="Favorito" surface="alt" />
              ))}
            </div>
          </Section>
        )}

        <Section id="artigos" background="alt">
          <Eyebrow tone="petroleo">Blog</Eyebrow>
          <SectionTitle>Mais recentes</SectionTitle>
          <Carousel opts={{ align: "start" }} className="mx-auto w-full max-w-5xl">
            <CarouselContent>
              {recentes.map((post, i) => (
                <CarouselItem key={post.slug} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <PostCard post={post} delay={(i % 3) * 80} surface="white" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex justify-center gap-3">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </Section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
