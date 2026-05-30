/**
 * Envia email com o artigo aguardando aprovacao, link do Pull Request e o post LinkedIn correspondente.
 * Executado pelo GitHub Actions apos push de novo artigo no branch draft.
 *
 * Env vars obrigatorias: GMAIL_USER, GMAIL_APP_PASSWORD, PR_URL
 */
import { readFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const articlesDir = join(root, "src/content/articles");

// ── 1. Artigo mais recente ──────────────────────────────────────────────────

const files = readdirSync(articlesDir).filter(
  (f) => f.endsWith(".tsx") && f !== "index.tsx"
);

const articles = files.map((file) => {
  const content = readFileSync(join(articlesDir, file), "utf-8");
  const slug        = content.match(/slug:\s*["'`]([^"'`]+)["'`]/)?.[1] ?? file.replace(".tsx", "");
  const title       = content.match(/title:\s*["'`\n\s]*([^"'`]+)["'`]/)?.[1]?.trim().replace(/\s+/g, " ") ?? slug;
  const publishedAt = content.match(/publishedAt:\s*["'`]([^"'`]+)["'`]/)?.[1] ?? "2000-01-01";
  return { slug, title, publishedAt, content };
});

articles.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
const latest = articles[0];

if (!latest) {
  console.error("Nenhum artigo encontrado.");
  process.exit(1);
}

console.log(`Artigo mais recente: ${latest.slug} (${latest.publishedAt})`);

// ── 2. Corpo HTML do artigo ─────────────────────────────────────────────────

const bodyMatch = latest.content.match(/body:\s*\(\s*<>([\s\S]*?)<\/>\s*\)/);
const rawJsx = bodyMatch?.[1] ?? "";

const articleHtml = rawJsx
  .replace(/<h2>([\s\S]*?)<\/h2>/g, "<h2 style='color:#003732;margin-top:2em'>$1</h2>")
  .replace(/<h3>([\s\S]*?)<\/h3>/g, "<h3 style='color:#003732;margin-top:1.5em'>$1</h3>")
  .replace(/<strong>([\s\S]*?)<\/strong>/g, "<strong>$1</strong>")
  .replace(/<em>([\s\S]*?)<\/em>/g, "<em>$1</em>")
  .replace(/<blockquote>([\s\S]*?)<\/blockquote>/g,
    "<blockquote style='border-left:3px solid #003732;padding-left:1em;color:#555;margin:1.5em 0'>$1</blockquote>")
  .replace(/<aside[\s\S]*?<\/aside>/g, "")
  .replace(/<ul>([\s\S]*?)<\/ul>/g, "<ul style='padding-left:1.5em'>$1</ul>")
  .replace(/<ol>([\s\S]*?)<\/ol>/g, "<ol style='padding-left:1.5em'>$1</ol>")
  .replace(/<li>([\s\S]*?)<\/li>/g, "<li style='margin-bottom:.5em'>$1</li>")
  .replace(/<p>([\s\S]*?)<\/p>/g, "<p style='margin:1em 0;line-height:1.7'>$1</p>")
  .replace(/{\/\*[\s\S]*?\*\/}/g, "")
  .replace(/<[^>]+>/g, "")
  .trim();

// ── 3. Post LinkedIn correspondente ────────────────────────────────────────

const linkedinFiles = readdirSync(root).filter(
  (f) => f.startsWith("linkedin_") && f.endsWith(".md")
);

const slugUnderscored = latest.slug.replace(/-/g, "_");

let linkedinContent = "";
const match = linkedinFiles.find((f) => {
  const key = f.replace("linkedin_", "").replace(".md", "");
  return slugUnderscored.includes(key);
});

if (match) {
  linkedinContent = readFileSync(join(root, match), "utf-8");
  console.log(`Post LinkedIn encontrado: ${match}`);
} else {
  console.warn("Nenhum arquivo LinkedIn encontrado para este artigo. Continuando sem ele.");
}

const linkedinHtml = linkedinContent
  .replace(/^# (.+)$/gm, "<h3 style='color:#003732;margin-top:1.5em'>$1</h3>")
  .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
  .replace(/\*(.+?)\*/g, "<em>$1</em>")
  .replace(/^(\d+)\. (.+)$/gm, "<li style='margin-bottom:.5em'>$2</li>")
  .replace(/^- (.+)$/gm, "<li style='margin-bottom:.5em'>$1</li>")
  .replace(/\n{2,}/g, "</p><p style='margin:1em 0;line-height:1.7'>")
  .replace(/^/, "<p style='margin:1em 0;line-height:1.7'>")
  .replace(/$/, "</p>");

// ── 4. Montagem do email ────────────────────────────────────────────────────

const { GMAIL_USER, GMAIL_APP_PASSWORD, PR_URL } = process.env;

if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
  console.error("GMAIL_USER e GMAIL_APP_PASSWORD sao obrigatorios.");
  process.exit(1);
}

const prButton = PR_URL ? `
  <div style="background:#1a2e22;border-radius:8px;padding:1.8em;margin-bottom:2.5em;text-align:center">
    <p style="margin:0 0 1em;color:#f5f0e8;font-size:.75em;letter-spacing:.15em;text-transform:uppercase">Artigo aguardando aprovacao</p>
    <a href="${PR_URL}" style="display:inline-block;background:#c4956a;color:#1a2e22;padding:1em 2.5em;border-radius:6px;text-decoration:none;font-weight:bold;font-family:Georgia,serif;font-size:1.05em">
      Revisar e aprovar artigo
    </a>
    <p style="margin:1.2em 0 0;color:#f5f0e8;font-size:.78em;opacity:.85;line-height:1.5">
      Abra o link, leia o artigo abaixo, e clique em <strong>Merge pull request</strong> no GitHub para publicar.<br>
      Funciona pelo Mac e pelo iPhone.
    </p>
  </div>
` : "";

const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"></head>
<body style="font-family:Georgia,serif;max-width:700px;margin:0 auto;padding:2em;color:#1a1a1a">

  ${prButton}

  <div style="border-bottom:2px solid #003732;padding-bottom:1em;margin-bottom:2em">
    <p style="margin:0;font-size:.8em;text-transform:uppercase;letter-spacing:.15em;color:#888">Walter Inglez Advocacia</p>
    <h1 style="margin:.3em 0 0;color:#003732;font-size:1.6em">${latest.title}</h1>
    <p style="margin:.5em 0 0;font-size:.85em;color:#888">Aguardando aprovacao · sera publicado em /blog/${latest.slug}</p>
  </div>

  ${articleHtml}

  ${linkedinContent ? `
  <div style="border-top:2px solid #e0e0e0;margin-top:3em;padding-top:2em">
    <p style="margin:0 0 1em;font-size:.75em;text-transform:uppercase;letter-spacing:.15em;color:#888">Post LinkedIn</p>
    ${linkedinHtml}
  </div>
  ` : ""}

</body>
</html>`;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
});

await transporter.sendMail({
  from: `"Blog Walter Inglez" <${GMAIL_USER}>`,
  to: "walter.inglezadv@gmail.com",
  subject: `Artigo aguarda aprovacao — ${latest.title}`,
  html,
});

console.log("Email enviado para walter.inglezadv@gmail.com com link do PR ✓");
