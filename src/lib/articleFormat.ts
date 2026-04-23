/**
 * Helpers de formatação para metadados editoriais do blog.
 *
 * Centraliza datas e tempo de leitura para evitar inconsistências
 * entre o índice e a página do artigo.
 */

const DATE_FORMATTER = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export function formatPublishedDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return DATE_FORMATTER.format(d);
}

export function formatReadingTime(minutes: number): string {
  const safe = Math.max(1, Math.round(minutes));
  return `${safe} min de leitura`;
}
