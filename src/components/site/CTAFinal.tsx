import { Section } from "./Section";
import { BrandLink } from "./BrandButton";

export function CTAFinal() {
  return (
    <Section id="cta-final" background="ink">
      <div className="mx-auto max-w-xl text-center">
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
