import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { Section, SectionTitle } from "./Section";
import { brandButtonClass } from "./BrandButton";

export function BibliotecaTeaser() {
  return (
    <Section id="biblioteca" background="petroleo" divider>
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <BookOpen className="mb-6 size-8 text-white/70" strokeWidth={1.25} />
        <SectionTitle>Livros que acompanham uma travessia.</SectionTitle>
        <p className="font-sans text-base leading-relaxed text-white/80">
          Obras que marcaram meu percurso como analista e analisante e que frequentemente acompanham
          meus pacientes ao longo da análise.
        </p>
        <div className="mt-8">
          <Link to="/biblioteca" className={brandButtonClass("outline-light")}>
            Explorar a biblioteca
          </Link>
        </div>
      </div>
    </Section>
  );
}
