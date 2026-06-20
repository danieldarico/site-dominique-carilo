import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre-mim", label: "Sobre mim" },
  { href: "#meu-blog", label: "Meu Blog" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#fotos", label: "Fotos" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#onde-estou", label: "Onde estou" },
  { href: "#fale-comigo", label: "Fale comigo" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-brand text-brand-foreground shadow-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-semibold tracking-wide">
          Dominique Carilo
        </a>
        <nav className="hidden lg:flex lg:items-center lg:gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-sans text-white/90 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="bg-brand pb-4 lg:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-sans text-base text-white/90 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
