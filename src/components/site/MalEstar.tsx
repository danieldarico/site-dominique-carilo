import { Link } from "@tanstack/react-router";
import { Section, SectionTitle } from "./Section";
import { brandButtonClass } from "./BrandButton";

export function MalEstar() {
  return (
    <Section id="mal-estar-da-repeticao" background="alt" divider>
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle>Muda o cenário. A história parece a mesma.</SectionTitle>
        <div className="space-y-1 font-sans text-base leading-relaxed text-ink/75 md:text-lg">
          <p>Você muda de trabalho.</p>
          <p>De relacionamento.</p>
          <p>De cidade.</p>
          <p>Mas algo continua voltando.</p>
        </div>
        <p className="mt-6 font-sans text-base leading-relaxed text-ink/75 md:text-lg">
          Na análise, não investigamos apenas o que aconteceu. Investigamos como sua história
          continua produzindo respostas no presente.
        </p>
        <div className="mt-8">
          <Link to="/como-trabalho" className={brandButtonClass("outline")}>
            Conheça minha forma de trabalhar
          </Link>
        </div>
      </div>
    </Section>
  );
}
