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
    "w-full rounded-[3px] border border-divider bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-bordo focus:outline-none focus:ring-0";

  return (
    <section id="fale-comigo" className="scroll-mt-20 bg-surface-alt py-16 text-ink md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="mb-3 text-center font-sans text-xs font-semibold uppercase tracking-[0.18em] text-bordo">
          Fale comigo
        </p>
        <h2 className="mb-10 text-center font-display text-3xl font-semibold md:text-4xl">
          O primeiro passo pode ser apenas uma conversa.
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <input required name="nome" placeholder="Nome" className={inputCls} />
            <input required type="email" name="email" placeholder="E-mail" className={inputCls} />
            <input type="tel" name="telefone" placeholder="Telefone" className={inputCls} />
            <textarea
              required
              name="mensagem"
              placeholder="Mensagem"
              rows={5}
              className={inputCls}
            />
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center rounded-[3px] bg-bordo px-6 py-2.5 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {sending ? "Enviando..." : "Enviar"}
            </button>
          </form>

          <div className="space-y-8 font-sans">
            <div>
              <h3 className="mb-3 font-display text-lg font-semibold">Redes Sociais</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/psicologadominiquecarilo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="text-ink/70 transition-colors hover:text-bordo"
                >
                  <Instagram className="size-6" />
                </a>
                <a
                  href="https://wa.me/5521983488124"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="text-ink/70 transition-colors hover:text-bordo"
                >
                  <MessageCircle className="size-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-display text-lg font-semibold">Telefone</h3>
              <a
                href="tel:5521983488124"
                className="inline-flex items-center gap-2 text-ink/75 hover:text-bordo"
              >
                <Phone className="size-4" />
                (21) 98348-8124
              </a>
            </div>

            <div>
              <h3 className="mb-2 font-display text-lg font-semibold">E-mail</h3>
              <a
                href="mailto:contato@dominiquecarilo.com.br"
                className="inline-flex items-center gap-2 text-ink/75 hover:text-bordo"
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
