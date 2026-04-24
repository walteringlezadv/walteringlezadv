import { Button, type ButtonProps } from "@/components/ui/button";
import { INSTITUTIONAL_LABELS } from "@/lib/routes";
import { useTriagemDialog } from "@/components/cta/TriagemDialog";
import { cn } from "@/lib/utils";

/**
 * CTA institucional canônico — ÚNICO componente que renderiza o botão
 * de conversão "Solicitar triagem" em todo o site.
 *
 * Comportamento: abre o modal de Triagem Qualificada (3 etapas).
 * O envio final, dentro do modal, oferece WhatsApp (primário) e
 * e-mail (secundário) com mensagem pré-preenchida a partir dos
 * dados do formulário.
 *
 * O botão flutuante de WhatsApp segue como canal direto/persistente
 * separado — ele NÃO usa este CTA.
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
  const { open } = useTriagemDialog();
  const label = INSTITUTIONAL_LABELS.ctaSolicitarTriagem;

  if (variant === "inline") {
    return (
      <button
        type="button"
        onClick={open}
        className={cn(
          "text-primary underline-offset-4 hover:underline",
          className,
        )}
      >
        {label}
      </button>
    );
  }

  const buttonVariant: ButtonProps["variant"] =
    variant === "secondary" ? "outline" : "default";

  return (
    <Button
      type="button"
      variant={buttonVariant}
      size={size}
      className={className}
      onClick={open}
    >
      {label}
    </Button>
  );
};
