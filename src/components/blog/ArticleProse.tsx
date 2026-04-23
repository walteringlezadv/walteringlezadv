import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Wrapper de prose para o corpo do artigo.
 *
 * Não introduz novo sistema tipográfico — apenas aplica, de forma
 * controlada, a hierarquia já validada (Cormorant Garamond para
 * títulos, Inter para corpo) ao conteúdo longo, usando exclusivamente
 * tokens semânticos do design system institucional.
 */
type Props = {
  children: ReactNode;
  className?: string;
};

export const ArticleProse = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        // Corpo
        "text-base leading-[1.75] text-foreground/90 md:text-lg",
        // Parágrafos
        "[&>p]:mt-6 [&>p:first-child]:mt-0",
        // Títulos hierárquicos (herdam font-serif via base)
        "[&>h2]:mt-14 [&>h2]:text-3xl [&>h2]:leading-tight [&>h2]:tracking-tight [&>h2]:text-foreground md:[&>h2]:text-4xl",
        "[&>h3]:mt-10 [&>h3]:text-2xl [&>h3]:leading-snug [&>h3]:text-foreground md:[&>h3]:text-3xl",
        // Listas
        "[&>ul]:mt-6 [&>ul]:space-y-2 [&>ul]:pl-5 [&>ul>li]:list-disc [&>ul>li]:marker:text-primary/70",
        "[&>ol]:mt-6 [&>ol]:space-y-2 [&>ol]:pl-5 [&>ol>li]:list-decimal [&>ol>li]:marker:text-muted-foreground",
        // Citações
        "[&>blockquote]:mt-8 [&>blockquote]:border-l-2 [&>blockquote]:border-primary/60 [&>blockquote]:pl-6 [&>blockquote]:font-serif [&>blockquote]:text-xl [&>blockquote]:italic [&>blockquote]:text-foreground/95",
        // Inline
        "[&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline",
        "[&_strong]:font-medium [&_strong]:text-foreground",
        "[&_em]:italic",
        // Separadores
        "[&>hr]:my-12 [&>hr]:border-border/60",
        className,
      )}
    >
      {children}
    </div>
  );
};
