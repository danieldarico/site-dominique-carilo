import { Link } from "@tanstack/react-router";
import { Section, Eyebrow, SectionTitle } from "./Section";
import { brandButtonClass } from "./BrandButton";
import { Reveal } from "./Reveal";
import { Badge } from "@/components/ui/badge";
import { posts } from "@/data/posts";

export function Blog() {
  const visible = posts.slice(0, 3);

  return (
    <Section id="meu-blog" background="white" divider>
      <Eyebrow tone="petroleo">Blog</Eyebrow>
      <SectionTitle>Últimos artigos.</SectionTitle>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {visible.map((post, i) => (
          <Reveal key={post.slug} delay={i * 80} className="h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-surface-alt transition-shadow hover:shadow-md">
              <div className="aspect-video w-full bg-divider/40" />
              <div className="flex flex-1 flex-col gap-3 p-6">
                <Badge className="w-fit border-0 bg-petroleo/10 text-petroleo hover:bg-petroleo/10">
                  Artigo
                </Badge>
                <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                  {post.title}
                </h3>
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
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link to="/blog" className={brandButtonClass("primary")}>
          Ver todos os artigos
        </Link>
      </div>
    </Section>
  );
}
