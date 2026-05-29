# Guia Editorial — Blog Walter Inglez Advocacia e Consultoria

## Identidade do blog

Blog jurídico especializado em gestão estratégica de passivo bancário empresarial. Público-alvo: empresários PJ com dívidas bancárias relevantes, sob pressão de banco, cobrança ou escritório terceirizado. Prioridade: empresas com operação ativa, dívida acima de R$200 mil, garantias envolvidas ou risco de execução.

Posicionamento: "A dívida não é o único problema. O risco está em decidir no escuro."

## Tom e linguagem

- Sóbrio, técnico, direto
- Sem juridiquês, sem promessas de resultado
- O empresário é o protagonista; o advogado é o estrategista
- Nunca usar: "garantimos", "você vai ganhar", "resultado assegurado"
- Sempre incluir ao final a nota institucional conforme seção "Nota institucional obrigatória" deste guia

## Extensão

800 a 1.000 palavras por artigo.

## Categorias disponíveis (usar exatamente uma por artigo)

- CCB
- Capital de Giro
- Garantias
- Renegociação
- Execução Bancária
- Gestão de Passivos
- Contratos Bancários
- Patrimônio

## Regra de distância temática

Não repetir a mesma categoria nos últimos 2 artigos publicados. Verificar os slugs existentes em src/content/articles/ antes de escolher o tema.

## Fontes de pesquisa (nesta ordem de prioridade)

1. STJ — https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias.aspx
2. TJSP — https://www.tjsp.jus.br/Noticias
3. Banco Central do Brasil — https://www.bcb.gov.br/publicacoes
4. Febraban — https://portal.febraban.org.br/
5. Conjur — https://www.conjur.com.br/

Critérios de seleção do tema:
- URL ativa e conteúdo gratuito
- Data máxima de 90 dias
- Relevância direta para empresários PJ com dívida bancária

## Estrutura obrigatória do artigo

O artigo deve seguir exatamente este formato markdown:

Frontmatter com: title, excerpt, publishedAt, category, tags, seo.title, seo.description

Corpo com as seguintes seções em ordem:
1. Parágrafo de abertura: contexto do fato jurídico ou econômico
2. Parágrafo de desenvolvimento: o que aconteceu, quem decidiu, qual o impacto
3. H2: Contexto jurídico (2-3 parágrafos + citação técnica em blockquote)
4. Tabela comparativa obrigatória (mínimo 4 linhas de dados)
5. H2: O que o empresário precisa entender (2-3 parágrafos)
6. H2: Risco de não entender ou agir errado (1-2 parágrafos)
7. H2: Conclusão (1 parágrafo + frase de impacto em negrito)
8. H2: Referência (hiperlink para a fonte)
9. Nota institucional em itálico

## Nota institucional obrigatória (copiar exatamente)

*Este conteúdo tem finalidade exclusivamente informativa e não substitui a análise individual do caso concreto. Para avaliar sua situação específica, consulte um advogado habilitado.*
*Walter Inglez Advocacia e Consultoria — CNPJ 55.880.505/0001-80*

## Formato do arquivo

- Extensão: .md
- Nome: slug em kebab-case, descritivo, até 60 caracteres, sem acentos
- Salvar em: src/content/articles/[slug].md
- readingTime: até 800 palavras = 4 min | 800 a 1.000 palavras = 5 min

## Tabela comparativa obrigatória

Inserir após o H2 "Contexto jurídico". Mínimo 4 linhas de dados. Formato:

| Situação | Postura reativa | Leitura estratégica |
|---|---|---|
| [linha 1] | [dado] | [dado] |
| [linha 2] | [dado] | [dado] |
| [linha 3] | [dado] | [dado] |
| [linha 4] | [dado] | [dado] |

## Regra de equilíbrio editorial

Distribuir os artigos entre as 8 categorias ao longo do tempo. Evitar 3 artigos seguidos na mesma categoria.

## Commit após redação

- Branch: draft
- Mensagem: feat: artigo [slug] — [categoria]
- Não fazer push para main — merge é feito manualmente pelo Walter
