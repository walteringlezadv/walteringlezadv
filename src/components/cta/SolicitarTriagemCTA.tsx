import { Button, type ButtonProps } from "@/components/ui/button";
import { INSTITUTIONAL_LABELS } from "@/lib/routes";
import { WHATSAPP_HREF } from "@/lib/contact";
import { cn } from "@/lib/utils";

/**
 * CTA institucional canônico — ÚNICO componente que renderiza o botão
 * de conversão "Solicitar triagem" em todo o site.
 *
 * Regra: nenhuma página pode instanciar esse rótulo manualmente.
 * Sempre use <SolicitarTriagemCTA />.
 *
 * Comportamento: abre DIRETAMENTE o WhatsApp com mensagem pré-preenchida
 * (fonte única em src/lib/contact.ts). Não há mais navegação intermediária
 * para /proximo-passo — a página /proximo-passo continua existindo no
 * menu como conteúdo institucional, mas o CTA de conversão vai direto
 * ao canal de contato.
 */
type Variant = "primary" | "secondary" | "inline";

type Props = {
  variant?: Variant;
  size?: ButtonProps["size"];
  className?: string;
};

export const SolicitarTriagemCTA = ({
  variant = "primary",
  size = "default",
  className,
}: Props) => {
  if (variant === "inline") {
    return (
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "text-primary underline-offset-4 hover:underline",
          className,
        )}
      >
        {INSTITUTIONAL_LABELS.ctaSolicitarTriagem}
      </a>
    );
  }

  const buttonVariant: ButtonProps["variant"] =
    variant === "secondary" ? "outline" : "default";

  return (
    <Button asChild variant={buttonVariant} size={size} className={className}>
      <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
        {INSTITUTIONAL_LABELS.ctaSolicitarTriagem}
      </a>
    </Button>
  );
};
