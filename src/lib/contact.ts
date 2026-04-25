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

export const WHATSAPP_MESSAGE =
  "Olá, sou empresário e estou com pressão bancária. Gostaria de iniciar a triagem do meu passivo.";

export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const EMAIL_SUBJECT = "Triagem Jurídica";
export const EMAIL_BODY = "Olá, gostaria de iniciar uma triagem do meu passivo.";

/**
 * Link de composição de e-mail via Gmail Web.
 *
 * Substitui `mailto:` porque, em muitos navegadores desktop, o `mailto`
 * não tem cliente associado e o clique não produz efeito visível.
 * Abrir Gmail compose em nova aba garante feedback imediato e funciona
 * em qualquer navegador moderno, mesmo para usuários sem cliente nativo.
 */
export const EMAIL_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}&su=${encodeURIComponent(
  EMAIL_SUBJECT,
)}&body=${encodeURIComponent(EMAIL_BODY)}`;

/** Constrói um link Gmail compose com assunto/corpo customizados. */
export const buildEmailHref = (subject: string, body: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}&su=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
