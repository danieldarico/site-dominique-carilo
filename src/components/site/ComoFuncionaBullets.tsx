import { Section, Eyebrow, SectionTitle } from "./Section";
import { Timeline } from "./Timeline";

const items = [
  { title: "Sessões individuais e 100% on-line." },
  { title: "Atendimento para jovens, adultos e idosos." },
  { title: "Encontros realizados por plataforma segura." },
  { title: "Frequência definida de acordo com cada caso." },
  { title: "Sigilo garantido pelo código de ética profissional." },
];

export function ComoFuncionaBullets() {
  return (
    <Section id="como-funciona" background="white">
      <Eyebrow>Como funciona</Eyebrow>
      <SectionTitle>O formato do atendimento</SectionTitle>
      <Timeline items={items} tone="bordo" />
    </Section>
  );
}
