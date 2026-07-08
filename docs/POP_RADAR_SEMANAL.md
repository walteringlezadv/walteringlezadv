# POP — RADAR EDITORIAL SEMANAL
## Walter Inglez Advocacia e Consultoria | Blog Passivos Bancários

**Versão:** 2.0 | **Vigência:** julho/2026

---

## VISÃO GERAL

O Radar Semanal é o ponto de partida do pipeline editorial. Ocorre toda **terça-feira** e alimenta os três artigos da semana (quinta + sábado + segunda). É composto por três agentes com papéis distintos e não intercambiáveis.

| Agente | Papel | Ferramenta |
|---|---|---|
| **Manus** | Varredura: busca sinais jurídicos e comportamentais na web | manus.im |
| **Gary (Claude)** | Curadoria: cruza sinais com REGISTRO, seleciona slots, define pauta | Este projeto |
| **Walter** | Executor: cola comandos, transfere outputs entre agentes, publica | Terminal / Manus / Claude |

---

## FLUXO PASSO A PASSO

### ETAPA 1 — Gary entrega o comando Manus (início da semana anterior ou na própria terça)

**Gatilho:** Walter abre nova conversa neste projeto e digita: `Radar.`

**Gary faz:**
1. Verifica publicações novas desde o último registro (DUAS fontes: blog.walteringlezadv.com.br + REGISTRO_EDITORIAL.md no GitHub)
2. Entrega o `PROMPT_MANUS_RADAR_SEMANAL.md` formatado e pronto para copiar

**Gary cobra de Walter:** "Você rodou o Manus esta semana? Traz o output quando tiver."

---

### ETAPA 2 — Walter roda o Manus (terça-feira)

**Walter faz:**
1. Abre manus.im → Nova tarefa
2. Cola o conteúdo do `PROMPT_MANUS_RADAR_SEMANAL.md` no campo de tarefa
3. Aguarda Manus entregar as DUAS tabelas (Blog + Instagram)
4. Copia o output completo do Manus e traz para este projeto (Gary)

**Tempo estimado Manus:** 5–15 minutos dependendo de disponibilidade de fontes.

---

### ETAPA 3 — Gary processa o output Manus (ainda terça)

**Quando Walter colar o output Manus aqui, Gary faz:**

**Para o Blog:**
1. Cruza cada pauta Manus com o REGISTRO_EDITORIAL.md (dispositivo legal já coberto?)
2. Verifica rotação de categorias (nenhuma das 2 últimas categorias pode repetir no mesmo ciclo)
3. Verifica ângulo central (vizinhança com artigos existentes?)
4. Seleciona 3 pautas aprovadas → atribui aos slots: Quinta / Sábado / Segunda
5. Entrega tabela final Blog com slots definidos

**Para o Instagram:**
1. Valida as pautas Manus contra critérios OAB (sem promessa de resultado, sem urgência artificial)
2. Seleciona 3–5 pautas prioritárias para o ciclo
3. Entrega tabela final Instagram

**Gary NÃO faz nesta etapa:** redigir artigo, roteiro ou legenda. Apenas curadoria.

---

### ETAPA 4 — Walter distribui os outputs

**Walter faz:**
1. Tabela Blog → permanece neste projeto (Gary redige os artigos quinta/sábado/segunda)
2. Tabela Instagram → leva para o projeto "WI — Instagram Passivos" para produção de roteiros

---

### ETAPAS 5–8 — Produção semanal (quinta + sábado + segunda)

**Gatilho:** Walter abre nova conversa ou continua esta e digita: `Artigo [slot].`

**Gary entrega por artigo:**
- Arquivo `.md` completo pronto para `src/content/articles/`
- Bloco 1: comando terminal para upload do artigo
- Bloco 2: comando terminal para atualizar `REGISTRO_EDITORIAL.md`
- Linha REGISTRO formatada (Walter atualiza via web editor)
- Package LinkedIn: texto do post + especificação card portrait (1080×1350) + landscape (1200×630) + alt text + comentário fixado com link

**Walter faz:** executa os comandos, publica, traz confirmação para Gary atualizar memória.

---

## CHECKLIST GARY — INÍCIO DE CADA SESSÃO

Antes de qualquer trabalho editorial, Gary verifica obrigatoriamente:

- [ ] Houve publicação nova desde o último registro?
- [ ] REGISTRO_EDITORIAL.md está sincronizado com o blog.walteringlezadv.com.br?
- [ ] Qual a categoria dos 2 últimos artigos publicados? (restrição de rotação)
- [ ] Radar desta semana já foi rodado no Manus?

---

## COBRANÇAS AUTOMÁTICAS DE GARY

Gary deve cobrar Walter proativamente nas seguintes situações:

| Situação | O que Gary faz |
|---|---|
| Walter abre conversa na terça sem mencionar Radar | Gary pergunta: "É terça — o Radar Manus desta semana foi rodado?" |
| Walter menciona artigo sem ter trazido output Manus | Gary pergunta: "Antes de redigir, você trouxe o Radar desta semana?" |
| Walter traz output Manus sem tabela Blog ou sem tabela Instagram | Gary sinaliza a ausência e pede o complemento antes de processar |
| Passou da terça sem output Manus | Gary sinaliza atraso e oferece rodar varredura interna emergencial se urgente |

---

## ONDE FICAM OS ARQUIVOS

| Arquivo | Local |
|---|---|
| `PROMPT_MANUS_RADAR_SEMANAL.md` | Projeto Claude "WI — Blog" (este projeto) + `docs/` no GitHub |
| `PROMPT_EDITORIAL.md` | `docs/` no GitHub |
| `REGISTRO_EDITORIAL.md` | `docs/` no GitHub |
| `REGISTRO_LINKEDIN.md` | `docs/` no GitHub |
| `PAUTA_SEMANAL.md` | `docs/` no GitHub |
| `POP_RADAR_SEMANAL.md` (este arquivo) | Projeto Claude "WI — Blog" + `docs/` no GitHub |

---

## REGRAS DE OURO

1. Manus pesquisa. Gary cuida. Walter executa. Nenhum papel invade o outro.
2. Nada vai para artigo sem passar pela curadoria Gary (REGISTRO + rotação + ângulo).
3. Nada irreversível (push, PR, publicação) sem confirmação explícita de Walter.
4. Se Manus falhar ou não entregar uma tabela: Gary roda varredura interna emergencial com PROMPT_RADAR_BLOG.md (modo de contingência).
5. MEI excluído de toda pauta em todos os canais.
