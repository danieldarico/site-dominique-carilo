# Site Dominique Carilo — Landing Page

One-page TanStack Start site on `/` com navegação por âncoras, paleta `#3D435C`/branco/`#f9f8f6`, fontes Rubik (títulos) e Karla (corpo).

## Arquivos a criar/editar

- `src/routes/__root.tsx` — adicionar `<link>` Google Fonts (Rubik + Karla) e atualizar meta tags (title "Dominique Carilo — Psicóloga", description, OG).
- `src/styles.css` — registrar tokens em `@theme` (`--color-brand: #3D435C`, `--color-surface-alt: #f9f8f6`, `--color-divider: #e0ddd8`, `--font-display: Rubik`, `--font-sans: Karla`); `html { scroll-behavior: smooth }`; `body { font-family: var(--font-sans) }`.
- `src/routes/index.tsx` — substituir placeholder pela landing page; renderiza componentes de seção em ordem.
- `src/components/site/Navbar.tsx` — navbar fixa, fundo brand, links âncora, menu hamburguer mobile (estado local + Lucide `Menu`/`X`).
- `src/components/site/Hero.tsx` — fundo brand com gradiente sutil, "Dominique Carilo" (Rubik) + "Psicóloga | CRP" (Karla), 100vh/60vh.
- `src/components/site/Sobre.tsx` — 2 colunas, avatar circular placeholder (`Lucide User` em círculo cinza), 3 parágrafos.
- `src/components/site/Blog.tsx` — grid 3 colunas, 10 posts em array, mostra 3 inicialmente, botão "Ver mais posts" expande. Cada card com placeholder 16:9, título, trecho, botão outline "Ler mais" (sem destino — `#`).
- `src/components/site/Especialidades.tsx` — 5 itens com ícone `Check` (Lucide).
- `src/components/site/Fotos.tsx` — grid 3 colunas, 6 placeholders quadrados `#e0ddd8`.
- `src/components/site/Depoimentos.tsx` — 4 cards (grid responsivo), aspas, texto, 5 estrelas douradas (`Lucide Star`), 2 botões outline.
- `src/components/site/OndeEstou.tsx` — 2 colunas: ícone `MapPin` + texto / iframe Google Maps Teresópolis.
- `src/components/site/FaleComigo.tsx` — fundo brand; form (Nome/Email/Telefone/Mensagem) com `onSubmit` que faz `e.preventDefault()` + toast/alert de sucesso; coluna direita com ícones Instagram/WhatsApp (Lucide), telefone, email.
- `src/components/site/Footer.tsx` — copyright centralizado em fundo brand.
- `src/components/site/Section.tsx` (helper) — wrapper com `id`, padding 80px/48px, fundo alternável, separador inferior opcional.
- `src/components/site/BrandButton.tsx` (helper) — botão outline reutilizável (variante dark/light).

## Implementação — pontos importantes

- Tokens via `@theme` em `src/styles.css` para gerar `bg-brand`, `text-brand`, `bg-surface-alt`, `border-divider`, `font-display`, `font-sans`. Sem cores hardcoded nos componentes.
- Fontes via `<link>` no `__root.tsx` head (preconnect + stylesheet Google Fonts) — nunca `@import` URL no CSS.
- Form sem backend: `useState` simples + `toast` do `sonner` (já disponível) ou `alert()` nativo na submissão.
- Iframe Google Maps usa src público padrão para Teresópolis/RJ (`https://www.google.com/maps?q=Teresópolis,RJ&output=embed`), `loading="lazy"`, sem API key.
- Sem travessões em nenhum texto (usar vírgula ou "|").
- Mobile-first com Tailwind `md:`/`lg:`; navbar mobile colapsa em painel sob o header.
- Alternância de fundo: Sobre (branco), Blog (`surface-alt`), Especialidades (branco), Fotos (`surface-alt`), Onde estou (branco). Hero/Depoimentos/Fale comigo/Footer com fundos próprios conforme spec (depoimentos fica em branco/surface — uso `surface-alt` para respirar).
- SEO: title, description, og:title, og:description, og:type=website, twitter:card, lang="pt-BR" no `<html>`.

## Fora do escopo

- Backend real para o formulário.
- Upload de fotos reais (placeholders ficam).
- Páginas separadas para posts do blog (botão "Ler mais" é decorativo).
