import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Início" },
  { to: "/como-trabalho", label: "Como Trabalho" },
  { to: "/atendimento", label: "Atendimento" },
  { to: "/percurso", label: "Percurso" },
  { to: "/biblioteca", label: "Biblioteca" },
  { to: "/blog", label: "Blog" },
  { to: "/duvidas", label: "Dúvidas" },
] as const;

export function Footer() {
  return (
    <footer className="bg-petroleo py-14 text-white/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-white">Dominique Carilo</p>
          <p className="mt-1 font-sans text-sm text-white/60">Psicóloga | Psicanalista Lacaniana</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-white/70 hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-10 w-full max-w-6xl px-6">
        <hr className="border-t border-white/15" />
        <p className="mt-6 font-sans text-xs text-white/50">
          © 2026 Dominique Carilo, Psicóloga. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
