import { Camera } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "./Section";
import { brandButtonClass } from "./BrandButton";

const formacao = [
  "Graduação em Psicologia, Universidade Veiga de Almeida",
  "Extensão em Saúde Mental do Trabalhador, UFRJ",
  "Pós-graduação em Psicanálise",
];

export function SobreCredenciais() {
  return (
    <Section id="sobre-mim" background="white" divider>
      <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div className="flex aspect-square w-full max-w-xs items-center justify-center justify-self-center rounded-2xl bg-surface-alt md:justify-self-start">
          <Camera className="size-8 text-divider" strokeWidth={1.25} />
        </div>
        <div>
          <Eyebrow>Sobre mim</Eyebrow>
          <h2 className="mb-1 font-display text-2xl font-semibold text-ink md:text-3xl">
            Dominique Carilo
          </h2>
          <p className="mb-4 font-sans text-sm text-ink/60">Psicóloga (CRP) e Psicanalista</p>
          <p className="mb-5 font-sans text-base leading-relaxed text-ink/75">
            Acredito que cada pessoa chega à análise trazendo uma história singular. Meu trabalho é
            oferecer um espaço de escuta ética, onde seja possível investigar aquilo que insiste em
            se repetir.
          </p>
          <ul className="mb-6 space-y-1.5 font-sans text-sm text-ink/70">
            {formacao.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-bordo">·</span>
                {f}
              </li>
            ))}
          </ul>
          <Link to="/percurso" className={brandButtonClass("outline")}>
            Ver formação completa
          </Link>
        </div>
      </div>
    </Section>
  );
}
