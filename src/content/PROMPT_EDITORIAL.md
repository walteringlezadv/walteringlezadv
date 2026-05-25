### Tom e voz
- Sóbrio, técnico, direto
- SEM juridiquês ("hodiernamente", "mister se faz", "consoante")
- SEM promessa ("garantimos", "você vai recuperar")
- SEM urgência artificial ("últimas vagas")
- O advogado é o estrategista. O cliente é o protagonista.

### Atribuição de fontes
- Pesquisas amostrais: atribuir às instituições, NUNCA ao órgão emissor
  - CORRETO: "As instituições financeiras consultadas avaliaram que..."
  - ERRADO: "O Banco Central concluiu que..."
- Citar publicação específica:
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

---

Este conteúdo tem finalidade exclusivamente informativa e não substitui a análise individual do caso concreto. Cada situação exige avaliação específica das condições contratuais, do estágio da cobrança e do contexto empresarial.

Walter Inglez Advocacia e Consultoria | Especialização em Gestão Estratégica de Passivo Bancário Empresarial
```

---

## PASSO 4 — COMMIT NO GITHUB

**Branch obrigatório:** `draft`
**NUNCA fazer commit em `main`. NUNCA fazer merge para `main`.**

### Sequência obrigatória:

1. `git checkout draft && git pull origin draft`
2. Criar `src/content/articles/[slug].md` com a estrutura do PASSO 3
3. Atualizar `public/sitemap.xml` adicionando a nova URL:
```xml
   <url>
     <loc>https://blog.walteringlezadv.com.br/blog/[slug]</loc>
     <lastmod>AAAA-MM-DD</lastmod>
     <changefreq>weekly</changefreq>
     <priority>0.8</priority>
   </url>
```
4. `npm run build` — SE FALHAR: corrigir antes de continuar. NÃO commitar com build quebrado.
5. `git add src/content/articles/[slug].md public/sitemap.xml`
6. `git commit -m "artigo: [slug]"`
7. `git push origin draft`
8. Verificar: `git log --oneline -1`

**IMPORTANTE:** NÃO HÁ MAIS arquivo `index.tsx` para atualizar. O Astro descobre o artigo automaticamente pela presença do arquivo `.md` na pasta `articles/`.

---

## CHECKLIST FINAL — verificar antes do commit

- [ ] Arquivo é `.md` (NÃO `.tsx`)
- [ ] Frontmatter YAML entre `---` no topo
- [ ] Abertura começa pela cena do empresário
- [ ] 800-1.200 palavras no corpo
- [ ] Tabela Markdown com mínimo 4 linhas
- [ ] Conclusão em `**negrito**`, sem promessa
- [ ] FAQ com exatamente 4 perguntas em formato `### `
- [ ] Referência com link Markdown
- [ ] Nota institucional copiada EXATAMENTE
- [ ] Slug sem acentos
- [ ] Categoria é uma das 8 listadas
- [ ] `npm run build` passou
- [ ] Commit em `draft`, NÃO em `main`

---

## PROIBIÇÕES ABSOLUTAS

1. NUNCA criar arquivo `.tsx` — apenas `.md`
2. NUNCA tentar atualizar `src/content/articles/index.tsx` — não existe
3. NUNCA usar JSX no corpo do artigo
4. NUNCA publicar sem tabela comparativa
5. NUNCA publicar sem FAQ de 4 perguntas
6. NUNCA alterar a nota institucional
7. NUNCA começar pelo dado — sempre pela cena
8. NUNCA commitar em `main` — sempre em `draft`
9. NUNCA fazer merge para `main`
10. NUNCA fazer deploy — Walter aprova manualmente
