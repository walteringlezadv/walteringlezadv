# POP — Publicação de Artigos no Blog

**Walter Inglez Advocacia e Consultoria**
Versão 1.0 — 04/06/2026

---

## Visão geral do pipeline

O Manus (agente de IA) redige e publica artigos automaticamente na branch `draft` do repositório GitHub. Um GitHub Action (`sync-blog.yml`) cria um Pull Request e envia e-mail de notificação. A publicação final depende de aprovação humana (Merge no GitHub). O Cloudflare Pages deploya em ~40 segundos após o Merge.

```
Manus redige → commit na branch draft → GitHub Action cria PR → e-mail chega
→ VOCÊ revisa → Merge → Cloudflare publica → artigo ao vivo
```

---

## Passo 1 — Receber o e-mail

O e-mail chega em `walter.inglezadv@gmail.com` com o assunto:

> **Artigo aguarda aprovacao — [título do artigo]**

Contém o texto completo do artigo e um botão "Revisar e aprovar artigo" que leva ao PR no GitHub.

**Se o e-mail não chegar:** acesse diretamente `github.com/walteringlezadv/walteringlezadv/pulls` e procure o PR aberto.

---

## Passo 2 — Verificar a ficha de dados (60 segundos)

Antes de ler o artigo, vá ao Manus e abra o registro de conclusão da tarefa. Procure a **FICHA DE VERIFICAÇÃO** no final:

```
VERIFICAÇÃO:
Dado 1: [afirmação] | fonte | URL | mês/ano | valor
Dado 2: [afirmação] | fonte | URL | mês/ano | valor
```

**Checklist rápido:**

- [ ] A ficha existe? (Se não existe: NÃO aprove — sinal de que o protocolo anti-alucinação foi ignorado)
- [ ] Os meses citados são plausíveis? (Séries do BCB têm defasagem de ~60 dias. Se hoje é junho, o dado mais recente deve ser março ou abril — nunca maio ou junho)
- [ ] Tem dúvida sobre algum número? Abra a URL da série no BCB e confira em 30 segundos

**Se qualquer dado parecer fabricado:** NÃO faça Merge. Abra nova thread no projeto Gary e peça revisão.

---

## Passo 3 — Revisar o artigo

Clique no link do e-mail ou abra o PR no GitHub. Na aba **Files changed**, leia o artigo verificando:

**Conteúdo:**
- [ ] Tom sóbrio, técnico, sem promessa de resultado
- [ ] Abertura pela cena do empresário (nunca pelo dado jurídico)
- [ ] Tabela comparativa presente (mínimo 4 linhas)
- [ ] FAQ com 4 perguntas
- [ ] Frase final em negrito
- [ ] Referência com link para fonte primária
- [ ] Sem disclaimer no corpo (o layout injeta automaticamente)
- [ ] Sem OAB, CNPJ ou cidades no corpo do texto

**Frontmatter (YAML no topo do arquivo):**
- [ ] `title` com até 80 caracteres
- [ ] `category` é uma das 8 válidas: CCB, Capital de Giro, Garantias, Renegociacao, Execucao Bancaria, Gestao de Passivos, Contratos Bancarios, Patrimonio
- [ ] `publishedAt` com data correta
- [ ] `seo.title` com até 60 caracteres
- [ ] `seo.description` com até 155 caracteres

---

## Passo 4 — Corrigir (se necessário)

Se encontrou erro no artigo:

1. No GitHub, vá ao arquivo na **branch `draft`** (não na `main`)
2. Clique no ícone do lápis (Edit this file)
3. Faça a correção
4. Commit na branch `draft` com mensagem descritiva (ex: `fix: corrige taxa de juros para dado verificado`)
5. O PR existente se atualiza automaticamente com o novo commit
6. Volte ao PR e confira que a correção aparece na aba Files changed
7. Prossiga para o Passo 5

**Importante:** NUNCA edite diretamente na branch `main`. Toda correção passa pela `draft` primeiro.

---

## Passo 5 — Publicar (Merge)

No PR do GitHub:

1. Role até o final da página
2. Clique em **Merge pull request**
3. Clique em **Confirm merge**
4. O Cloudflare Pages detecta o push em `main` e deploya em ~40 segundos

**Verificação pós-publicação:**
- Abra `blog.walteringlezadv.com.br/blog/[slug]` e confirme que o artigo está no ar
- Verifique se links internos (se houver) estão clicáveis

---

## Passo 6 — LinkedIn (opcional, recomendado)

Após publicar no blog:

1. Abra o LinkedIn → Iniciar publicação
2. Cole o texto do post LinkedIn (arquivo entregue por Gary junto com a revisão, ou elabore seguindo o padrão abaixo)
3. Anexe a imagem do card (PNG 1200×675px)
4. Publique

**Padrão do post LinkedIn:**
- 1.000 a 1.300 caracteres
- Estrutura: gancho (1 linha) → problema (2-3 linhas) → insight → orientação → CTA
- CTA: "o link está no perfil" (nunca número de telefone no corpo)
- Tom: sóbrio, direto, sem juridiquês, sem promessa

---

## Situações especiais

### O e-mail aponta para um commit antigo
Normal. O título do PR é fixo (definido na criação), mas o conteúdo acompanha todos os commits feitos na branch `draft`. Abra o PR e verifique a aba Files changed — ela mostra o estado atual.

### Dois PRs abertos ao mesmo tempo
Pode acontecer se há artigos de execuções diferentes. Trate cada PR individualmente. Verifique qual é o mais recente e se ambos estão prontos. Faça Merge um de cada vez.

### O Manus não entregou a ficha de verificação
NÃO publique. A ausência da ficha significa que o protocolo anti-alucinação pode ter sido ignorado. Solicite revisão no projeto Gary antes de aprovar.

### Preciso adicionar link interno para outro artigo
Use a sintaxe markdown: `[texto visível do link](/blog/slug-do-artigo)`. Edite na branch `draft`, commit, e o PR se atualiza.

### O artigo foi publicado com erro
Edite o arquivo diretamente na branch `main` pelo GitHub web editor. O Cloudflare republica em ~40 segundos após o commit.

---

## Referência rápida

| Item | Valor |
|---|---|
| Repositório | `github.com/walteringlezadv/walteringlezadv` |
| Branch de rascunho | `draft` |
| Branch de produção | `main` |
| URL do blog | `blog.walteringlezadv.com.br` |
| E-mail de notificação | `walter.inglezadv@gmail.com` |
| Categorias válidas | CCB, Capital de Giro, Garantias, Renegociacao, Execucao Bancaria, Gestao de Passivos, Contratos Bancarios, Patrimonio |
| Agendamento Manus | Segunda, quinta e sábado às 8h30 (ajustável) |
| Deploy | Cloudflare Pages (~40 segundos após Merge) |
| Padrão editorial completo | `docs/PROMPT_EDITORIAL.md` no repositório |
