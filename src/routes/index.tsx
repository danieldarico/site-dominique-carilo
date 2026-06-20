import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Sobre } from "@/components/site/Sobre";
import { Blog } from "@/components/site/Blog";
import { Especialidades } from "@/components/site/Especialidades";
import { Fotos } from "@/components/site/Fotos";
import { Depoimentos } from "@/components/site/Depoimentos";
import { OndeEstou } from "@/components/site/OndeEstou";
import { FaleComigo } from "@/components/site/FaleComigo";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dominique Carilo — Psicóloga em Teresópolis/RJ" },
      {
        name: "description",
        content:
          "Psicóloga Dominique Carilo. Atendimento online e presencial em Teresópolis/RJ para adolescentes, adultos e idosos.",
      },
      { property: "og:title", content: "Dominique Carilo — Psicóloga" },
      {
        property: "og:description",
        content: "Atendimento online e presencial em Teresópolis/RJ.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-brand">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Sobre />
        <Blog />
        <Especialidades />
        <Fotos />
        <Depoimentos />
        <OndeEstou />
        <FaleComigo />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
