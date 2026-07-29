import { Section } from "./Section";
import { BrandLink } from "./BrandButton";
import { TopoPattern } from "./TopoPattern";

export function CTAFinal() {
  return (
    <Section id="cta-final" background="petroleo" className="relative overflow-hidden">
      <TopoPattern className="-left-14 -top-14 size-72" stroke="#ffffff" opacity={0.08} />
      <div className="relative mx-auto max-w-xl text-center">
        <p className="font-display text-2xl font-medium text-white md:text-3xl">
          O primeiro passo pode ser apenas uma conversa.
        </p>
        <div className="mt-7">
          <BrandLink as="a" href="#fale-comigo" variant="outline-light">
            Agendar uma primeira conversa
          </BrandLink>
        </div>
      </div>
    </Section>
  );
}
