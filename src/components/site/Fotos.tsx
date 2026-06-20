import { Section, SectionTitle } from "./Section";

export function Fotos() {
  return (
    <Section id="fotos" background="alt" divider>
      <SectionTitle>Fotos</SectionTitle>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-square w-full rounded-md bg-divider" />
        ))}
      </div>
    </Section>
  );
}
