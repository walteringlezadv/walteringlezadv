# PROMPT EDITORIAL — Blog Walter Inglez Advocacia e Consultoria

Documento único de orientação para geração de artigos do blog
(blog.walteringlezadv.com.br). Repositório: walteringlezadv/walteringlezadv (Astro).

---

## Tom e voz

- Sóbrio, técnico, direto.
- SEM juridiquês ("hodiernamente", "mister se faz", "consoante").
- SEM promessa ("garantimos", "você vai recuperar").
- SEM urgência artificial ("últimas vagas").
- O advogado é o estrategista. O cliente é o protagonista.
- Avatar: empresário PJ com dívida bancária relevante (acima de R$200 mil),
  garantias envolvidas ou risco de execução.
- Eixo estratégico: Negociar × Defender × Ajuizar.

---

## PASSO 1 — ESCOLHA DO TEMA (autônoma)

NÃO buscar arquivo externo de tema. O tema é proposto por você, Manus,
com liberdade de pesquisa, dentro destas regras:

1. Liste os artigos já existentes em `src/content/articles/*.md` e leia o
   frontmatter (`category`, `tags`, `publishedAt`) de cada um.
2. Identifique quais das 8 categorias estão sub-representadas ou sem artigo
   recente, e quais ângulos já foram cobertos (para não repetir).
3. Pesquise livremente fontes técnicas e dados atuais e proponha UM tema que:
   - não repita a categoria das 2 publicações mais recentes;
   - traga ângulo distinto dos artigos vizinhos (evitar fadiga de série);
   - sirva ao avatar (empresário PJ, dívida acima de R$200 mil, garantias
     ou risco de execução);
   - encaixe no eixo Negociar × Defender × Ajuizar.
4. Registre o tema escolhido e a justificativa na descrição do PR, para a
   revisão de Walter.

**NUNCA encerrar a tarefa por "falta de tema".** Sem dados de pesquisa
suficientes, escolher o tema pelas lacunas das 8 categorias.

**As 8 categorias:** CCB · Capital de Giro · Garantias · Renegociação ·
Execução Bancária · Gestão de Passivos · Contratos Bancários · Patrimônio.

---

## PASSO 2 — PESQUISA E ATRIBUIÇÃO DE FONTES

Pesquise com liberdade, priorizando fontes primárias e publicações
específicas e datadas. Regras de atribuição obrigatórias:

- Pesquisas amostrais: atribuir às instituições, NUNCA ao órgão emissor.
  - CORRETO: "As instituições financeiras consultadas avaliaram que..."
  - ERRADO: "O Banco Central concluiu que..."
- Citar a publicação específica:
  - CORRETO: "Pesquisa Trimestral de Condições de Crédito — março de 2026"
  - ERRADO: "Banco Central — Publicações"

---

## PASSO 3 — FORMATO DO ARQUIVO MARKDOWN

**Nome do arquivo:** `[slug].md` (kebab-case, sem acentos, sem caracteres especiais)
**Localização:** `src/content/articles/[slug].md`

**Estrutura obrigatória:**

```markdown
---
title: "Título com palavras-chave SEO — máximo 80 caracteres"
excerpt: "Resumo de 1-2 frases para card do blog, incluindo dado concreto quando possível"
publishedAt: "AAAA-MM-DD"
category: "Nome exato da categoria"
tags: ["tag1", "tag2", "tag3"]
seo:
  title: "Título SEO longo com palavras-chave — Walter Inglez"
  description: "Description SEO — máximo 160 caracteres"
---

Primeiro parágrafo da abertura — cena do empresário.

Segundo parágrafo da abertura.

## Subtítulo da seção

Conteúdo do artigo...

## Tabela comparativa

| Coluna A | Coluna B | Coluna C |
|----------|----------|----------|
| ...      | ...      | ...      |

## Risco

Parágrafo sobre consequências.

**Frase final em negrito, sem promessa.**

## Perguntas frequentes

### Pergunta 1?
Resposta curta.

### Pergunta 2?
Resposta curta.

### Pergunta 3?
Resposta curta.

### Pergunta 4?
Resposta curta.

## Referência

[Nome da publicação específica](https://url-da-fonte)
```

**ATENÇÃO — NÃO incluir a nota institucional/disclaimer no `.md`.**
O layout (`src/layouts/ArticleLayout.astro`) injeta a nota automaticamente.
Incluir no corpo gera disclaimer DUPLICADO. O artigo termina na seção
`## Referência`.

**IMPORTANTE:** NÃO HÁ arquivo `index.tsx` para atualizar. O Astro descobre o
artigo automaticamente pela presença do `.md` na pasta `articles/`.

---

## PASSO 4 — PUBLICAÇÃO VIA API GITHUB

A publicação é feita exclusivamente pelo código Python do prompt da tarefa Manus, via GitHub Contents API, com autenticação por token. NÃO usar git commands — Manus não possui credenciais git para `git push`.

**Regras absolutas:**
- Branch de destino: SEMPRE `draft`. NUNCA `main`.
- O código Python do prompt da tarefa é a única forma autorizada de entregar o arquivo.
- NÃO fazer merge. NÃO fazer deploy. Walter recebe e-mail automático e aprova o PR manualmente.

**Sitemap:** atualizado manualmente por Walter após o merge, ou pelo GitHub Action se configurado. NÃO incluir atualização de sitemap.xml no commit do artigo.

**Resultado esperado ao final do PASSO 4:**
- Arquivo `src/content/articles/[slug].md` criado na branch `draft`
- HTTP 201 retornado pela API
- GitHub Action `sync-blog.yml` disparado automaticamente
- PR criado com e-mail de notificação para Walter
---

## CHECKLIST FINAL — verificar antes do commit

- [ ] Tema escolhido conforme PASSO 1 (sem repetir categoria das 2 últimas publicações)
- [ ] Arquivo é `.md` (NÃO `.tsx`)
- [ ] Frontmatter YAML entre `---` no topo
- [ ] Abertura começa pela cena do empresário
- [ ] 800–1.000 palavras no corpo
- [ ] Tabela Markdown com mínimo 4 linhas
- [ ] Conclusão em `**negrito**`, sem promessa
- [ ] FAQ com exatamente 4 perguntas em formato `### `
- [ ] Referência com link Markdown
- [ ] Disclaimer/nota institucional NÃO incluído no `.md` (o layout injeta)
- [ ] Slug sem acentos
- [ ] Categoria é uma das 8 listadas
- [ ] `npm run build` passou
- [ ] Commit em branch `artigo/[slug]` cortada do `main`, NÃO em `main`

---

## PROIBIÇÕES ABSOLUTAS

1. NUNCA criar arquivo `.tsx` — apenas `.md`.
2. NUNCA tentar atualizar `src/content/articles/index.tsx` — não existe.
3. NUNCA usar JSX no corpo do artigo.
4. NUNCA publicar sem tabela comparativa.
5. NUNCA publicar sem FAQ de 4 perguntas.
6. NUNCA incluir a nota institucional/disclaimer no `.md` — o layout injeta automaticamente.
7. NUNCA começar pelo dado — sempre pela cena.
8. NUNCA commitar ou fazer merge em `main`.
9. NUNCA reusar branch nem fazer `git pull` — cada artigo nasce em branch nova `artigo/[slug]` cortada do `main` (PASSO 4).
10. NUNCA fazer deploy — Walter aprova manualmente.
11. NUNCA encerrar a tarefa por "falta de tema" — escolher pelas lacunas das categorias (PASSO 1).

## PADRÃO SEO — OBRIGATÓRIO PARA TODOS OS ARTIGOS

### Frontmatter SEO

Cada artigo deve incluir o bloco `seo` no frontmatter YAML:

```yaml
seo:
  title: "Keyword principal + complemento informacional"  # ≤60 caracteres
  description: "Keyword principal + valor para o empresário, sem promessa de resultado"  # 150-160 caracteres
```

Regras:
- `seo.title` pode diferir do `title` do artigo. Deve conter a keyword principal e ter no máximo 60 caracteres.
- `seo.description` é a meta description. Deve conter a keyword principal, ter entre 150 e 160 caracteres, e NUNCA incluir promessa de resultado ("como evitar", "como ganhar", "solução para").
- `excerpt` deve conter a keyword principal e ter no máximo 200 caracteres.
- `tags` devem incluir a keyword principal e 3-5 variações de cauda longa.

### Keyword Strategy

Antes de redigir, definir:
- 1 KEYWORD PRINCIPAL: termo exato que o empresário pesquisaria (ex: "alienação fiduciária de imóvel", "penhora de faturamento empresa")
- 3-5 KEYWORDS DE CAUDA LONGA: perguntas ou frases completas (ex: "o banco pode penhorar o faturamento da minha empresa", "como funciona a alienação fiduciária em dívida empresarial")

### Distribuição de Keywords no Corpo

- Keyword principal DEVE aparecer: no título H1, no primeiro parágrafo, e em pelo menos 1 subtítulo H2.
- Keywords de cauda longa devem aparecer naturalmente nos subtítulos H2 e nas perguntas da FAQ.
- Densidade natural. Sem keyword stuffing. Se parecer forçado, reescrever.

### Estrutura de Subtítulos (H2)

- Mínimo 3, máximo 5 subtítulos H2.
- Cada H2 deve conter ao menos 1 termo de busca relevante.
- PROIBIDO em subtítulos: promessa de resultado, linguagem de venda, clickbait.
- BOM: "Da mora à consolidação: o que acontece e em qual prazo"
- RUIM: "Como evitar o leilão e salvar seu imóvel"

### FAQ (Perguntas Frequentes)

- 3 a 4 perguntas no final do artigo.
- Cada pergunta deve espelhar uma busca real do empresário (cauda longa).
- Resposta direta, 2-3 frases, sem remissão vaga.
- BOM: "O banco pode leiloar meu imóvel sem me avisar?"
- RUIM: "O que é alienação fiduciária?"

### Referências e Links

- Toda citação legal deve ter link para fonte primária (Planalto para leis, BCB para dados).
- Formato: `[Lei nº X, de DD de mês de AAAA — Planalto](URL)`
- Se a lei foi alterada por outra (ex: Lei 9.514/1997 alterada pela Lei 14.711/2023), citar ambas.

### Checklist SEO (PASSO 3.5 do prompt)

Antes de publicar, o artigo deve atender TODOS os critérios abaixo:

| # | Critério | Peso |
|---|----------|------|
| 1 | Keyword principal no H1, 1º parágrafo e ≥1 H2 | 20% |
| 2 | seo.title ≤60 chars com keyword | 10% |
| 3 | seo.description 150-160 chars com keyword, sem promessa | 15% |
| 4 | ≥3 H2 com termos de busca reais | 15% |
| 5 | FAQ com 3-4 perguntas de cauda longa | 15% |
| 6 | Links para fontes primárias | 10% |
| 7 | Nenhum título/subtítulo com promessa | 10% |
| 8 | Densidade de keyword natural (sem stuffing) | 5% |

Score ≥95% = todos os critérios atendidos integralmente.
Score <95% = revisar e iterar (máximo 3 rodadas).

### PROIBIÇÕES SEO (OAB Provimento 205/2021)

- NUNCA usar "como evitar", "como ganhar", "como resolver", "solução para" em títulos ou subtítulos.
- NUNCA prometer resultado ("proteja seu patrimônio", "salve sua empresa").
- NUNCA usar linguagem de urgência artificial ("antes que seja tarde", "última chance").
- NUNCA incluir CTA comercial no corpo ou conclusão do artigo ("entre em contato", "agende consulta").
- Tom SEMPRE sóbrio, técnico, informacional.
