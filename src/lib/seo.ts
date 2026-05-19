/**
 * Helpers de SEO/AEO.
 *
 * Centraliza meta tags, Open Graph, Twitter e JSON-LD para evitar
 * inconsistências entre páginas. Consumido pelo componente <PageSeo />.
 */

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

/**
 * JSON-LD: Organization (footer global).
 * Aplicação completa fica para a Fase 2, quando a identificação institucional
 * for finalizada (sociedade de advogados + endereços).
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE };
