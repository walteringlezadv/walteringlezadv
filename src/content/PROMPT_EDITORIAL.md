# GUIA EDITORIAL — Blog Walter Inglez Advocacia e Consultoria
# Versão 2.1 — Leitura obrigatória antes de qualquer redação

## IDENTIDADE
- Escritório: Walter Inglez Advocacia e Consultoria
- Especialidade: gestão estratégica de passivos bancários empresariais
- Público-alvo: empresários PJ com dívida bancária acima de R$200 mil, sob pressão de banco, cobrança ou execução, com garantias ou risco patrimonial
- Eixo central: "O maior risco é decidir no escuro sem compreender a operação, as garantias, o grau de executividade e a melhor estratégia entre negociar, defender ou ajuizar."

## CATEGORIAS ACEITAS
CCB | Capital de Giro | Garantias | Renegociação | Execução Bancária | Gestão de Passivos | Contratos Bancários | Patrimônio

## FONTES AUTORIZADAS — ORDEM OBRIGATÓRIA
1. STJ/SCON: https://scon.stj.jus.br/SCON/
2. STF: https://jurisprudencia.stf.jus.br/pages/search
3. CJF: https://www.cjf.jus.br/jurisprudencia/unificada/
4. Teses e Súmulas STJ: https://www.tesesesumulas.com.br
5. Banco Central: https://www.bcb.gov.br
6. Migalhas: https://www.migalhas.com.br
7. Conjur: https://www.conjur.com.br
8. JusBrasil: https://www.jusbrasil.com.br
9. TJCE: https://www.tjce.jus.br
10. LeXML: https://www.lexml.gov.br

Regra absoluta: começar sempre pelo STJ. Avançar para fontes secundárias apenas se não houver precedente relevante nos últimos 90 dias no STJ. Máximo 2 tentativas por fonte antes de avançar para a próxima. Nunca apresentar conteúdo não verificado como fato.

## CRITÉRIOS DE SELEÇÃO DO TEMA — TODOS OBRIGATÓRIOS
Responder às três perguntas antes de redigir:
1. Esse tema afeta diretamente empresas com dívida bancária acima de R$200 mil?
2. Tem impacto em execução, garantia, renegociação ou patrimônio do sócio?
3. Foi publicado nos últimos 90 dias?
Se a resposta for NÃO a qualquer uma das três: descartar e buscar outro tema.

## DUPLA CHECAGEM OBRIGATÓRIA
1. Acessar a URL original da fonte primária
2. Confirmar que o link está ativo e o conteúdo é acessível gratuitamente
3. Confirmar a data de publicação — máximo 90 dias
4. Descartar qualquer link quebrado ou conteúdo pago
Nunca redigir com base em conteúdo não confirmado.
A referência final do artigo deve sempre ser a fonte primária — preferencialmente a notícia oficial do STJ, STF ou CJF com link direto para o portal do tribunal. Portais secundários como Conjur, Migalhas e JusBrasil servem apenas para localizar o tema — nunca como referência citada no artigo.

## TOM DE VOZ
- Sóbrio, técnico, direto, sem promessa de resultado
- Falar com o empresário, não com o advogado
- Preferir: leitura do cenário | posição jurídica | margem de decisão | risco real
- Evitar: combater o banco | seus direitos | garantia de resultado | sensacionalismo | juridiquês

## ESTRUTURA OBRIGATÓRIA DO ARTIGO
Extensão: mínimo 800 palavras, máximo 1.000 palavras
readingTime: até 800 palavras = 4 min | 800 a 1.000 palavras = 5 min

Seção 1 — Abertura: dor real do empresário. Contextualizar o problema sem juridiquês. Mínimo 2 parágrafos.
Seção 2 — Contexto jurídico ou de mercado: o precedente, a norma ou o dado de mercado que origina o artigo. Identificar o processo, o tribunal, a data e a tese fixada.
Seção 3 — O que o empresário precisa entender: tradução prática do tema para quem tem dívida bancária. Mínimo 2 parágrafos.
Seção 4 — Risco de não entender ou agir errado: consequências concretas de ignorar o tema ou agir sem leitura técnica. Mínimo 2 parágrafos.
Seção 5 — Tabela comparativa de impacto prático: OBRIGATÓRIA. Mínimo 4 linhas de dados, 3 colunas. Comparar cenários, situações ou consequências relevantes para o público-alvo.
Seção 6 — Conclusão: orientação estratégica com mensagem final OBRIGATORIAMENTE em negrito dentro de <strong>.
Seção 7 — Referência: nome da fonte + link real e ativo + data de publicação + número do processo ou tema quando aplicável.
Seção 8 — Nota institucional: usar o JSX exato do modelo abaixo, sem alterar nenhuma palavra.

## ARTIGOS DE REFERÊNCIA OBRIGATÓRIA
Comparar o artigo novo com estes dois antes de finalizar. O novo artigo deve ter qualidade equivalente ou superior:

Referência 1: "Confissão de dívida pode acelerar execução contra a empresa"
URL: https://blog.walteringlezadv.com.br/blog/confissao-divida-pode-acelerar-execucao-empresa-abril-2026
Padrão exigido: 3 cenários comparativos | tabela com mínimo 4 linhas | mensagem final memorável em negrito

Referência 2: "Garantias bancárias podem transferir risco ao patrimônio dos sócios"
URL: https://blog.walteringlezadv.com.br/blog/garantias-bancarias-transferem-risco-patrimonio-socios-abril-2026
Padrão exigido: tabela com mínimo 4 linhas | orientação preventiva | conexão clara entre dívida e patrimônio pessoal

## FORMATO DO ARQUIVO .tsx — MODELO EXATO E COMPLETO
Usar exatamente este modelo. Não alterar classNames, estrutura JSX ou ordem dos campos.

```tsx
import type { Article } from "@/types/article";

const article: Article = {
  slug: "[slug-unico-kebab-case-mes-ano]",
  title: "[título direto ao empresário — máx 120 caracteres]",
  description: "[descrição SEO — máx 160 caracteres]",
  excerpt: "[resumo 2 linhas — máx 300 caracteres]",
  publishedAt: "[AAAA-MM-DD]",
  author: {
    name: "Walter Inglez",
    role: "Advocacia e Consultoria",
  },
  category: "[uma das 8 categorias aceitas]",
  tags: ["tag1", "tag2", "tag3", "tag4"],
  readingTime: [4 ou 5 conforme critério acima],
  body: (
    <>
      <p>[parágrafo de abertura — dor real do empresário]</p>
      <p>[segundo parágrafo de abertura]</p>

      <h2>[título da seção 2 — contexto jurídico]</h2>
      <p>[conteúdo — identificar processo, tribunal, data, tese]</p>
      <p>[segundo parágrafo da seção 2]</p>

      <h2>[título da seção 3 — o que o empresário precisa entender]</h2>
      <p>[conteúdo prático]</p>
      <p>[segundo parágrafo da seção 3]</p>

      <h2>[título da seção 4 — risco de agir errado]</h2>
      <p>[consequências concretas]</p>
      <p>[segundo parágrafo da seção 4]</p>

      <div className="my-8 overflow-x-auto rounded-md border border-border/50">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/40 text-foreground">
            <tr>
              <th className="px-4 py-3 font-semibold">[coluna 1]</th>
              <th className="px-4 py-3 font-semibold">[coluna 2]</th>
              <th className="px-4 py-3 font-semibold">[coluna 3]</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50 text-muted-foreground">
            <tr>
              <td className="px-4 py-3">[dado linha 1]</td>
              <td className="px-4 py-3">[dado linha 1]</td>
              <td className="px-4 py-3">[dado linha 1]</td>
            </tr>
            <tr>
              <td className="px-4 py-3">[dado linha 2]</td>
              <td className="px-4 py-3">[dado linha 2]</td>
              <td className="px-4 py-3">[dado linha 2]</td>
            </tr>
            <tr>
              <td className="px-4 py-3">[dado linha 3]</td>
              <td className="px-4 py-3">[dado linha 3]</td>
              <td className="px-4 py-3">[dado linha 3]</td>
            </tr>
            <tr>
              <td className="px-4 py-3">[dado linha 4]</td>
              <td className="px-4 py-3">[dado linha 4]</td>
              <td className="px-4 py-3">[dado linha 4]</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Conclusão</h2>
      <p>[orientação estratégica]</p>
      <p>
        <strong>[mensagem final em negrito — direta, memorável, conectada ao risco real do empresário]</strong>
      </p>

      <h2>Referência</h2>
      <p>
        [Nome da fonte].{" "}
        <a href="[URL completa e verificada]" target="_blank" rel="noopener noreferrer">
          [título do artigo ou decisão]
        </a>
        . Publicado em [data]. [Número do processo ou tema quando aplicável].
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
          contratos, garantias, valores, documentos assinados e estágio
          de cobrança.
        </p>
      </aside>
    </>
  ),
  seo: {
    title: "[título SEO — máx 60 caracteres — Walter Inglez]",
    description: "[descrição SEO — máx 160 caracteres]",
  },
};

export default article;
```

## RESTRIÇÕES ABSOLUTAS
- Nunca prometer resultado
- Nunca criar conteúdo genérico de direito amplo
- Nunca alterar classNames, paleta visual ou estrutura .tsx sem instrução explícita
- Nunca fazer commit com build quebrado
- Nunca usar link quebrado ou conteúdo não verificado como fonte
- Nunca encerrar a tarefa sem confirmar envio do e-mail
