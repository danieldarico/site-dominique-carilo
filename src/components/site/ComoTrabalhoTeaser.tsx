import { Link } from "@tanstack/react-router";
import { Section, Eyebrow, SectionTitle } from "./Section";
import { brandButtonClass } from "./BrandButton";

export function ComoTrabalhoTeaser() {
  return (
    <Section id="entenda-como-trabalho" background="white" divider>
      <Eyebrow>Entenda como trabalho</Eyebrow>
      <SectionTitle>
        Nem toda resposta que um dia protegeu precisa continuar conduzindo sua vida.
      </SectionTitle>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-3 font-display text-2xl font-semibold text-ink">
            Como a análise pode ajudar
          </h3>
          <p className="font-sans text-base leading-relaxed text-ink/75">
            A análise não busca apagar a dor nem oferecer soluções rápidas. Ela cria um espaço para
            que aquilo que hoje se repete possa ser interrogado e novas formas de responder à vida
            possam surgir.
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-display text-2xl font-semibold text-ink">Como funciona</h3>
          <p className="font-sans text-base leading-relaxed text-ink/75">
            Antes de qualquer interpretação, existe uma escuta. Conheça como acontece um processo
            analítico, desde a primeira conversa até a construção de um percurso singular.
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Link to="/como-trabalho" className={brandButtonClass("outline")}>
          Conheça minha forma de trabalhar
        </Link>
      </div>
    </Section>
  );
}
