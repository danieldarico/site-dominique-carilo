import { useState, type FormEvent } from "react";
import { Instagram, MessageCircle, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

export function FaleComigo() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("Mensagem enviada! Em breve retornarei o contato.");
      (e.target as HTMLFormElement).reset();
      setSending(false);
    }, 400);
  }

  const inputCls =
    "w-full rounded-[4px] border border-white/30 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-0";

  return (
    <section id="fale-comigo" className="scroll-mt-20 bg-brand py-16 text-brand-foreground md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="mb-10 text-center font-display text-3xl font-bold md:text-4xl">
          Fale comigo
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <input required name="nome" placeholder="Nome" className={inputCls} />
            <input required type="email" name="email" placeholder="E-mail" className={inputCls} />
            <input type="tel" name="telefone" placeholder="Telefone" className={inputCls} />
            <textarea required name="mensagem" placeholder="Mensagem" rows={5} className={inputCls} />
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center rounded-[4px] bg-white px-6 py-2.5 font-sans text-sm font-semibold text-brand transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {sending ? "Enviando..." : "Enviar"}
            </button>
          </form>

          <div className="space-y-8 font-sans">
            <div>
              <h3 className="mb-3 font-display text-lg font-bold">Redes Sociais</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/psicologadominiquecarilo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="transition-opacity hover:opacity-80"
                >
                  <Instagram className="size-7" />
                </a>
                <a
                  href="https://wa.me/5521983488124"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="transition-opacity hover:opacity-80"
                >
                  <MessageCircle className="size-7" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-display text-lg font-bold">Telefone</h3>
              <a
                href="tel:5521983488124"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white"
              >
                <Phone className="size-4" />
                (21) 98348-8124
              </a>
            </div>

            <div>
              <h3 className="mb-2 font-display text-lg font-bold">E-mail</h3>
              <a
                href="mailto:contato@dominiquecarilo.com.br"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white"
              >
                <Mail className="size-4" />
                contato@dominiquecarilo.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
