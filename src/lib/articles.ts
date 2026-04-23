import type { Article } from "@/types/article";
import { articles } from "@/content/articles";

/**
 * Loader e utilitários de artigos.
 *
 * Esta camada isola a origem dos dados. Quando migrarmos para um CMS,
 * apenas as funções abaixo serão reescritas — os consumidores não mudam.
 */

export function getAllArticles(): Article[] {
  // Ordena por data de publicação descendente (mais recente primeiro)
  return [...articles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function searchArticles(query: string): Article[] {
  const q = query.trim().toLowerCase();
  if (!q) return getAllArticles();
  return getAllArticles().filter((a) => {
    return (
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
    );
  });
}

export function filterByCategory(category: string): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(articles.map((a) => a.category))).sort();
}

export function paginate<T>(list: T[], page: number, pageSize: number) {
  const safePage = Math.max(1, page);
  const safeSize = Math.max(1, pageSize);
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / safeSize));
  const start = (safePage - 1) * safeSize;
  return {
    items: list.slice(start, start + safeSize),
    page: safePage,
    pageSize: safeSize,
    total,
    totalPages,
  };
}
