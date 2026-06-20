import { User } from "lucide-react";
import { Section, SectionTitle } from "./Section";

export function Sobre() {
  return (
    <Section id="sobre-mim" background="white" divider>
      <SectionTitle>Sobre mim</SectionTitle>
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
        <div className="shrink-0">
          <div className="grid size-48 place-items-center rounded-full bg-divider/60 md:size-56">
            <User className="size-20 text-brand/40" />
          </div>
        </div>
        <div className="space-y-5 text-base leading-relaxed md:text-[17px]">
          <p>
            Olá, meu nome é Dominique Carilo. Sou Psicóloga pela Universidade Veiga
            de Almeida com extensão em saúde mental do trabalhador pela UFRJ. Pós
            graduada em Psicanálise, Tratamento dos transtornos de ansiedade e
            síndrome do pânico e Psicoterapia em intervenção de crises e prevenção
            de suicídio.
          </p>
          <p>
            Ofereço um espaço de escuta e elaboração para as questões mais adversas
            que nos atravessam e podem ocasionar angústias, medos, sintomas ou
            paralisações frente a vida. Através da fala, que é única a cada
            indivíduo, é aberto um lugar onde é possível a busca pelo
            autoconhecimento e bem estar.
          </p>
          <p>Atendimento online e presencial para adolescentes, adultos e idosos.</p>
        </div>
      </div>
    </Section>
  );
}
