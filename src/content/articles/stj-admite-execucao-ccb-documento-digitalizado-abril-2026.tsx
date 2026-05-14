import type { Article } from "@/types/article";

const article: Article = {
  slug: "stj-admite-execucao-ccb-documento-digitalizado-abril-2026",
  title: "STJ admite execução de CCB com documento digitalizado",
  description:
    "A 4ª Turma do STJ afastou a exigência automática do original físico da CCB em execução. A decisão exige defesas técnicas com alegações concretas sobre autenticidade e exigibilidade do título.",
  excerpt:
    "A 4ª Turma do STJ afastou a exigência automática do original físico da CCB em execução. A decisão aumenta a importância de defesas técnicas, com alegações concretas sobre autenticidade, circulação ou exigibilidade do título.",
  publishedAt: "2026-04-30",
  author: {
    name: "Walter Inglez",
    role: "Advocacia e Consultoria",
  },
  category: "CCB",
  tags: ["CCB", "execução bancária", "documento digitalizado", "defesa técnica"],
  readingTime: 4,
  body: (
    <>
      <p>
        A 4ª Turma do Superior Tribunal de Justiça manteve uma execução de
        dívida e afastou a tese de que a petição inicial seria inepta apenas
        porque o banco apresentou cópia digitalizada da cédula de crédito
        bancário, e não o título físico original. O relator ressaltou que a
        jurisprudência formada em ambiente de processos físicos precisa ser
        lida à luz da digitalização dos autos, especialmente diante do artigo
        425 do CPC e da Lei 11.419/2006, que conferem eficácia aos documentos
        digitalizados observados os requisitos legais.
      </p>

      <p>
        Para empresas executadas por bancos, o precedente tem impacto direto.
        A defesa baseada exclusivamente na ausência do original físico tende a
        perder força quando não vier acompanhada de alegação concreta de
        adulteração, endosso irregular, circulação do crédito, duplicidade de
        cobrança ou risco à certeza, liquidez e exigibilidade do título. O
        debate deixa de ser meramente formal e passa a exigir demonstração
        específica de prejuízo.
      </p>

      <div className="my-8 overflow-x-auto rounded-md border border-border/50">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/40 text-foreground">
            <tr>
              <th className="px-4 py-3 font-semibold">Antes da decisão</th>
              <th className="px-4 py-3 font-semibold">Leitura prática após a decisão</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50 text-muted-foreground">
            <tr>
              <td className="px-4 py-3">Contestação genérica da cópia da CCB</td>
              <td className="px-4 py-3">Menor chance de êxito se não houver fato concreto.</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Exigência automática do original</td>
              <td className="px-4 py-3">O juiz pode exigir o original caso haja necessidade fundamentada.</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Defesa centrada no documento físico</td>
              <td className="px-4 py-3">Defesa deve examinar saldo, encargos, assinatura, cadeia de crédito e garantias.</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Discussão formal</td>
              <td className="px-4 py-3">Discussão probatória e financeira mais sofisticada.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Isso não significa que o banco esteja livre de comprovar a regularidade
        da cobrança. A instituição financeira continua responsável por
        apresentar título apto, demonstrativo do débito, evolução do saldo e
        documentação coerente com a operação. A diferença é que a empresa
        executada deve abandonar defesas padronizadas e construir uma resposta
        baseada nos pontos materiais da operação: origem do crédito, composição
        dos encargos, eventual novação, garantias associadas, vencimento
        antecipado e compatibilidade do demonstrativo com o contrato.
      </p>

      <p>
        O empresário que recebe uma execução fundada em CCB deve evitar dois
        erros. O primeiro é ignorar a ação porque acredita que a ausência do
        original resolverá o caso. O segundo é discutir apenas a forma do
        documento, sem investigar se o saldo executado é tecnicamente
        defensável. A execução bancária costuma avançar rapidamente para
        bloqueios, penhoras e constrições de recebíveis. Por isso, a resposta
        precisa ser imediata e organizada.
      </p>

      <p>
        <strong>
          A defesa da empresa deve ser documental, contábil e jurídica ao mesmo
          tempo. Se houver suspeita de adulteração, circulação indevida da CCB
          ou cobrança duplicada, isso precisa ser demonstrado de modo específico.
          O formalismo isolado tende a ter pouco efeito; a defesa técnica, bem
          instruída, continua essencial.
        </strong>
      </p>

      <h2>Referência</h2>

      <p>
        Migalhas.{" "}
        <a
          href="https://www.migalhas.com.br/quentes/452877/stj-dispensa-original-de-cedula-de-credito-bancario-em-execucao"
          target="_blank"
          rel="noopener noreferrer"
        >
          STJ dispensa original de cédula de crédito bancário em execução
        </a>
        .
      </p>

      <aside
        role="note"
        aria-label="Nota institucional"
        className="mt-12 rounded-md border border-border/50 bg-muted/30 p-5 md:p-6 text-sm leading-relaxed text-muted-foreground"
      >
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground/80">
          Nota institucional
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Este conteúdo tem finalidade exclusivamente informativa e não
          substitui a análise individual do caso concreto. Situações
          envolvendo passivo bancário empresarial exigem avaliação dos
          contratos, garantias, valores, documentos assinados e estágio de
          cobrança.
        </p>
      </aside>
    </>
  ),
  seo: {
    title:
      "STJ admite execução de CCB com documento digitalizado — Walter Inglez",
    description:
      "A 4ª Turma do STJ afastou a exigência automática do original físico da CCB. Defesas técnicas precisam ir além do formalismo e examinar saldo, encargos e garantias.",
  },
};

export default article;
