/**
 * Helpers de SEO/AEO.
 *
 * Centraliza meta tags, Open Graph, Twitter e JSON-LD para evitar
 * inconsistências entre páginas. Consumido pelo componente <PageSeo />.
 */

import type { Article } from "@/types/article";

export type PageSeoInput = {
  title: string;
  description: string;
  /** Caminho canônico relativo, ex.: "/sobre". Será convertido em URL absoluta. */
  path?: string;
  /** URL absoluta da imagem para Open Graph/Twitter. */
  image?: string;
  /** Tipo Open Graph (default: "website"). Use "article" em posts. */
  type?: "website" | "article";
};

const SITE_NAME = "Walter Inglez";
// Base canônica do site. Ajustar quando o domínio definitivo for conectado.
const SITE_URL = "https://blog.walteringlezadv.com.br";
// Imagem institucional padrão para Open Graph/Twitter quando a página não fornece uma própria.
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export function buildCanonicalUrl(path?: string): string {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageTitle(title: string): string {
  // Mantém o título <60 chars sempre que possível
  return title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Walter Inglez – Advocacia e Consultoria",
    url: "https://walteringlezadv.com.br",
    logo: DEFAULT_OG_IMAGE,
    description:
      "Advocacia especializada em direito bancário do consumidor e gestão de passivos bancários.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fortaleza",
      addressRegion: "CE",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.instagram.com/walteringlezadv",
      "https://www.facebook.com/walteringlezadv",
    ],
  };
}

export function articleJsonLd(article: Article) {
  const canonical = buildCanonicalUrl(`/blog/${article.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.seo?.title ?? article.title,
    description: article.seo?.description ?? article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      "@type": "Person",
      name: "Walter Inglez",
      url: "https://walteringlezadv.com.br/sobre",
    },
    publisher: organizationJsonLd(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };
}

export { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE };
