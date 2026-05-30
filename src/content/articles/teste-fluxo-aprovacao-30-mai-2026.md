---
title: "Teste técnico — validação do fluxo de aprovação automática"
excerpt: "Artigo de teste para validar o pipeline de criação de Pull Request e envio de e-mail. Não deve ser publicado no blog."
publishedAt: "2026-05-30"
category: "Gestão de Passivos"
tags:
  - teste
  - automação
seo:
  title: "Teste técnico — validação do fluxo"
  description: "Artigo de teste técnico. Não publicar."
---

Este arquivo serve exclusivamente para validar o pipeline de aprovação automática do blog. Quando este conteúdo for processado pelo GitHub Actions, espera-se que três coisas aconteçam em sequência.

## O que o teste valida

A primeira validação é o disparo do workflow `sync-blog.yml`. Como o arquivo está sendo adicionado ao branch `draft` com a extensão `.md` em `src/content/articles/`, o gatilho deve ser acionado automaticamente.

A segunda validação é a criação automática do Pull Request de `draft` para `main`, sem nenhuma intervenção manual.

A terceira validação é o envio do e-mail para `walter.inglezadv@gmail.com`, contendo o botão **Revisar e aprovar artigo** apontando diretamente para o PR criado, além do corpo do artigo e dos metadados.

## Tabela de elementos visuais testados

| Elemento | Renderização esperada |
|---|---|
| Título e excerpt do frontmatter | Cabeçalho do e-mail com categoria |
| Subtítulos `##` e `###` | Headers verde-escuro |
| Tabela em markdown | Tabela com bordas e fundo cinza no cabeçalho |
| Listas com `-` | Bullets indentados |

## O que fazer depois do teste

Se as três validações passarem, este Pull Request deve ser **fechado sem merge** e o arquivo deve ser removido do branch `draft`. Em hipótese alguma este conteúdo deve ser publicado em `blog.walteringlezadv.com.br`.

Marcador de identificação para referência: `TESTE-FLUXO-30MAI2026`.
