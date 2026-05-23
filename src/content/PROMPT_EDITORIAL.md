# GUIA EDITORIAL — Blog Walter Inglez Advocacia e Consultoria
# LEIA ESTE GUIA INTEGRALMENTE ANTES DE QUALQUER AÇÃO

---

## IDENTIDADE DO BLOG

**Escritório:** Walter Inglez Advocacia e Consultoria
**Especialização:** Gestão estratégica de passivo bancário empresarial
**Público:** Empresários PJ com dívidas bancárias acima de R$ 200 mil, operação ativa, garantias envolvidas ou risco de execução
**Posicionamento:** "A dívida não é o único problema. O risco está em decidir no escuro."
**Eixo:** Negociar × Defender × Ajuizar
**WhatsApp:** +55 11 91498-8818

---

## PASSO 0 — ANTES DE ESCOLHER O TEMA

Execute estas verificações na ordem:

### 0.1 — Liste os últimos 5 artigos publicados
Leia `src/content/articles/index.tsx` e anote:
- Título
- Categoria
- Slug

### 0.2 — Conte artigos por categoria
Some quantos artigos existem em cada uma das 8 categorias:
1. CCB
2. Capital de Giro
3. Garantias
4. Renegociação
5. Execução Bancária
6. Gestão de Passivos
7. Contratos Bancários
8. Patrimônio

### 0.3 — Identifique restrições obrigatórias
- PROIBIDO: escolher categoria que aparece nos 2 últimos artigos publicados consecutivamente
- PROIBIDO: escolher tema com ângulo similar ao de qualquer artigo dos últimos 5 publicados
- OBRIGATÓRIO: se uma categoria tiver 2 artigos consecutivos, escolher obrigatoriamente a categoria com MENOS artigos no índice

### 0.4 — Critério de escolha do tema
- PRIMEIRO: buscar tema de alta relevância recente (últimos 30 dias) nas fontes abaixo
- SEGUNDO: o tema deve pertencer a categoria diferente dos 2 últimos artigos
- TERCEIRO: se não houver tema recente relevante, escolher tema perene da categoria com menos artigos

---

## PASSO 1 — PESQUISA DO TEMA

Pesquise nas fontes na ordem indicada. Máximo 2 tentativas por fonte:

1. STJ — decisões recentes em direito bancário: https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias.aspx
2. Banco Central do Brasil: https://www.bcb.gov.br/publicacoes
3. Conjur — direito bancário: https://www.conjur.com.br/direito-bancario

**Critérios de aprovação do tema:**
- URL da fonte está ativa e acessível
- Conteúdo é gratuito e público
- Data máxima de 90 dias
- Relevante para empresário PJ com dívida bancária

---

## PASSO 2 — REDAÇÃO DO ARTIGO

### Extensão
800 a 1.200 palavras no corpo do texto.
NÃO contar: título, FAQ, nota institucional.

### Abertura OBRIGATÓRIA — regra absoluta
O primeiro parágrafo DEVE começar com uma cena concreta do empresário.
NUNCA começar com dado estatístico, fonte ou notícia.

**EXEMPLO CORRETO de abertura:**
> "O gerente ligou para dizer que o crédito foi aprovado. Você respirou. O mês vai fechar. A operação continua. Só que ninguém explicou o que aquele contrato representa."

**EXEMPLO ERRADO de abertura — NUNCA FAZER:**
> "O Banco Central publicou em abril de 2026 que o crédito ampliado às empresas alcançou R$ 7,1 trilhões..."

### Estrutura obrigatória — nesta ordem exata

1. **Abertura** — cena do empresário (1-2 parágrafos)
2. **Dado ou contexto** — fonte técnica, jurisprudência ou dado do BCB (1 parágrafo)
3. **O que o empresário precisa entender** — análise técnica sem juridiquês (3-4 parágrafos com intertítulos `##`)
4. **Tabela comparativa** — OBRIGATÓRIA, mínimo 4 linhas, máximo 5 colunas
5. **Risco** — o que acontece se o empresário não agir (1-2 parágrafos)
6. **Conclusão** — frase final em `<strong>`, máximo 2 linhas, SEM promessa de resultado
7. **FAQ** — OBRIGATÓRIO, exatamente 4 perguntas (ver regras abaixo)
8. **Referência** — OBRIGATÓRIA, 1 fonte com hiperlink funcional
9. **Nota institucional** — copiar EXATAMENTE o texto abaixo

### Regras do FAQ
- SEMPRE 4 perguntas — nem 3, nem 5
- Formato: `<h3>Pergunta?</h3>` seguido de `<p>Resposta.</p>`
- Máximo 3 linhas por resposta
- Perguntas devem ser dúvidas reais do empresário sobre o tema

### Nota institucional — COPIAR EXATAMENTE, SEM ALTERAR UMA PALAVRA
```
Este conteúdo tem finalidade exclusivamente informativa e não substitui a análise individual do caso concreto. Cada situação exige avaliação específica das condições contratuais, do estágio da cobrança e do contexto empresarial.

Walter Inglez Advocacia e Consultoria | Especialização em Gestão Estratégica de Passivo Bancário Empresarial
```

### Tom e voz
- Sóbrio, técnico, direto
- SEM juridiquês: proibido usar "hodiernamente", "mister se faz", "consoante", "diga-se de passagem"
- SEM promessa de resultado: proibido "garantimos", "você vai recuperar", "certeza de êxito"
- SEM urgência artificial: proibido "só até hoje", "últimas vagas"
- O advogado é o estrategista. O cliente é o protagonista.

### Regras sobre atribuição de fontes
- Pesquisas amostrais (como PTC do BCB): atribuir às instituições consultadas, NUNCA ao órgão emissor
  - CORRETO: "As instituições financeiras consultadas avaliaram que..."
  - ERRADO: "O Banco Central concluiu que..."
- Citar sempre publicação específica, não apenas a página geral
  - CORRETO: "Pesquisa Trimestral de Condições de Crédito — Resultados de março de 2026"
  - ERRADO: "Banco Central do Brasil — Publicações"

---

## PASSO 3 — FORMATO DO ARQUIVO .TSX

Nome do arquivo: `[slug].tsx`
Slug: kebab-case, sem acentos, sem caracteres especiais

```tsx
import type { Article } from "@/types/article";

const article: Article = {
  slug: "slug-aqui",
  title: "Título com palavras-chave SEO — máximo 80 caracteres",
  description: "Resumo SEO — máximo 160 caracteres, inclui dado concreto quando possível",
  excerpt: "Resumo de 1-2 frases para card do blog",
  publishedAt: "AAAA-MM-DD",
  author: {
    name: "Walter Inglez",
    role: "Advocacia e Consultoria",
  },
  category: "Nome exato da categoria",
  tags: ["tag1", "tag2", "tag3"],
  readingTime: 5,
  body: (
    <>
      [corpo do artigo em JSX]
    </>
  ),
  seo: {
    title: "Título SEO longo com palavras-chave — Walter Inglez",
    description: "Description SEO — máximo 160 caracteres",
  },
};

export default article;
```

**Cálculo do readingTime:**
- até 800 palavras = 4 min
- 800 a 1.000 palavras = 5 min
- 1.000 a 1.200 palavras = 6 min

---

## PASSO 4 — COMMIT NO GITHUB

Branch obrigatório: `draft`
NUNCA fazer commit em `main`
NUNCA fazer merge para `main`

Sequência obrigatória:
1. `git checkout draft && git pull origin draft`
2. Criar `src/content/articles/[slug].tsx`
3. Atualizar `src/content/articles/index.tsx` — import no topo + entrada no array
4. Verificar: `grep "[slug]" src/content/articles/index.tsx`
5. Atualizar `public/sitemap.xml` com a nova URL
6. `npm run build` — SE FALHAR: corrigir o erro antes de continuar
7. `git add` nos 3 arquivos alterados
8. `git commit -m "artigo: [slug]"`
9. `git push origin draft`
10. Verificar: `git log --oneline -1`

---

## CHECKLIST FINAL — verificar antes do commit

- [ ] Abertura começa pela cena do empresário, não pelo dado
- [ ] Extensão entre 800 e 1.200 palavras
- [ ] Tabela presente com mínimo 4 linhas
- [ ] Conclusão em `<strong>`, sem promessa
- [ ] FAQ com exatamente 4 perguntas
- [ ] Referência com hiperlink funcional e publicação específica
- [ ] Nota institucional copiada EXATAMENTE — sem OAB, sem cidades
- [ ] Slug sem acentos ou caracteres especiais
- [ ] Categoria é exatamente uma das 8 listadas
- [ ] Build aprovado antes do commit
- [ ] Commit no branch `draft`, não em `main`

---

## PROIBIÇÕES ABSOLUTAS

1. NUNCA publicar artigo sem tabela comparativa
2. NUNCA publicar artigo sem FAQ com exatamente 4 perguntas
3. NUNCA alterar o texto da nota institucional
4. NUNCA começar o artigo pelo dado estatístico ou fonte
5. NUNCA fazer commit em `main` — sempre em `draft`
6. NUNCA fazer merge para `main`
7. NUNCA fazer deploy — o deploy é sempre manual pelo Walter
8. NUNCA prometer resultado ao leitor
9. NUNCA usar juridiquês
10. NUNCA escolher categoria que aparece nos 2 últimos artigos consecutivos
