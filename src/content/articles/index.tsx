import type { Article } from "@/types/article";
import capitalDeGiro from "./capital-de-giro-empresarial-risco-passivo-bancario";
import ccbOriginalExecucaoStj from "./ccb-original-execucao-stj-maio-2026";
import quandoRenegociar from "./quando-renegociar-passivo-bancario";
import clausulasSilenciosas from "./clausulas-silenciosas-contratos-bancarios";
import bancoOfereceuRenegociacao from "./banco-ofereceu-renegociacao-o-que-analisar-antes-de-aceitar";

/**
 * Agregador de artigos do blog.
 *
 * Para publicar um novo artigo:
 * 1. Crie src/content/articles/<slug>.tsx exportando default um Article.
 * 2. Importe-o aqui e adicione ao array `articles`.
 */
export const articles: Article[] = [
  capitalDeGiro,
  ccbOriginalExecucaoStj,
  bancoOfereceuRenegociacao,
  quandoRenegociar,
  clausulasSilenciosas,
];
