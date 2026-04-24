import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingWhatsAppButton } from "@/components/cta/FloatingWhatsAppButton";
import { TriagemDialogProvider } from "@/components/cta/TriagemDialog";

/**
 * Wrapper aplicado em TODAS as páginas — incluindo o blog.
 * Garante que o blog seja continuação orgânica do site, nunca um microsite.
 *
 * Envolve toda a árvore com TriagemDialogProvider para que qualquer CTA
 * "Solicitar triagem" (header, home, páginas internas, blog) abra o
 * mesmo modal qualificado de triagem.
 */
export const SiteShell = ({ children }: { children: ReactNode }) => {
  return (
    <TriagemDialogProvider>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingWhatsAppButton />
      </div>
    </TriagemDialogProvider>
  );
};
