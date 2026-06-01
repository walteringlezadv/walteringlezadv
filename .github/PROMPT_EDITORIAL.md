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

## PASSO 4 — COMMIT NO GITHUB (branch por artigo)

NUNCA commitar ou fazer merge em `main`. **NUNCA reusar uma branch nem fazer
`git pull`** — é o que gera a divergência que encerra a tarefa. Cada artigo
nasce em uma branch NOVA, cortada do `main` atual.

### Sequência obrigatória:

1. `git fetch origin`
2. `git checkout -B artigo/[slug] origin/main`
   (branch nova a partir do `main` atualizado — não diverge; NÃO usar `git pull`)
3. Criar `src/content/articles/[slug].md` com a estrutura do PASSO 3.
4. Atualizar `public/sitemap.xml` adicionando a nova URL:
```xml
   <url>
     <loc>https://blog.walteringlezadv.com.br/blog/[slug]</loc>
     <lastmod>AAAA-MM-DD</lastmod>
     <changefreq>weekly</changefreq>
     <priority>0.8</priority>
   </url>
```
5. `npm run build` — SE FALHAR: corrigir antes de continuar. NÃO commitar com build quebrado.
6. `git add src/content/articles/[slug].md public/sitemap.xml`
7. `git commit -m "artigo: [slug]"`
8. `git push origin artigo/[slug]`
9. Verificar: `git log --oneline -1`

NÃO fazer merge para `main`. NÃO fazer deploy. **Walter aprova o PR manualmente.**

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
