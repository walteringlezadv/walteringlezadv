import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const articlesDir = join(__dirname, "../src/content/articles");
const BASE_URL = "https://blog.walteringlezadv.com.br";

const STATIC_PAGES = [
  { loc: "/",             lastmod: new Date().toISOString().split("T")[0], changefreq: "weekly",  priority: "1.0" },
  { loc: "/blog",         lastmod: new Date().toISOString().split("T")[0], changefreq: "weekly",  priority: "0.9" },
  { loc: "/como-funciona",lastmod: new Date().toISOString().split("T")[0], changefreq: "monthly", priority: "0.7" },
  { loc: "/sobre",        lastmod: new Date().toISOString().split("T")[0], changefreq: "monthly", priority: "0.7" },
  { loc: "/contato",      lastmod: new Date().toISOString().split("T")[0], changefreq: "monthly", priority: "0.6" },
];

const files = readdirSync(articlesDir).filter(
  (f) => f.endsWith(".tsx") && f !== "index.tsx"
);

const articleUrls = files
  .map((file) => {
    const content = readFileSync(join(articlesDir, file), "utf-8");
    const slug = content.match(/slug:\s*["'`]([^"'`]+)["'`]/)?.[1] ?? file.replace(".tsx", "");
    const publishedAt = content.match(/publishedAt:\s*["'`]([^"'`]+)["'`]/)?.[1] ?? new Date().toISOString().split("T")[0];
    return { slug, publishedAt };
  })
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

const urlEntries = [
  ...STATIC_PAGES.map(
    ({ loc, lastmod, changefreq, priority }) => `  <url>
    <loc>${BASE_URL}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  ),
  ...articleUrls.map(
    ({ slug, publishedAt }) => `  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
    <lastmod>${publishedAt}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  ),
].join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const outPath = join(__dirname, "../public/sitemap.xml");
writeFileSync(outPath, xml);
console.log(`sitemap.xml gerado com ${STATIC_PAGES.length} páginas + ${articleUrls.length} artigos → ${outPath}`);
