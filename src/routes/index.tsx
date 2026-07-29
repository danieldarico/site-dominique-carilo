import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { MalEstar } from "@/components/site/MalEstar";
import { ComoTrabalhoTeaser } from "@/components/site/ComoTrabalhoTeaser";
import { ServicosCards } from "@/components/site/ServicosCards";
import { BibliotecaTeaser } from "@/components/site/BibliotecaTeaser";
import { Blog } from "@/components/site/Blog";
import { CTAFinal } from "@/components/site/CTAFinal";
import { FaleComigo } from "@/components/site/FaleComigo";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dominique Carilo | Psicóloga e Psicanalista Online" },
      {
        name: "description",
        content:
          "Psicóloga e psicanalista online, orientação lacaniana. Atendimento para ansiedade, síndrome do pânico e escuta clínica. Agende uma primeira conversa.",
      },
      { property: "og:title", content: "Dominique Carilo | Psicóloga e Psicanalista Online" },
      {
        property: "og:description",
        content:
          "Psicóloga e psicanalista online, orientação lacaniana. Agende uma primeira conversa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <MalEstar />
        <ComoTrabalhoTeaser />
        <ServicosCards />
        <BibliotecaTeaser />
        <Blog />
        <CTAFinal />
        <FaleComigo />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
