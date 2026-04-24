/**
 * Constrói a mensagem de triagem qualificada (texto puro), formatada
 * para envio por WhatsApp ou corpo de e-mail. Mantém os mesmos campos
 * do formulário em 3 etapas — fonte única para os dois canais.
 */

export type TriagemFormData = {
  // Etapa 1
  razaoSocial: string;
  responsavel: string;
  whatsapp: string;
  // Etapa 2
  tipoDivida: string;
  banco: string;
  valorPassivo: string;
  garantia: "Sim" | "Não" | "Não sei" | "";
  // Etapa 3
  propostaBanco: "Sim" | "Não" | "";
  execucaoCobranca: "Sim" | "Não" | "Não sei" | "";
  descricao: string;
};

export const EMPTY_TRIAGEM: TriagemFormData = {
  razaoSocial: "",
  responsavel: "",
  whatsapp: "",
  tipoDivida: "",
  banco: "",
  valorPassivo: "",
  garantia: "",
  propostaBanco: "",
  execucaoCobranca: "",
  descricao: "",
};

const dash = (v: string) => (v.trim() === "" ? "—" : v.trim());

export const buildTriagemMessage = (data: TriagemFormData): string => {
  return [
    "Olá, gostaria de iniciar a triagem qualificada do meu passivo bancário.",
    "",
    "— Identificação —",
    `Empresa / Razão social: ${dash(data.razaoSocial)}`,
    `Responsável: ${dash(data.responsavel)}`,
    `WhatsApp: ${dash(data.whatsapp)}`,
    "",
    "— Passivo —",
    `Tipo de dívida bancária: ${dash(data.tipoDivida)}`,
    `Banco envolvido: ${dash(data.banco)}`,
    `Valor aproximado do passivo: ${dash(data.valorPassivo)}`,
    `Existe garantia? ${dash(data.garantia)}`,
    "",
    "— Situação atual —",
    `Banco já fez proposta? ${dash(data.propostaBanco)}`,
    `Há execução, cobrança ou bloqueio? ${dash(data.execucaoCobranca)}`,
    `Descrição do caso: ${dash(data.descricao)}`,
  ].join("\n");
};
