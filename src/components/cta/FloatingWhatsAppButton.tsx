import { MessageCircle } from "lucide-react";
import { WHATSAPP_HREF } from "@/lib/contact";

/**
 * Botão flutuante persistente de WhatsApp.
 *
 * Renderizado dentro do SiteShell, portanto visível em todas as rotas.
 * Reutiliza o mesmo link e mensagem pré-preenchida da triagem para
 * manter consistência institucional com /proximo-passo e /contato.
 */
export const FloatingWhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Iniciar triagem pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 ring-1 ring-primary/40 transition-transform hover:scale-[1.03] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:bottom-6 md:right-6"
    >
      <MessageCircle className="h-5 w-5" aria-hidden />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
      <span className="sr-only sm:hidden">Falar no WhatsApp</span>
    </a>
  );
};
