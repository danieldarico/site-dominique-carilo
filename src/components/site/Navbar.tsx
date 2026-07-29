import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { brandButtonClass } from "./BrandButton";

const links = [
  { to: "/", label: "Início" },
  { to: "/como-trabalho", label: "Como Trabalho" },
  { to: "/atendimento", label: "Atendimento" },
  { to: "/percurso", label: "Percurso" },
  { to: "/biblioteca", label: "Biblioteca" },
  { to: "/blog", label: "Blog" },
  { to: "/duvidas", label: "Dúvidas" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-divider bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link to="/" className="font-display text-xl font-semibold tracking-wide text-ink">
          Dominique Carilo
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-sans text-sm text-ink/75 transition-colors hover:text-bordo"
              activeProps={{ className: "text-bordo" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link
            to="/"
            hash="fale-comigo"
            className={brandButtonClass("primary", "px-5 py-2 text-xs")}
          >
            Agendar uma primeira conversa
          </Link>
        </div>
        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-divider bg-white pb-4 lg:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 pt-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-sans text-base text-ink/85 hover:text-bordo"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/"
              hash="fale-comigo"
              onClick={() => setOpen(false)}
              className={brandButtonClass("primary", "mt-2 w-full")}
            >
              Agendar uma primeira conversa
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
