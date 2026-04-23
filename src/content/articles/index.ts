import type { Article } from "@/types/article";

/**
 * Agregador de artigos do blog.
 *
 * Para publicar um novo artigo:
 * 1. Crie src/content/articles/<slug>.ts exportando um objeto Article.
 * 2. Importe-o aqui e adicione ao array `articles`.
 *
 * Vazio por design na Fase 1 — artigos-semente entram na Fase 3.
 */
export const articles: Article[] = [];
