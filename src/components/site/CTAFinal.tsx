import { Section } from "./Section";
import { BrandLink } from "./BrandButton";

export function CTAFinal() {
  return (
    <Section id="cta-final" background="ink">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-display text-2xl font-medium leading-snug text-white md:text-3xl">
          Talvez este não seja o momento de encontrar respostas.
          <br />
          Talvez seja o momento de encontrar um lugar onde suas perguntas possam ser escutadas.
        </p>
        <div className="mt-8">
          <BrandLink as="a" href="#fale-comigo" variant="outline-light">
            Agendar uma primeira conversa
          </BrandLink>
        </div>
      </div>
    </Section>
  );
}
