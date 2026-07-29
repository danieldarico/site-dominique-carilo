# Dominique's Haven

# Prompt Lovable — Site Dominique Carilo (Psicóloga)

## Contexto

Reconstrua um site de uma página (landing page) para a psicóloga **Dominique Carilo**. O site deve ser simples, elegante e profissional. É uma one-page com navegação por âncoras. Todas as seções ficam na mesma página.

---

## Design System

**Cores:**
- Primária / fundo do hero e footer: `#3D435C`
- Texto sobre fundo escuro: `#ffffff`
- Texto sobre fundo claro: `#3D435C`
- Fundo das seções claras: `#ffffff` ou `#f9f8f6` (alternado para respirar)
- Separadores: `#e0ddd8`

**Fontes (carregar via Google Fonts):**
- `Rubik` — títulos (`

`, `

`, `

`)
- `Karla` — corpo de texto, parágrafos, botões, nav

**Botões:**
- Estilo outline: borda `#3D435C`, texto `#3D435C`, fundo transparente
- Hover: fundo `#3D435C`, texto `#ffffff`
- Border-radius: `4px`
- Padding: `10px 24px`

---

## Estrutura da Página

### 1. NAVBAR

Menu fixo no topo, fundo `#3D435C`, texto branco.

Links (âncoras):
- Sobre mim → `#sobre-mim`
- Meu Blog → `#meu-blog`
- Especialidades → `#especialidades`
- Fotos → `#fotos`
- Depoimentos → `#depoimentos`
- Onde estou → `#onde-estou`
- Fale comigo → `#fale-comigo`

No mobile: hamburguer menu, fundo `#3D435C`.

---

### 2. HERO

Fundo: cor sólida `#3D435C` com leve textura ou gradiente escuro (sem imagem de fundo — imagem não está disponível).

Conteúdo centralizado:
- Logo/nome da psicóloga: **"Dominique Carilo"** em fonte Rubik, tamanho grande, cor branca
- Subtítulo: `Psicóloga | CRP` em Karla, branco, menor

Altura: 100vh no desktop, 60vh no mobile.

---

### 3. SOBRE MIM

ID: `sobre-mim`

Layout em duas colunas (desktop): foto à esquerda (25% da largura, circular), texto à direita.

**Título da seção:** `Sobre mim` (Rubik, bold, centralizado acima das colunas)

**Foto:** placeholder circular (a cliente vai substituir depois — use um avatar genérico ou `bg-gray-200` com ícone de pessoa)

**Texto (Karla, tamanho médio):**

> Olá, meu nome é Dominique Carilo. Sou Psicóloga pela Universidade Veiga de Almeida com extensão em saúde mental do trabalhador pela UFRJ. Pós graduada em Psicanálise, Tratamento dos transtornos de ansiedade e síndrome do pânico e Psicoterapia em intervenção de crises e prevenção de suicídio.

> Ofereço um espaço de escuta e elaboração para as questões mais adversas que nos atravessam e podem ocasionar angústias, medos, sintomas ou paralisações frente a vida. Através da fala, que é única a cada indivíduo, é aberto um lugar onde é possível a busca pelo autoconhecimento e bem estar.

> Atendimento online e presencial para adolescentes, adultos e idosos.

No mobile: foto em cima, centralizada, texto embaixo.

Separador `

` ao final da seção.

---

### 4. MEU BLOG

ID: `meu-blog`

**Título da seção:** `Meu Blog` (Rubik, bold, centralizado)

Cards em grid de 3 colunas (desktop), 1 coluna (mobile). Cada card tem:
- Imagem placeholder (proporção 16:9, fundo `#e0ddd8`)
- Título do post (Rubik, bold)
- Trecho (Karla, 2-3 linhas)
- Botão `Ler mais` (outline)

**Posts para exibir:**

1. **O que é capacitismo?**
   Trecho: Capacitismo é a discriminação e o preconceito social contra pessoas com qualquer tipo de deficiência. Um exemplo de postura capacitista é dirigir-se ao acompanhante de uma pessoa com deficiência em vez de dirigir-se diretamente à própria pessoa.

2. **O que não dizer para alguém com depressão?**
   Trecho: Minimizar o sofrimento, pedir para olhar pelo lado positivo, estigmatizar a terapia. Depressão é coisa séria e requer tratamento profissional e acolhimento.

3. **Você é da geração Merthiolate® nutela ou raiz?**
   Trecho: Em analogia, podemos pensar que como o Merthiolate a análise pode doer, mas ela serve para nos curar das nossas feridas mesmo que ainda nos reste as cicatrizes.

4. **Não somos apenas uma classificação do CID!**
   Trecho: O CID é o código internacional de doenças e uma pessoa com depressão não pode ser apenas definida e medicalizada por ele.

5. **Setembro amarelo: O que é? Como apoiar?**
   Trecho: Setembro Amarelo é uma campanha brasileira de prevenção ao suicídio, iniciada em 2015 em Brasília.

6. **Por que pagamos pela terapia?**
   Trecho: Pagar é abrir mão do seu sintoma, do seu sinto-mal. É dar o que se tem para abrir um lugar de falta.

7. **Motivos para investir na terapia**
   Trecho: Ter um espaço de fala livre de julgamento, abrir mão de hábitos que prejudicam sua qualidade de vida, e muito mais.

8. **Ser empático é ter consciência da dor do outro.**
   Trecho: Cada sujeito carrega consigo sua história e é a partir dela que se estabelece no mundo.

9. **O que é saúde mental?**
   Trecho: Não há apenas uma definição para saúde mental, mas podemos entendê-la como a ausência de disfunções hormonais, um estado de bem-estar.

10. **Você conhece a Lenda de Hidra de Lerna?**
    Trecho: Na mitologia, Hidra de Lerna era um monstro com cinco, sete ou cem cabeças, de acordo com a literatura que a escreve.

Exibir apenas 3 cards por vez com botão `Ver mais posts` para expandir os demais.

Separador `

` ao final da seção.

---

### 5. ESPECIALIDADES

ID: `especialidades`

**Título da seção:** `Especialidades` (Rubik, bold, centralizado)

Lista de itens em texto corrido (Karla, tamanho médio):

- Uma Psicanalista em formação continuada.
- Pós graduada em Psicanálise.
- Pós graduada em Tratamento dos transtornos de ansiedade e síndrome do pânico.
- Pós graduada em Psicoterapia em intervenção de crises e prevenção de suicídio.
- Extensão em saúde mental do trabalhador pela UFRJ.

Exibir como lista com marcadores simples ou como cards simples com ícone de checkmark.

Separador `

` ao final da seção.

---

### 6. FOTOS

ID: `fotos`

**Título da seção:** `Fotos` (Rubik, bold, centralizado)

Grid de 3 colunas com placeholders (a cliente vai substituir pelas fotos reais). Usar retângulos com fundo `#e0ddd8` ou cinza claro, proporcão quadrada. Mínimo 6 placeholders.

Separador `

` ao final da seção.

---

### 7. DEPOIMENTOS

ID: `depoimentos`

**Título da seção:** `Depoimentos` (Rubik, bold, centralizado)

Exibir os depoimentos em cards ou carrossel (3 por vez no desktop, 1 no mobile):

1. "Depois de cada sessão me sinto mais conectada comigo através do auto conhecimento após as reflexões que a Dominique propõe. Excelente profissional."

2. "Ótima profissional, me ajudou muito!"

3. "Profissional incrível com uma habilidade brilhante de escutar. Recomendo. Sua dedicação ao paciente e a psicanálise não tem limites."

4. "Profissional excelente sempre disposta a escutar e abrir portas para que eu seja a melhor versão de mim mesmo."

Cada card: aspas decorativas, texto do depoimento, estrelas (5 estrelas preenchidas em dourado ou cor de destaque).

Abaixo dos cards, dois botões lado a lado:
- `Ver depoimentos` (outline, abre link ou modal)
- `Dar depoimento` (outline, abre link ou modal)

Separador `

` ao final da seção.

---

### 8. ONDE ESTOU

ID: `onde-estou`

Layout em duas colunas (desktop):

**Coluna esquerda:**
Ícone de localização (pin) + título `Onde estou` + texto:
> Atendimento online e presencial
> Teresópolis/RJ

**Coluna direita:**
Embed do Google Maps com Teresópolis/RJ (usar iframe padrão do Google Maps apontando para "Teresópolis, RJ, Brasil").

```html

```

Separador `

` ao final da seção.

---

### 9. FALE COMIGO

ID: `fale-comigo`

Fundo: `#3D435C`
Texto: `#ffffff`

**Título:** `Fale comigo` (Rubik, bold, branco, centralizado)

Layout em duas colunas (desktop):

**Coluna esquerda — Formulário de contato:**
Campos:
- Nome (input texto)
- E-mail (input email)
- Telefone (input tel)
- Mensagem (textarea)
- Botão `Enviar` (fundo branco, texto `#3D435C`)

**Coluna direita — Informações:**

**Redes Sociais** (Rubik, bold, branco)
Ícones sociais brancos (tamanho grande):
- Instagram: https://www.instagram.com/psicologadominiquecarilo
- WhatsApp: https://wa.me/5521983488124

**Telefone** (Rubik, bold, branco)
(21) 98348-8124 (link `tel:5521983488124`)

**E-mail** (Rubik, bold, branco)
contato@dominiquecarilo.com.br (link `mailto:contato@dominiquecarilo.com.br`)

---

### 10. FOOTER

Fundo: `#3D435C`
Texto branco, centralizado.

Conteúdo:
> © 2024 Dominique Carilo — Psicóloga | Todos os direitos reservados

---

## Regras Gerais de Implementação

1. **Single page app** — tudo em uma página, navegação por âncoras com scroll suave (`scroll-behavior: smooth`).
2. **Responsivo** — mobile-first. Menu hamburguer no mobile.
3. **Sem imagens reais** — usar placeholders onde há fotos (a cliente vai substituir).
4. **Formulário** — pode ser estático (sem backend). Mostrar um alerta de sucesso ao clicar em "Enviar" (não precisa enviar de verdade).
5. **Tipografia:** Importar `Rubik` e `Karla` via Google Fonts. Rubik apenas em títulos. Karla em tudo mais.
6. **Espaçamento:** seções com padding generoso (`80px` desktop, `48px` mobile). Seções alternando fundo branco e `#f9f8f6` para criar separação visual (exceto hero, depoimentos e fale comigo que têm fundo próprio).
7. **Travessão:** não usar em nenhum texto do site.
8. **Ícones:** usar Lucide Icons ou similar para os ícones sociais e localização.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://site-dominique-carilo.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a0fd8b67-a4ce-41bd-a762-8a291d953ab7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
