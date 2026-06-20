import { MapPin } from "lucide-react";
import { Section } from "./Section";

export function OndeEstou() {
  return (
    <Section id="onde-estou" background="white" divider>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-full bg-brand text-brand-foreground">
              <MapPin className="size-6" />
            </span>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Onde estou</h2>
          </div>
          <p className="text-base leading-relaxed md:text-[17px]">
            Atendimento online e presencial
            <br />
            Teresópolis/RJ
          </p>
        </div>
        <div className="overflow-hidden rounded-md border border-divider">
          <iframe
            title="Mapa Teresópolis/RJ"
            src="https://www.google.com/maps?q=Teres%C3%B3polis,RJ,Brasil&output=embed"
            loading="lazy"
            className="h-72 w-full md:h-80"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}
