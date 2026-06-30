# PROMPT RADAR BLOG — Colar na nova conversa do projeto Blog Passivos

---

Radar.

Houve publicação nova desde o último registro? Antes de começar, verificar o estado real da cobertura em DUAS fontes, na ordem abaixo.

Tarefa: varredura editorial semanal para o blog de passivos bancários. Entregar tabela com 5–8 pautas de artigo, cada uma com:

| Tema | Dispositivo legal central | Ângulo proposto | Categoria sugerida | Fonte primária + data | Já coberto? (slug ou "não") |

Roteiro de execução:

1. Verificar o estado real da cobertura em DUAS fontes, nesta ordem:
   a) Listagem de artigos publicados em https://blog.walteringlezadv.com.br/
      (fonte de fato — é o que o Cloudflare está servindo a partir de `main`)
   b) REGISTRO em https://raw.githubusercontent.com/walteringlezadv/walteringlezadv/main/docs/REGISTRO_EDITORIAL.md
      (fonte declarada — pode estar em cache de CDN ou faltar merge)
   Comparar: a publicação mais recente do /blog deve corresponder à primeira linha do REGISTRO.
   Se houver divergência, /blog prevalece como verdade de fato. Alertar Walter antes de prosseguir
   e listar as linhas faltantes para ele decidir se atualiza o REGISTRO.
2. Varrer fontes jurídicas dos últimos 60 dias:
   - STJ (stj.jus.br): decisões, informativos, temas repetitivos
   - BCB (bcb.gov.br): resoluções, circulares, séries com impacto em crédito PJ
   - DOU: normas novas com reflexo em passivo bancário empresarial
   - Conjur: doutrina e jurisprudência recente
3. Para cada sinal encontrado, verificar contra o REGISTRO (já cruzado com /blog no passo 1):
   - O dispositivo legal central já foi coberto? Se sim, anotar o slug.
   - A categoria repete as 2 publicações mais recentes? Se sim, sinalizar.
   - O ângulo central é vizinho de algum artigo existente? Se sim, explicar a diferença.
4. Montar a tabela com 5–8 pautas, priorizando sinais jurídico-normativos de fonte primária.
5. Após a tabela, listar sinais coletados que não entraram, com motivo da exclusão.

Categorias válidas: CCB · Capital de Giro · Garantias · Renegociação · Execução Bancária · Gestão de Passivos · Contratos Bancários · Patrimônio.

Regras:
- Não inventar dado numérico nem número de processo/Tema — só citar o que a fonte confirmar.
- Não escolher tema — apenas propor. Walter decide.
- Não redigir artigo — apenas entregar a tabela de pautas.
- Se uma fonte não retornar resultado útil, registrar "fonte sem retorno" e seguir.
