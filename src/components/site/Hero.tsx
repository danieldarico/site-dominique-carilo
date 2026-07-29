import { Camera } from "lucide-react";
import { BrandLink } from "./BrandButton";

export function Hero() {
  return (
    <section id="top" className="scroll-mt-20 bg-white pb-16 pt-14 md:pb-28 md:pt-20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-bordo">
            Dominique Carilo · Psicóloga | Psicanalista
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.15] text-ink md:text-[2.75rem]">
            Há sofrimentos que não permanecem porque falta força de vontade. Permanecem porque
            seguimos respondendo à vida da única maneira que um dia aprendemos.
          </h1>
          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-ink/70 md:text-lg">
            A análise é um espaço de escuta para investigar aquilo que insiste em se repetir e
            construir outras possibilidades de existir.
          </p>
          <div className="mt-8">
            <BrandLink as="a" href="#fale-comigo" variant="primary">
              Agendar uma primeira conversa
            </BrandLink>
          </div>
        </div>
        <div
          aria-hidden
          className="flex aspect-[4/5] w-full items-center justify-center rounded-sm bg-surface-alt"
        >
          <Camera className="size-10 text-divider" strokeWidth={1.25} />
        </div>
      </div>
    </section>
  );
}
