import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getPost, posts } from "@/data/posts";

export const Route = createFileRoute("/blog/$slug")({
  component: PostPage,
  head: ({ params }) => {
    const post = params ? getPost(params.slug) : undefined;
    return {
      meta: post
        ? [
            { title: `${post.title} — Dominique Carilo` },
            { name: "description", content: post.excerpt },
            { property: "og:title", content: post.title },
            { property: "og:description", content: post.excerpt },
            { property: "og:type", content: "article" },
          ]
        : [{ title: "Post — Dominique Carilo" }],
    };
  },
});

function PostPage() {
  const { slug } = Route.useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-brand">Post não encontrado</h1>
        <Link to="/" className="mt-6 inline-block text-brand underline">
          Voltar ao início
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-brand">
      <header className="bg-brand py-4 text-brand-foreground">
        <div className="mx-auto flex w-full max-w-3xl items-center px-6">
          <Link
            to="/"
            hash="meu-blog"
            className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white"
          >
            <ArrowLeft className="size-4" /> Voltar ao blog
          </Link>
        </div>
      </header>
      <article className="mx-auto w-full max-w-3xl px-6 py-12 md:py-20">
        <h1 className="font-display text-3xl font-bold leading-tight md:text-4xl">
          {post.title}
        </h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed md:text-[17px]">
          {post.paragraphs.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-12 border-t border-divider pt-8">
          <h2 className="mb-4 font-display text-xl font-bold">Outros posts</h2>
          <ul className="space-y-2">
            {posts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 5)
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="text-brand underline-offset-4 hover:underline"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
