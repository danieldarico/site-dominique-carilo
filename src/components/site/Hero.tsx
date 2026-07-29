import { Camera } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BrandLink } from "./BrandButton";

export function Hero() {
  return (
    <section id="top" className="scroll-mt-20 bg-white pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-bordo">
            Psicóloga · Psicanalista Lacaniana · Online
          </p>
          <h1 className="font-display text-3xl font-semibold leading-[1.2] text-ink md:text-[2.25rem]">
            Um espaço de escuta para ansiedade, crises e os padrões que insistem em se repetir.
          </h1>
          <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-ink/65">
            <span className="font-semibold text-ink">Psicanálise de orientação lacaniana.</span>{" "}
            Atendimento <span className="font-semibold text-ink">100% online</span> para jovens,
            adultos e idosos.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <BrandLink as="a" href="#fale-comigo" variant="primary">
              Agendar uma primeira conversa
            </BrandLink>
            <Link
              to="/"
              hash="especialidades"
              className="font-sans text-sm text-bordo underline underline-offset-4 hover:text-ink"
            >
              Ver especialidades
            </Link>
          </div>
        </div>
        <div className="relative">
          <svg
            aria-hidden
            viewBox="0 0 200 200"
            className="pointer-events-none absolute -inset-4 z-0 opacity-70"
          >
            <circle
              cx="100"
              cy="100"
              r="92"
              fill="none"
              stroke="#2F4F4F"
              strokeOpacity="0.15"
              strokeWidth="1"
            />
            <path
              d="M30,100 a70,70 0 1,0 140,0 a45,45 0 1,1 -90,0"
              fill="none"
              stroke="#971D1D"
              strokeOpacity="0.18"
              strokeWidth="1"
            />
          </svg>
          <div className="relative flex aspect-[4/5] w-full items-center justify-center rounded-2xl bg-surface-alt">
            <Camera className="size-10 text-divider" strokeWidth={1.25} />
          </div>
          <div className="relative -mt-6 mx-4 rounded-lg bg-petroleo px-4 py-3 font-sans text-xs italic leading-relaxed text-white/90">
            “Há sofrimentos que permanecem porque seguimos respondendo à vida da única forma que um
            dia aprendemos.”
          </div>
        </div>
      </div>
    </section>
  );
}
