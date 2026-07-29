import { Activity, MessageCircle, HeartHandshake, Users } from "lucide-react";
import { Section, Eyebrow, SectionTitle } from "./Section";

const servicos = [
  { icon: Activity, title: "Ansiedade e síndrome do pânico" },
  { icon: MessageCircle, title: "Escuta clínica lacaniana" },
  { icon: HeartHandshake, title: "Crises e prevenção ao suicídio" },
  { icon: Users, title: "Jovens, adultos e idosos" },
];

export function ServicosCards() {
  return (
    <Section id="especialidades" background="alt" divider>
      <Eyebrow>Especialidades</Eyebrow>
      <SectionTitle>Onde a escuta se aplica</SectionTitle>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {servicos.map(({ icon: Icon, title }) => (
          <div key={title} className="rounded-2xl bg-white p-6">
            <span className="mb-4 grid size-9 place-items-center rounded-full bg-bordo text-white">
              <Icon className="size-4" strokeWidth={1.75} />
            </span>
            <p className="font-sans text-sm font-semibold leading-snug text-ink">{title}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
