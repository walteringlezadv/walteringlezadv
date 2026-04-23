import type { ReactNode } from "react";

/**
 * Contrato estável para artigos do blog.
 *
 * Este tipo é o schema canônico do conteúdo editorial.
 * Quando migrarmos para um CMS (ex.: Lovable Cloud), a tabela de artigos
 * deve refletir exatamente este contrato — apenas o loader será reescrito.
 */
export type Article = {
  /** Identificador único, kebab-case, estável após publicação. Compõe a URL. */
  slug: string;
  /** Título do artigo (usado no <h1>). */
  title: string;
  /** Descrição curta (meta description e dek). */
  description: string;
  /** Data de publicação em formato ISO 8601. */
  publishedAt: string;
  /** Data da última atualização em formato ISO 8601, se houver. */
  updatedAt?: string;
  /** Autor do artigo. */
  author: {
    name: string;
    role?: string;
  };
  /** Categoria principal (usada para filtros). */
  category: string;
  /** Tags secundárias. */
  tags: string[];
  /** Tempo estimado de leitura em minutos. */
  readingTime: number;
  /** Imagem de capa opcional. */
  cover?: {
    src: string;
    alt: string;
  };
  /** Resumo exibido em cards e listagens. */
  excerpt: string;
  /** Corpo do artigo. */
  body: ReactNode | string;
  /** Overrides opcionais de SEO. */
  seo?: {
    title?: string;
    description?: string;
    canonical?: string;
  };
};
