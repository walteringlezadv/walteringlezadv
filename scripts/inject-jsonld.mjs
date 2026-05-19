/**
 * inject-jsonld.mjs
 *
 * Gera dist/blog/[slug]/index.html para cada artigo, injetando os blocos
 * JSON-LD (Article + Organization) no <head> do shell SPA.
 *
 * Substitui react-snap para este fim: zero dependência de browser headless,
 * funciona em qualquer CI incluindo Vercel.
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const articlesDir = join(__dirname, "../src/content/articles");
const distDir = join(__dirname, "../dist");
const SITE_URL = "https://blog.walteringlezadv.com.br";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

// ---------------------------------------------------------------------------
// Schema builders (espelham src/lib/seo.ts)
// ---------------------------------------------------------------------------

function organizationJsonLd() {
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

function articleJsonLd(article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.seoTitle ?? article.title,
    description: article.seoDescription ?? article.excerpt,
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
      "@id": `${SITE_URL}/blog/${article.slug}`,
    },
  };
}

// ---------------------------------------------------------------------------
// Extração de metadados dos arquivos .tsx via regex
// Suporta valores inline ("field: "value"") e na linha seguinte:
//   field:
//     "value"
// ---------------------------------------------------------------------------

function extract(content, field) {
  const m = content.match(new RegExp(`${field}:\\s+"([^"]+)"`));
  return m?.[1] ?? null;
}

function extractSeoField(content, field) {
  const seoBlock = content.match(/seo:\s*\{([\s\S]*?)\}/)?.[1];
  if (!seoBlock) return null;
  return extract(seoBlock, field);
}

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------

const indexHtml = readFileSync(join(distDir, "index.html"), "utf-8");

const files = readdirSync(articlesDir).filter(
  (f) => f.endsWith(".tsx") && f !== "index.tsx"
);

let count = 0;
const errors = [];

for (const file of files) {
  const content = readFileSync(join(articlesDir, file), "utf-8");

  const slug = extract(content, "slug");
  if (!slug) {
    errors.push(`${file}: slug não encontrado — ignorado`);
    continue;
  }

  const article = {
    slug,
    title:          extract(content, "title")       ?? "",
    excerpt:        extract(content, "excerpt")      ?? "",
    publishedAt:    extract(content, "publishedAt")  ?? "",
    updatedAt:      extract(content, "updatedAt")    ?? undefined,
    seoTitle:       extractSeoField(content, "title"),
    seoDescription: extractSeoField(content, "description"),
  };

  const schemas = [articleJsonLd(article), organizationJsonLd()];
  const scriptTags = schemas
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join("\n  ");

  const html = indexHtml.replace("</head>", `  ${scriptTags}\n</head>`);

  const outDir = join(distDir, "blog", slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html);
  count++;
}

if (errors.length) errors.forEach((e) => console.warn(`[inject-jsonld] WARN: ${e}`));
console.log(`inject-jsonld: ${count} artigos → dist/blog/[slug]/index.html`);
