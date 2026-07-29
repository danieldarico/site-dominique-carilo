import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { Section } from "./Section";
import { brandButtonClass } from "./BrandButton";

export function BibliotecaTeaser() {
  return (
    <Section id="biblioteca" background="alt" divider className="!py-10 md:!py-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <BookOpen className="size-5 shrink-0 text-petroleo" strokeWidth={1.5} />
          <p className="font-sans text-sm text-ink/75">
            Livros que acompanham uma travessia, indicados por Dominique.
          </p>
        </div>
        <Link
          to="/biblioteca"
          className={brandButtonClass(
            "outline",
            "shrink-0 border-petroleo text-petroleo hover:bg-petroleo hover:text-white",
          )}
        >
          Explorar a biblioteca
        </Link>
      </div>
    </Section>
  );
}
