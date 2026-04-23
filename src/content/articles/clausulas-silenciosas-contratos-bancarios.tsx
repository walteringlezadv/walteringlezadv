import type { Article } from "@/types/article";

/**
 * Artigo-semente 2 — texto editorial mais curto, exercita prose
 * com parágrafos longos e uma única lista. Mantém a sobriedade
 * institucional e não introduz terminologia pública nova.
 */
const article: Article = {
  slug: "clausulas-silenciosas-contratos-bancarios",
  title: "Cláusulas silenciosas: o que pesa antes de qualquer renegociação",
  description:
    "Antes do número, o contrato. Uma leitura sobre as cláusulas que mudam o equilíbrio da relação bancária sem aparecer na conversa do dia a dia.",
  excerpt:
    "Antes do número, o contrato. Uma leitura sobre as cláusulas que mudam o equilíbrio da relação bancária sem aparecer na conversa do dia a dia.",
  publishedAt: "2025-04-02",
  author: {
    name: "Walter Inglez",
    role: "Advocacia e Consultoria",
  },
  category: "Contratos",
  tags: ["cláusulas", "garantias", "leitura contratual"],
  readingTime: 5,
  body: (
    <>
      <p>
        Em quase todo contrato bancário existem cláusulas que não são
        discutidas no momento da contratação e quase nunca são lidas depois.
        São cláusulas silenciosas — operam no segundo plano, mas determinam o
        que acontece quando a relação muda de tom.
      </p>

      <h2>O que se assina sem ver</h2>

      <p>
        A maior parte do desequilíbrio que aparece em uma renegociação
        avançada já estava escrita desde o início. Não como armadilha, mas
        como padrão. O banco se protege em camadas, e essas camadas convivem
        em silêncio enquanto a operação corre normal.
      </p>

      <ul>
        <li>Vencimento antecipado por descumprimento cruzado.</li>
        <li>Reforço automático de garantia diante de variação de indicadores.</li>
        <li>Compensação entre contas e contratos do mesmo grupo econômico.</li>
        <li>Eleição de foro e rito específicos para execução.</li>
      </ul>

      <h2>Por que a leitura precisa vir antes</h2>

      <p>
        Renegociar sem mapear essas cláusulas é negociar no escuro. O número
        oferecido pelo banco — taxa, prazo, carência — só faz sentido depois
        de saber o que está acionável no contrato vigente. Sem essa leitura,
        a empresa aceita condições aparentemente melhores que, na prática,
        apenas reorganizam o mesmo risco.
      </p>

      <blockquote>
        O contrato bancário é lido duas vezes: uma quando se assina, outra
        quando se precisa. Quase sempre, é a segunda leitura que define o
        resultado.
      </blockquote>

      <p>
        O trabalho técnico aqui é simples no enunciado e exigente na execução:
        devolver à empresa a clareza sobre o contrato que ela já tem, antes de
        qualquer movimento de renegociação.
      </p>
    </>
  ),
  seo: {
    title:
      "Cláusulas silenciosas em contratos bancários — Walter Inglez",
    description:
      "Leitura técnica sobre as cláusulas que operam em segundo plano nos contratos bancários e definem o resultado de uma renegociação.",
  },
};

export default article;
