import { Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "./Section";
import { brandButtonClass } from "./BrandButton";

export function MalEstar() {
  return (
    <Section id="metodo" background="alt" divider>
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Meu método</Eyebrow>
        <p className="font-display text-2xl font-medium leading-snug text-ink md:text-[1.7rem]">
          Não investigamos apenas o que aconteceu. Investigamos como sua história continua
          produzindo respostas no presente.
        </p>
        <div className="mt-7">
          <Link to="/como-trabalho" className={brandButtonClass("outline")}>
            Entenda como trabalho
          </Link>
        </div>
      </div>
    </Section>
  );
}
