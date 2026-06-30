# PROMPT EDITORIAL — Blog Walter Inglez Advocacia e Consultoria

Documento único de orientação para geração de artigos do blog
(blog.walteringlezadv.com.br). Repositório: walteringlezadv/walteringlezadv (Astro).

**Versão:** 7.1
**Vigência:** 30/06/2026
**Substitui:** v7.0 (21/06/2026)
**Aprovação:** Walter Inglez

---

## 1 — ESCOPO E GOVERNANÇA

### O que este documento cobre

Padrão editorial completo para produção de artigos do blog de passivos bancários: tom, formato, estrutura do arquivo markdown, regras de SEO, checklist de qualidade, proibições e gestão de riscos editoriais.

### O que este documento NÃO cobre

A publicação do artigo (commit, merge, deploy) é disciplinada pelo POP DE PUBLICAÇÃO, documento separado. Este prompt termina na entrega do arquivo `.md` revisado e aprovado por Walter.

### Documentos vinculados

| Documento | Localização | Função |
|---|---|---|
| POP DE PUBLICAÇÃO | docs/POP_PUBLICACAO.md | Fluxo de commit, merge, deploy e atualização do registro |
| PAUTA_SEMANAL.md | docs/PAUTA_SEMANAL.md (branch main) | Temas da semana, produzidos pelo Radar (Manus) |
| REGISTRO_EDITORIAL.md | docs/REGISTRO_EDITORIAL.md (branch main) | Fonte única de verdade dos artigos publicados |
| PROMPT_EDITORIAL.md | docs/PROMPT_EDITORIAL.md (branch main) | Este documento |

### Regra de alteração

Qualquer alteração neste documento requer aprovação de Walter. Versões anteriores devem ser arquivadas com data no nome do arquivo. O número de versão é incremental.

---

## 2 — RESPONSABILIDADES

| Papel | Quem | Atribuição |
|---|---|---|
| Radar (pesquisa de temas) | Manus (terça-feira) | Pesquisa oportunidades, produz PAUTA_SEMANAL.md com 3 slots (temas blog + tabela Instagram) |
| Seleção do tema | Walter | Escolhe o slot da PAUTA_SEMANAL a ser redigido |
| Redação do artigo | Claude (projeto Blog Passivos) | Redige conforme este prompt, entrega .md para revisão |
| Revisão técnica | Walter | Valida conteúdo jurídico, precisão de dados, aderência editorial |
| Revisão de qualidade | Claude (projeto Blog Passivos) | Aplica checklist de qualidade e SEO antes da entrega |
| Publicação | Walter | Commit, merge e deploy conforme POP DE PUBLICAÇÃO |
| Registro | Claude (projeto Blog Passivos) + Walter | Claude prepara a linha do REGISTRO_EDITORIAL.md; Walter commita no repo |

**Regra de ouro:** nenhum artigo é publicado sem revisão técnica de Walter. Claude não tem autoridade para publicar.

---

## 3 — TOM E VOZ

- Sóbrio, técnico, direto.
- SEM juridiquês ("hodiernamente", "mister se faz", "consoante").
- SEM promessa ("garantimos", "você vai recuperar").
- SEM urgência artificial ("últimas vagas").
- O advogado é o estrategista. O cliente é o protagonista.
- Avatar: empresário PJ com dívida bancária relevante (acima de R$200 mil), garantias envolvidas ou risco de execução.
- Eixo estratégico: Negociar × Defender × Ajuizar.

---

## 4 — FLUXO DE PRODUÇÃO

### PASSO 1 — RECEBER O TEMA

O tema vem da PAUTA_SEMANAL.md, selecionado por Walter. O slot contém: tema, dispositivo legal central, ângulo, categoria, slug, fontes e briefing.

Claude NÃO escolhe tema. Se Walter não indicar o slot, perguntar.

Antes de redigir, Claude deve:
1. Ler o REGISTRO_EDITORIAL.md para confirmar que o slug não existe.
2. Confirmar que a categoria não repete as duas publicações mais recentes.
3. Se houver conflito, alertar Walter antes de prosseguir.

### PASSO 2 — PESQUISA E VERIFICAÇÃO

**Regra Zero:** nenhum dado numérico sem verificação em fonte primária (BCB API, IBGE, Planalto, portais de jurisprudência). Dado da pauta não confirmado → alertar Walter, não redigir.

Fontes do BCB: https://api.bcb.gov.br/dados/serie/bcdata.sgs.[ID]/dados/ultimos/10?formato=json
Defasagem típica BCB/IBGE: 45-60 dias.

**Verificação jurídica obrigatória:** antes de redigir, Claude deve localizar e ler o texto normativo primário (lei, resolução, súmula) que disciplina o instituto tratado no artigo. A verificação consiste em:
1. Identificar a norma-base do instituto (ex: Resolução CMN nº 5.057/2022 para portabilidade de crédito).
2. Pesquisar e ler os dispositivos específicos que regulam a mecânica (constituição, extinção, efeitos sobre garantias, prazos).
3. Registrar os artigos consultados no output de verificação.
4. Somente após essa leitura, redigir as consequências jurídicas no artigo.

NÃO presumir funcionamento com base em institutos análogos. NÃO usar fontes secundárias (blogs, artigos de terceiros) como substituto da norma. Fontes secundárias servem para contexto, nunca para fundamentação.

Exemplo do que evitar: portabilidade de crédito opera por liquidação e reconstituição, não por cessão contratual — confundir os dois produz erro em cascata sobre garantias, aval e coobrigações.

**Verificação de precedente jurisprudencial — regra dos três pontos:**

Sempre que um precedente (acórdão, REsp, AgInt, AREsp, Tema repetitivo, Súmula) for mencionado — seja por Walter, por revisor externo (ChatGPT, Perplexity, outras IAs), por fonte secundária ou por sugestão própria de Claude — a inclusão no artigo ou nas Referências exige verificação prévia em fonte oficial, nesta ordem:

1. **EXISTÊNCIA** — o precedente existe de fato? Confirmar em fonte oficial (portal do STJ, LexML, documento integral do acórdão). Modelos de linguagem alucinam números de processo com frequência; números plausíveis e formatação correta não comprovam existência.

2. **VIGÊNCIA** — o precedente está vigente? Súmulas podem ter sido canceladas ou superadas; teses podem ter sido revistas em julgamento posterior; acórdãos individuais podem ter sido objeto de embargos infringentes ou ter perdido força por overruling.

3. **PERTINÊNCIA** — o que o acórdão efetivamente diz sustenta o que está sendo afirmado? Ler a ementa e o trecho relevante do voto. Citações de segunda mão (blog jurídico, IA, manual de doutrina) podem distorcer o conteúdo real do julgado.

**Rejeitar a inclusão é correto enquanto a verificação não for feita.** Uma vez verificados os três pontos, a inclusão deixa de ser opcional e passa a ser exigida quando o precedente sustenta diretamente a tese do artigo.

Aplicável também à revisão externa: rejeitar provisoriamente "por princípio" (porque o precedente veio de fonte não verificada) está correto na primeira rodada; quando o texto integral do acórdão é trazido para verificação, a posição deve ser revista.

Regras de atribuição:
- Pesquisas amostrais: atribuir às instituições, NUNCA ao órgão emissor.
  - CORRETO: "As instituições financeiras consultadas avaliaram que..."
  - ERRADO: "O Banco Central concluiu que..."
- Citar a publicação específica:
  - CORRETO: "Pesquisa Trimestral de Condições de Crédito — março de 2026"
  - ERRADO: "Banco Central — Publicações"

### PASSO 3 — KEYWORD STRATEGY

Antes de redigir, definir:
- 1 KEYWORD PRINCIPAL: termo exato que o empresário pesquisaria (ex: "alienação fiduciária de imóvel", "penhora de faturamento empresa")
- 3-5 KEYWORDS DE CAUDA LONGA: perguntas ou frases completas (ex: "o banco pode penhorar o faturamento da minha empresa")

### PASSO 4 — REDAÇÃO

Redigir conforme a estrutura definida na seção 5 (Formato do Arquivo). 800-1.000 palavras no corpo.

Regras de redação:
- Abertura pela cena do empresário — nunca pelo dado.
- Tabela comparativa obrigatória (mínimo 4 linhas de dados).
- Frase final em negrito, sem promessa, antes da FAQ.
- FAQ com exatamente 4 perguntas em formato `### `.
- Referências com links inline, formato `[Nome da norma — Fonte](URL)`.
- SEM CTA, SEM número OAB, SEM disclaimer, SEM promessa.

### PASSO 5 — CHECKLIST DE QUALIDADE E SEO

Aplicar integralmente o checklist da seção 7 antes de entregar a Walter. Se score < 95%, iterar (máximo 3 rodadas). Registrar score e rodadas.

### PASSO 6 — ENTREGA

Entregar o arquivo `.md` completo para revisão de Walter. Aguardar aprovação. Após aprovação, a publicação segue o POP DE PUBLICAÇÃO (documento separado).

### PROTOCOLO DE REVISÃO (quando Walter identifica erro)

Se Walter ou revisor externo identificar erro no artigo entregue:
1. Claude recebe o apontamento e classifica: erro de mecânica jurídica, erro de dado, erro editorial ou erro de SEO.
2. Para erros de mecânica jurídica: Claude retorna ao PASSO 2, refaz a verificação na norma-base, identifica a origem do erro e corrige todas as seções afetadas (não apenas o trecho apontado — erros de mecânica propagam).
3. Para erros de dado: verificar na fonte primária e corrigir.
4. Para erros editoriais ou de SEO: corrigir e reaplicar checklist.
5. Entregar versão corrigida com registro das alterações feitas.

Não defender o texto original. Se o erro é procedente, corrigir. Se não for procedente, fundamentar com a norma.

**Para precedentes jurisprudenciais sugeridos por revisor externo:** aplicar a regra dos três pontos do PASSO 2 antes de aceitar ou rejeitar definitivamente. Rejeição inicial por falta de verificação é correta; manutenção da rejeição após o texto integral do acórdão ser fornecido é erro.

### NOTA OPERACIONAL — ACESSO AO REPO

Claude no projeto Blog Passivos não tem acesso direto ao repositório GitHub. Para que o PASSO 1 funcione, Walter deve:
- Carregar o REGISTRO_EDITORIAL.md como conhecimento do projeto Blog Passivos, OU
- Colar o conteúdo do registro na conversa quando solicitar um novo artigo.

Sem o registro disponível, Claude não pode verificar duplicação de slug nem repetição de categoria.

---

## 5 — FORMATO DO ARQUIVO MARKDOWN

**Nome do arquivo:** `[slug].md` (kebab-case, sem acentos, sem caracteres especiais)
**Localização de destino:** `src/content/articles/[slug].md`

### Estrutura obrigatória

```markdown
---
title: "Título com palavras-chave SEO — máximo 80 caracteres"
excerpt: "Resumo de 1-2 frases para card do blog, incluindo dado concreto quando possível — máximo 200 caracteres"
publishedAt: "AAAA-MM-DD"
category: "Nome exato da categoria"
tags: ["keyword principal", "cauda longa 1", "cauda longa 2", "cauda longa 3"]
seo:
  title: "Título SEO com keyword — máximo 60 caracteres"
  description: "Description SEO — 150 a 160 caracteres, com keyword, sem promessa"
---

Primeiro parágrafo da abertura — cena do empresário.

Segundo parágrafo da abertura.

## Subtítulo H2 com termo de busca

Conteúdo do artigo...

## Tabela comparativa

| Coluna A | Coluna B | Coluna C |
|----------|----------|----------|
| ...      | ...      | ...      |

## Risco / Consequências

Parágrafo analítico sobre consequências.

**Frase final em negrito, sem promessa.**

## Perguntas frequentes

### Pergunta 1 (cauda longa)?
Resposta direta, 2-3 frases.

### Pergunta 2 (cauda longa)?
Resposta direta, 2-3 frases.

### Pergunta 3 (cauda longa)?
Resposta direta, 2-3 frases.

### Pergunta 4 (cauda longa)?
Resposta direta, 2-3 frases.

## Referências

[Nome da norma ou publicação — Fonte](URL)
```

**As 8 categorias válidas:** CCB · Capital de Giro · Garantias · Renegociação · Execução Bancária · Gestão de Passivos · Contratos Bancários · Patrimônio.

**ATENÇÃO — NÃO incluir a nota institucional/disclaimer no `.md`.**
O layout (`src/layouts/ArticleLayout.astro`) injeta a nota automaticamente.
Incluir no corpo gera disclaimer DUPLICADO.

**IMPORTANTE:** NÃO HÁ arquivo `index.tsx` para atualizar. O Astro descobre o artigo automaticamente pela presença do `.md` na pasta `articles/`.

---

## 6 — DISTRIBUIÇÃO DE KEYWORDS

- Keyword principal DEVE aparecer: no título H1, no primeiro parágrafo, e em pelo menos 1 subtítulo H2.
- Keywords de cauda longa devem aparecer naturalmente nos subtítulos H2 e nas perguntas da FAQ.
- Densidade natural. Sem keyword stuffing. Se parecer forçado, reescrever.

### Estrutura de subtítulos (H2)

- Mínimo 3, máximo 5 subtítulos H2.
- Cada H2 deve conter ao menos 1 termo de busca relevante.
- PROIBIDO em subtítulos: promessa de resultado, linguagem de venda, clickbait.
- BOM: "Da mora à consolidação: o que acontece e em qual prazo"
- RUIM: "Como evitar o leilão e salvar seu imóvel"

### Referências e links

- Toda citação legal deve ter link para fonte primária (Planalto para leis, BCB para dados, portais de jurisprudência para precedentes).
- Formato: `[Lei nº X, de DD de mês de AAAA — Planalto](URL)`
- Se a lei foi alterada por outra (ex: Lei 9.514/1997 alterada pela Lei 14.711/2023), citar ambas.
- NÃO usar notas de rodapé `[^n]` — exclusivamente links inline na seção `## Referências`.

---

## 7 — CHECKLIST DE QUALIDADE E SEO

### Checklist editorial (portão de qualidade)

| # | Critério | Tipo |
|---|----------|------|
| E1 | Abertura pela cena do empresário, não pelo dado | Obrigatório |
| E2 | Arquivo é `.md`, não `.tsx` | Obrigatório |
| E3 | Frontmatter YAML entre `---` no topo | Obrigatório |
| E4 | 800-1.000 palavras no corpo | Obrigatório |
| E5 | Tabela markdown com mínimo 4 linhas de dados | Obrigatório |
| E6 | Frase final em `**negrito**`, sem promessa | Obrigatório |
| E7 | FAQ com exatamente 4 perguntas em formato `### ` | Obrigatório |
| E8 | Referências com link markdown | Obrigatório |
| E9 | Disclaimer/nota institucional NÃO incluído no `.md` | Obrigatório |
| E10 | Slug sem acentos, kebab-case | Obrigatório |
| E11 | Categoria é uma das 8 válidas | Obrigatório |
| E12 | Categoria não repete as 2 publicações mais recentes | Obrigatório |
| E13 | Dados numéricos verificados em fonte primária | Obrigatório |
| E14 | Mecânica jurídica verificada na norma-base (artigos específicos consultados e registrados) | Obrigatório |
| E15 | Todo precedente citado (próprio ou sugerido por revisor) verificado pelos três pontos: existência, vigência, pertinência | Obrigatório |

### Checklist SEO (pontuação)

| # | Critério | Peso |
|---|----------|------|
| S1 | Keyword principal no H1, 1º parágrafo e ≥1 H2 | 20% |
| S2 | seo.title ≤60 chars com keyword | 10% |
| S3 | seo.description 150-160 chars com keyword, sem promessa | 15% |
| S4 | ≥3 H2 com termos de busca reais | 15% |
| S5 | FAQ com 4 perguntas de cauda longa | 15% |
| S6 | Links para fontes primárias | 10% |
| S7 | Nenhum título/subtítulo com promessa | 10% |
| S8 | Densidade de keyword natural (sem stuffing) | 5% |

Score ≥95% = todos os critérios atendidos integralmente.
Score <95% = iterar (máximo 3 rodadas).

**Regra de bloqueio:** se qualquer item E1-E15 falhar, o artigo NÃO pode ser entregue. Corrigir antes.

---

## 8 — GESTÃO DE RISCOS EDITORIAIS

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Erro na mecânica jurídica do instituto | Média | Crítico | PASSO 2: verificar norma-base antes de redigir. Não presumir por analogia |
| Citação de precedente inexistente (alucinação de IA) | Média | Crítico | PASSO 2: regra dos três pontos. Nunca incluir acórdão sem verificar existência, vigência e pertinência em fonte oficial |
| Rejeição indevida de precedente verificável | Baixa | Médio | Protocolo de revisão: rejeição inicial é correta sem verificação; manter rejeição após texto integral fornecido é erro |
| Dado numérico defasado ou incorreto | Média | Alto | Regra Zero: fonte primária obrigatória. Defasagem BCB/IBGE: 45-60 dias |
| Repetição de categoria recente | Baixa | Médio | PASSO 1: conferir REGISTRO_EDITORIAL antes de redigir |
| Repetição de ângulo já coberto | Baixa | Médio | PASSO 1: ler registro, identificar ângulos vizinhos |
| Promessa de resultado no texto | Baixa | Crítico (OAB) | Checklist E6 + Proibições (seção 9). Violação = bloqueio |
| Disclaimer duplicado no blog | Baixa | Baixo | Checklist E9: nunca incluir nota institucional no `.md` |
| Slug já existente na branch | Baixa | Médio | PASSO 1: verificar existência antes de redigir |
| Afirmação categórica sem base normativa | Média | Alto | Verificar dispositivo normativo antes de afirmar. Se a norma for omissa ou ambígua, usar linguagem condicional E alertar Walter na entrega |
| Confusão entre institutos jurídicos similares | Média | Crítico | PASSO 2: ler a norma-base do instituto específico. Identificar diferenças de mecânica (ex: cessão vs portabilidade, novação vs renegociação). Registrar a distinção no output de verificação |

**Protocolo de interrupção:** se qualquer risco de impacto Crítico se materializar durante a redação, interromper e alertar Walter antes de prosseguir.

---

## 9 — PROIBIÇÕES ABSOLUTAS

1. NUNCA criar arquivo `.tsx` — apenas `.md`.
2. NUNCA tentar atualizar `src/content/articles/index.tsx` — não existe.
3. NUNCA usar JSX no corpo do artigo.
4. NUNCA publicar sem tabela comparativa.
5. NUNCA publicar sem FAQ de 4 perguntas.
6. NUNCA incluir a nota institucional/disclaimer no `.md` — o layout injeta automaticamente.
7. NUNCA começar pelo dado — sempre pela cena do empresário.
8. NUNCA usar notas de rodapé `[^n]` — exclusivamente links inline na seção `## Referências`.
9. NUNCA usar "como evitar", "como ganhar", "como resolver", "solução para" em títulos ou subtítulos.
10. NUNCA prometer resultado ("proteja seu patrimônio", "salve sua empresa").
11. NUNCA usar linguagem de urgência artificial ("antes que seja tarde", "última chance").
12. NUNCA incluir CTA comercial no corpo ou conclusão do artigo ("entre em contato", "agende consulta").
13. NUNCA escolher tema autonomamente — o tema vem da PAUTA_SEMANAL, selecionado por Walter.
14. NUNCA redigir sem verificar a mecânica jurídica específica do instituto na norma-base.
15. NUNCA presumir funcionamento de instituto jurídico por analogia com instituto similar.
16. NUNCA citar precedente (acórdão, REsp, AgInt, Tema, Súmula) sem antes verificar existência, vigência e pertinência em fonte oficial — alucinação de número de processo é falha frequente de IA.

**Compliance editorial:** OAB Provimento 205/2021. Tom SEMPRE sóbrio, técnico, informacional.

---

## 10 — REGISTRO DE VERSÕES

| Versão | Data | Alteração |
|---|---|---|
| 5.0 | 06/06/2026 | Regras de bloqueio anti-repetição, SEO obrigatório |
| 7.0 | 21/06/2026 | Migração de Manus para Claude. Remoção de PASSO 1 autônomo e PASSO 4 (API/token). Inclusão de seções PMBOK: escopo, responsabilidades, riscos, interfaces. Verificação jurídica obrigatória detalhada (PASSO 2). Protocolo de revisão. Nota operacional sobre acesso ao repo. Vinculação com POP DE PUBLICAÇÃO |
| 7.1 | 30/06/2026 | Regra de verificação de precedente jurisprudencial (três pontos: existência, vigência, pertinência) — PASSO 2, item E15 do checklist, proibição #16, gestão de riscos atualizada. Aplicável a precedentes sugeridos por revisor externo: rejeição inicial sem verificação é correta; manutenção após texto integral fornecido é erro |
