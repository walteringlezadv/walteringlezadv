/**
 * Canais de contato institucionais.
 *
 * Fonte única para WhatsApp e e-mail. Qualquer botão/CTA que abra
 * um desses canais deve importar daqui — para garantir consistência
 * de número, endereço e mensagem inicial pré-preenchida.
 */

export const WHATSAPP_NUMBER = "5511914988818";
export const WHATSAPP_DISPLAY = "+55 11 91498-8818";

export const EMAIL_ADDRESS = "contato@walteringlezadv.com.br";

export const WHATSAPP_MESSAGE = `Olá, sou empresário e estou com pressão bancária.

Gostaria de iniciar a triagem do meu passivo.

Empresa:
Faturamento médio:
Tipo de dívida:
Situação atual:`;

export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const EMAIL_SUBJECT = "Triagem";
export const EMAIL_BODY =
  "Olá, segue informações iniciais para triagem:\n\nEmpresa:\nFaturamento médio:\nTipo de dívida:\nSituação atual:";

export const EMAIL_HREF = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
  EMAIL_SUBJECT,
)}&body=${encodeURIComponent(EMAIL_BODY)}`;
