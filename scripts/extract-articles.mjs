import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const articlesDir = join(__dirname, '../src/content/articles');

const files = readdirSync(articlesDir).filter(
  f => f.endsWith('.tsx') && f !== 'index.tsx'
);

const articles = files.map(file => {
  const content = readFileSync(join(articlesDir, file), 'utf-8');

  const slug = file.replace('.tsx', '');
  const title = content.match(/title:\s*["'`]([^"'`]+)["'`]/)?.[1] || slug;
  const description = content.match(/description:\s*["'`]([^"'`]+)["'`]/)?.[1] || '';
  const category = content.match(/category:\s*["'`]([^"'`]+)["'`]/)?.[1] || 'Geral';
  const readingTime = parseInt(content.match(/readingTime:\s*(\d+)/)?.[1] || '5');
  const publishedAt = content.match(/publishedAt:\s*["'`]([^"'`]+)["'`]/)?.[1] || new Date().toISOString().split('T')[0];

  // Extrai o corpo JSX como texto simples
  const bodyMatch = content.match(/body:\s*\(\s*<>([\s\S]*?)<\/>\s*\)/);
  const rawBody = bodyMatch?.[1] || '';

  // Converte tags JSX básicas para Markdown
  const markdown = rawBody
    .replace(/<h2>(.*?)<\/h2>/g, '## $1')
    .replace(/<h3>(.*?)<\/h3>/g, '### $1')
    .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
    .replace(/<em>(.*?)<\/em>/g, '*$1*')
    .replace(/<blockquote>\s*([\s\S]*?)\s*<\/blockquote>/g, '> $1')
    .replace(/<li>(.*?)<\/li>/g, '- $1')
    .replace(/<ul>|<\/ul>|<ol>|<\/ol>/g, '')
    .replace(/<p>([\s\S]*?)<\/p>/g, '$1\n')
    .replace(/<aside[\s\S]*?<\/aside>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return {
    slug,
    title,
    summary: description,
    content: markdown,
    category,
    readingTimeMinutes: readingTime,
    publishedAt,
  };
});

writeFileSync('/tmp/articles-payload.json', JSON.stringify({ articles }, null, 2));
console.log(`Extraídos ${articles.length} artigos para /tmp/articles-payload.json`);
