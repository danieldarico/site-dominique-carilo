import { createFileRoute, Link } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { brandButtonClass } from "@/components/site/BrandButton";
import { posts } from "@/data/posts";

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

function BlogIndex() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Blog"
          title="Psicanálise aplicada ao cotidiano"
          subtitle="Artigos sobre repetição de padrões, angústia, relacionamentos e escuta clínica."
        />
        <Section id="artigos" background="white">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col overflow-hidden border border-divider bg-white"
              >
                <div className="aspect-video w-full bg-surface-alt" />
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h2 className="font-display text-lg font-semibold leading-snug text-ink">
                    {post.title}
                  </h2>
                  <p className="flex-1 font-sans text-sm leading-relaxed text-ink/70">
                    {post.excerpt}
                  </p>
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
            ))}
          </div>
        </Section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
