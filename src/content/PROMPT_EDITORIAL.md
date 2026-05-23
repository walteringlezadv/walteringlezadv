# GUIA EDITORIAL — Blog Walter Inglez Advocacia e Consultoria

## IDENTIDADE E POSICIONAMENTO

**Escritório:** Walter Inglez Advocacia e Consultoria | OAB/CE 51.563  
**Especialização:** Gestão estratégica de passivo bancário empresarial  
**Público-alvo:** Empresários PJ com dívidas bancárias relevantes (acima de R$ 200 mil), operação ativa, garantias envolvidas ou risco de execução  
**Posicionamento:** "A dívida não é o único problema. O risco está em decidir no escuro."  
**Eixo estratégico:** Negociar × Defender × Ajuizar  
**WhatsApp:** +55 11 91498-8818  

---

## TOM E VOZ

- Sóbrio, técnico, direto
- Sem juridiquês (sem termos como "hodiernamente", "mister se faz", "consoante")
- Sem promessa de resultado
- Sem urgência artificial
- O advogado é o estrategista. O cliente é o protagonista.
- Linguagem de quem conhece o problema do empresário por dentro

---

## PADRÃO DE ARTIGO

### Extensão
800 a 1.200 palavras (contagem do corpo do texto, excluindo título, FAQ e nota institucional)

### Abertura obrigatória
O artigo deve sempre começar pela **cena do empresário** — o problema concreto que ele enfrenta no dia a dia. O dado técnico, a fonte ou a jurisprudência entra no segundo ou terceiro parágrafo, nunca na abertura.

### Estrutura obrigatória

1. **Contexto** — cena do empresário em primeiro lugar, dado técnico em seguida (2-3 parágrafos)
2. **O que o empresário precisa entender** — análise técnica acessível, sem legalês (3-4 parágrafos com intertítulos `##`)
3. **Tabela comparativa** — mínimo 4 linhas de dados, máximo 6 colunas. Sempre presente. Formato markdown.
4. **Risco** — o que acontece se o empresário não agir ou agir mal (1-2 parágrafos)
5. **Conclusão** — mensagem final em **negrito**, máximo 3 linhas, sem promessa
6. **FAQ** — 3 a 4 perguntas frequentes do empresário sobre o tema (ver regras abaixo)
7. **Referência** — 1 fonte técnica com hiperlink (lei, acórdão, artigo doutrinário). Citar publicação específica, não apenas a página geral.
8. **Nota institucional** — texto fixo obrigatório (ver abaixo)

### Regras do FAQ
- Sempre presente — nunca omitir
- 3 a 4 perguntas por artigo
- Formato: `### Pergunta?` seguido de parágrafo com a resposta
- Máximo 3 linhas por resposta — respostas curtas e diretas
- As perguntas devem refletir dúvidas reais do empresário PJ sobre o tema do artigo
- Finalidade: SEO (rich snippets no Google) e autoridade técnica
- Exemplo de estrutura:
```
### O banco pode cobrar juros após o vencimento da CCB?
Sim. A CCB permite a cobrança de juros remuneratórios e moratórios após o vencimento, desde que previstos no contrato. O problema ocorre quando os encargos aplicados divergem das taxas pactuadas — o que pode ser questionado judicialmente.
```

### Regras sobre a fonte
- Citar sempre publicação específica, não apenas a página geral. Exemplo: em vez de "Banco Central do Brasil — Publicações", citar "Banco Central do Brasil. Pesquisa Trimestral de Condições de Crédito — Resultados de março de 2026."
- Quando a fonte for pesquisa ou relatório com metodologia amostral (como a PTC do BCB), atribuir os dados às instituições consultadas, não ao órgão emissor. Exemplo correto: "As instituições financeiras consultadas avaliaram..." — nunca "O Banco Central concluiu..."

### Nota institucional obrigatória (copiar exatamente)
```
*Este conteúdo tem finalidade exclusivamente informativa e não substitui a análise individual do caso concreto. Cada situação exige avaliação específica das condições contratuais, do estágio da cobrança e do contexto empresarial.*

*Walter Inglez Advocacia e Consultoria | Especialização em Gestão Estratégica de Passivo Bancário Empresarial*
```

---

## CATEGORIAS (usar exatamente estes nomes)

1. CCB
2. Capital de Giro
3. Garantias
4. Renegociação
5. Execução Bancária
6. Gestão de Passivos
7. Contratos Bancários
8. Patrimônio

---

## FORMATO DO ARQUIVO .TSX

```tsx
import type { Article } from "@/types/article";

const article: Article = {
  slug: "slug-do-artigo-aqui",
  title: "Título do Artigo Aqui",
  category: "Categoria Aqui",
  date: "AAAA-MM-DD",
  readingTime: 5,
  description: "Resumo do artigo em 1-2 frases. Máximo 160 caracteres.",
  content: `
[corpo do artigo em markdown]
  `,
};

export default article;
```

### Regras do arquivo .tsx
- `slug`: kebab-case, sem acentos, sem caracteres especiais, descritivo
- `title`: título completo com palavras-chave SEO, até 80 caracteres. Preferir formato "Tema: por que fazer X antes de Y"
- `category`: deve ser exatamente uma das 8 categorias listadas acima
- `date`: data de criação no formato AAAA-MM-DD
- `readingTime`: calcular assim — 800 palavras = 4 min | 1.000 palavras = 5 min | 1.200 palavras = 6 min
- `description`: resumo objetivo para SEO e cards do blog, máximo 160 caracteres
- `content`: corpo completo do artigo em markdown, com intertítulos `##`, tabela, FAQ e nota institucional

---

## SELEÇÃO DE TEMA

### Fontes de pesquisa (usar na ordem, máximo 2 tentativas por fonte)
1. STJ — jurisprudência recente em direito bancário: https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias.aspx
2. Banco Central do Brasil — notas e relatórios: https://www.bcb.gov.br/publicacoes
3. Conjur — artigos de direito bancário: https://www.conjur.com.br/direito-bancario

### Critérios de seleção de tema
- Relevante para empresário PJ com dívida bancária
- Acontecimento recente (últimos 30 dias) OU tema perene de alta incidência prática
- Não repetir tema nem ângulo similar. Listar os títulos dos últimos 5 artigos publicados e confirmar que o novo tema aborda categoria, fonte e problema distintos. Slug diferente não é suficiente — o tema central deve ser diferente.
- Priorizar sempre o tema de maior relevância recente (decisão do STJ, mudança regulatória, risco prático emergente). Se a categoria escolhida já tiver 2 artigos consecutivos publicados, obrigatoriamente escolher a categoria com menos artigos no índice, independentemente da relevância do momento.
- Prioridade: decisões do STJ, mudanças regulatórias do Bacen, ou riscos práticos de execução

### Categorias com menor cobertura têm prioridade
Verificar o índice e escolher categoria com menos artigos publicados.

---

## CHECKLIST ANTES DO COMMIT

- [ ] Extensão entre 800 e 1.200 palavras
- [ ] Abertura começa pela cena do empresário, não pela fonte
- [ ] Tabela comparativa presente com mínimo 4 linhas
- [ ] Conclusão em negrito
- [ ] FAQ presente com 3 a 4 perguntas
- [ ] Referência com hiperlink funcional e publicação específica
- [ ] Atribuição correta da fonte (instituições consultadas, não o órgão emissor, quando amostral)
- [ ] Nota institucional exata (sem alterações)
- [ ] Slug sem acentos ou caracteres especiais
- [ ] Categoria é exatamente uma das 8 listadas
- [ ] `readingTime` calculado corretamente
- [ ] Arquivo nomeado igual ao slug: `[slug].tsx`
- [ ] Import e export no formato correto do .tsx
- [ ] Entrada adicionada em `src/content/articles/index.tsx`
- [ ] URL adicionada em `public/sitemap.xml`

---

## O QUE NUNCA FAZER

- Prometer resultado ("garantimos", "você vai recuperar", "certeza de êxito")
- Citar testemunhos sem autorização expressa
- Usar urgência artificial ("só até hoje", "últimas vagas")
- Reproduzir decisão judicial sem citar a fonte
- Alterar o texto da nota institucional
- Usar juridiquês
- Publicar artigo sem tabela comparativa
- Publicar artigo sem FAQ
- Começar o artigo pela fonte ou dado técnico — sempre começar pela cena do empresário
- Atribuir conclusões de pesquisas amostrais ao órgão emissor
- Fazer deploy — o deploy é sempre manual pelo Walter
