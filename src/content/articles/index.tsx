import type { Article } from "@/types/article";
import creditoAmpliadoEmpresas from "./credito-ampliado-empresas-risco-passivo-bancario-maio-2026";
import creditoEmpresarialRestrito from "./credito-empresarial-restrito-leitura-passivo-maio-2026";
import tema1288StjAlienacaoFiduciaria from "./tema-1288-stj-alienacao-fiduciaria-risco-imovel-garantia-maio-2026";
import tema1409StjPenhoraFaturamento from "./tema-1409-stj-penhora-faturamento-execucao-bancaria-maio-2026";
import tema1210StjRiscoPatrimonialSocios from "./tema-1210-stj-risco-patrimonial-socios-maio-2026";
import capitalDeGiro from "./capital-de-giro-empresarial-risco-passivo-bancario";
import ccbOriginalExecucaoStj from "./ccb-original-execucao-stj-maio-2026";
import quandoRenegociar from "./quando-renegociar-passivo-bancario";
import clausulasSilenciosas from "./clausulas-silenciosas-contratos-bancarios";
import bancoOfereceuRenegociacao from "./banco-ofereceu-renegociacao-o-que-analisar-antes-de-aceitar";
import prescricaoIntercorrente from "./prescricao-intercorrente-limita-execucao-bancaria-abril-2026";
import stjAdmiteExecucaoCcb from "./stj-admite-execucao-ccb-documento-digitalizado-abril-2026";
import garantiasBancarias from "./garantias-bancarias-transferem-risco-patrimonio-socios-abril-2026";
import confissaoDivida from "./confissao-divida-pode-acelerar-execucao-empresa-abril-2026";
import recuperacaoCredito from "./recuperacao-credito-estrategia-patrimonial-precisa-abril-2026";

/**
 * Agregador de artigos do blog.
 *
 * Para publicar um novo artigo:
 * 1. Crie src/content/articles/<slug>.tsx exportando default um Article.
 * 2. Importe-o aqui e adicione ao array `articles`.
 */
export const articles: Article[] = [
  creditoAmpliadoEmpresas,
  creditoEmpresarialRestrito,
  tema1288StjAlienacaoFiduciaria,
  tema1409StjPenhoraFaturamento,
  tema1210StjRiscoPatrimonialSocios,
  capitalDeGiro,
  ccbOriginalExecucaoStj,
  bancoOfereceuRenegociacao,
  quandoRenegociar,
  clausulasSilenciosas,
  prescricaoIntercorrente,
  stjAdmiteExecucaoCcb,
  garantiasBancarias,
  confissaoDivida,
  recuperacaoCredito,
];
