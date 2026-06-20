import { useState } from "react";
import { Section, SectionTitle } from "./Section";
import { BrandButton } from "./BrandButton";

const posts = [
  {
    title: "O que é capacitismo?",
    excerpt:
      "Capacitismo é a discriminação e o preconceito social contra pessoas com qualquer tipo de deficiência. Um exemplo de postura capacitista é dirigir-se ao acompanhante de uma pessoa com deficiência em vez de dirigir-se diretamente à própria pessoa.",
  },
  {
    title: "O que não dizer para alguém com depressão?",
    excerpt:
      "Minimizar o sofrimento, pedir para olhar pelo lado positivo, estigmatizar a terapia. Depressão é coisa séria e requer tratamento profissional e acolhimento.",
  },
  {
    title: "Você é da geração Merthiolate, nutela ou raiz?",
    excerpt:
      "Em analogia, podemos pensar que como o Merthiolate a análise pode doer, mas ela serve para nos curar das nossas feridas mesmo que ainda nos reste as cicatrizes.",
  },
  {
    title: "Não somos apenas uma classificação do CID!",
    excerpt:
      "O CID é o código internacional de doenças e uma pessoa com depressão não pode ser apenas definida e medicalizada por ele.",
  },
  {
    title: "Setembro amarelo: O que é? Como apoiar?",
    excerpt:
      "Setembro Amarelo é uma campanha brasileira de prevenção ao suicídio, iniciada em 2015 em Brasília.",
  },
  {
    title: "Por que pagamos pela terapia?",
    excerpt:
      "Pagar é abrir mão do seu sintoma, do seu sinto-mal. É dar o que se tem para abrir um lugar de falta.",
  },
  {
    title: "Motivos para investir na terapia",
    excerpt:
      "Ter um espaço de fala livre de julgamento, abrir mão de hábitos que prejudicam sua qualidade de vida, e muito mais.",
  },
  {
    title: "Ser empático é ter consciência da dor do outro.",
    excerpt:
      "Cada sujeito carrega consigo sua história e é a partir dela que se estabelece no mundo.",
  },
  {
    title: "O que é saúde mental?",
    excerpt:
      "Não há apenas uma definição para saúde mental, mas podemos entendê-la como a ausência de disfunções hormonais, um estado de bem-estar.",
  },
  {
    title: "Você conhece a Lenda de Hidra de Lerna?",
    excerpt:
      "Na mitologia, Hidra de Lerna era um monstro com cinco, sete ou cem cabeças, de acordo com a literatura que a escreve.",
  },
];

export function Blog() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? posts : posts.slice(0, 3);

  return (
    <Section id="meu-blog" background="alt" divider>
      <SectionTitle>Meu Blog</SectionTitle>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {visible.map((post) => (
          <article
            key={post.title}
            className="flex flex-col overflow-hidden rounded-md bg-white shadow-sm"
          >
            <div className="aspect-video w-full bg-divider" />
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="font-display text-lg font-bold leading-snug">
                {post.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-brand/80">
                {post.excerpt}
              </p>
              <div className="pt-2">
                <BrandButton type="button">Ler mais</BrandButton>
              </div>
            </div>
          </article>
        ))}
      </div>
      {posts.length > 3 && (
        <div className="mt-10 flex justify-center">
          <BrandButton type="button" onClick={() => setExpanded((v) => !v)}>
            {expanded ? "Ver menos posts" : "Ver mais posts"}
          </BrandButton>
        </div>
      )}
    </Section>
  );
}
