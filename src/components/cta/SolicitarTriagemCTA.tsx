import { Link } from "react-router-dom";
import { Button, type ButtonProps } from "@/components/ui/button";
import { INSTITUTIONAL_LABELS, ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

/**
 * CTA institucional canônico — ÚNICO componente que renderiza o botão
 * de conversão "Solicitar triagem" em todo o site.
 *
 * Regra: nenhuma página pode instanciar esse rótulo manualmente.
 * Sempre use <SolicitarTriagemCTA />.
 *
 * Aponta sempre para /proximo-passo.
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
      <Link
        to={ROUTES.proximoPasso}
        className={cn(
          "text-primary underline-offset-4 hover:underline",
          className,
        )}
      >
        {INSTITUTIONAL_LABELS.ctaSolicitarTriagem}
      </Link>
    );
  }

  const buttonVariant: ButtonProps["variant"] =
    variant === "secondary" ? "outline" : "default";

  return (
    <Button asChild variant={buttonVariant} size={size} className={className}>
      <Link to={ROUTES.proximoPasso}>
        {INSTITUTIONAL_LABELS.ctaSolicitarTriagem}
      </Link>
    </Button>
  );
};
