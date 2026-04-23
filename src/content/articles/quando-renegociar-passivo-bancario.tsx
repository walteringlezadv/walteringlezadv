import type { Article } from "@/types/article";

/**
 * Artigo-semente 1 — exercita a hierarquia longa controlada
 * (H2, H3, listas, blockquote) sem introduzir novo sistema tipográfico
 * nem terminologia pública nova.
 */
const article: Article = {
  slug: "quando-renegociar-passivo-bancario",
  title: "Quando renegociar o passivo bancário deixa de ser uma escolha",
  description:
    "Há um momento em que renegociar deixa de ser opção e passa a ser estrutura. Uma leitura sóbria sobre o ponto de virada contratual.",
  excerpt:
    "Há um momento em que renegociar deixa de ser opção e passa a ser estrutura. Uma leitura sóbria sobre o ponto de virada contratual.",
  publishedAt: "2025-03-18",
  author: {
    name: "Walter Inglez",
    role: "Advocacia e Consultoria",
  },
  category: "Passivo Bancário",
  tags: ["renegociação", "contratos", "gestão de passivo"],
  readingTime: 7,
  body: (
    <>
      <p>
        A renegociação de passivo bancário raramente começa pelo número. Começa
        por um sinal — uma cláusula acionada, um vencimento antecipado, uma
        garantia adicional pedida sem aviso. Quando esses sinais aparecem, a
        empresa já está dentro de um momento contratual diferente daquele em
        que o crédito foi originalmente tomado.
      </p>

      <p>
        Esse é o ponto que costuma passar despercebido. Não é a inadimplência
        que muda a relação com o banco; é a leitura que o banco faz do risco
        antes mesmo da inadimplência. E essa leitura se traduz em movimentos
        contratuais concretos.
      </p>

      <h2>O ponto de virada contratual</h2>

      <p>
        Existe um intervalo curto, normalmente ignorado, entre o estresse
        financeiro percebido internamente e a reação formal do credor. É nesse
        intervalo que a renegociação ainda pode ser conduzida em condições de
        equilíbrio. Passado esse ponto, o que se renegocia não é mais a dívida
        — é a postura do credor.
      </p>

      <h3>Sinais objetivos de virada</h3>

      <ul>
        <li>Pedidos sucessivos de reforço de garantia.</li>
        <li>Redução silenciosa de limites rotativos.</li>
        <li>Encurtamento de prazos em renovações operacionais.</li>
        <li>Cláusulas de cross-default sendo invocadas em paralelo.</li>
      </ul>

      <p>
        Cada um desses movimentos, isoladamente, parece administrativo. Em
        conjunto, configuram uma reprecificação de risco que precede qualquer
        notificação formal.
      </p>

      <h2>O que muda quando a leitura é estrutural</h2>

      <p>
        Tratar passivo bancário como tema estrutural — e não como evento
        pontual de tesouraria — muda três coisas simultaneamente: o tempo de
        resposta, a qualidade da informação levada ao banco e a hierarquia
        entre dívida operacional e dívida onerosa.
      </p>

      <blockquote>
        Renegociar bem não é obter desconto. É reordenar o passivo para que a
        operação volte a ter espaço de decisão.
      </blockquote>

      <h3>O que se reordena, na prática</h3>

      <ol>
        <li>Hierarquia entre credores e tipos de garantia.</li>
        <li>Calendário de vencimentos versus geração de caixa real.</li>
        <li>Cláusulas acessórias que travam a operação no longo prazo.</li>
      </ol>

      <h2>Quando deixa de ser escolha</h2>

      <p>
        Renegociar deixa de ser escolha quando o custo de não renegociar passa
        a ser estrutural — quando compromete não apenas o resultado do
        trimestre, mas a capacidade da empresa de tomar decisões nos próximos
        ciclos. A partir desse ponto, cada mês de adiamento estreita o
        conjunto de saídas disponíveis.
      </p>

      <p>
        O papel do trabalho técnico, nesse momento, não é prometer resultado.
        É devolver à empresa a leitura precisa do contrato, do credor e do
        intervalo em que ainda há margem para decidir.
      </p>
    </>
  ),
  seo: {
    title:
      "Quando renegociar o passivo bancário deixa de ser uma escolha — Walter Inglez",
    description:
      "Leitura técnica sobre o ponto de virada contratual entre empresa e banco e o intervalo em que a renegociação ainda pode ser conduzida em equilíbrio.",
  },
};

export default article;
