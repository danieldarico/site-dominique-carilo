export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-brand text-brand-foreground md:min-h-screen"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(0,0,0,0.35), transparent 60%)",
        }}
      />
      <div className="relative z-10 px-6 text-center">
        <h1 className="font-display text-5xl font-bold tracking-wide md:text-7xl">
          Dominique Carilo
        </h1>
        <p className="mt-4 font-sans text-lg text-white/85 md:text-xl">
          Psicóloga | CRP
        </p>
      </div>
    </section>
  );
}
