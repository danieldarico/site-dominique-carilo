import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Section, SectionTitle } from "./Section";
import { BrandButton } from "./BrandButton";
import { posts } from "@/data/posts";

export function Blog() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? posts : posts.slice(0, 3);

  return (
    <Section id="meu-blog" background="alt" divider>
      <SectionTitle>Meu Blog</SectionTitle>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {visible.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col overflow-hidden rounded-md bg-white shadow-sm"
          >
            <div className="aspect-video w-full bg-divider" />
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="font-display text-lg font-bold leading-snug">
                {post.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-brand/80">
                {post.excerpt}
              </p>
              <div className="pt-2">
                <Link to="/blog/$slug" params={{ slug: post.slug }}>
                  <BrandButton type="button">Ler mais</BrandButton>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      {posts.length > 3 && (
        <div className="mt-10 flex justify-center">
          <BrandButton type="button" onClick={() => setExpanded((v) => !v)}>
            {expanded ? "Ver menos posts" : "Ver mais posts"}
          </BrandButton>
        </div>
      )}
    </Section>
  );
}
