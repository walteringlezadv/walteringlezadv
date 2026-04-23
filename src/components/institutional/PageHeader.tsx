import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Cabeçalho de página institucional sóbrio.
 * Garante hierarquia consistente: eyebrow opcional → <h1> → lead opcional.
 */
type Props = {
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  className?: string;
};

export const PageHeader = ({ eyebrow, title, lead, className }: Props) => {
  return (
    <header className={cn("container max-w-3xl py-16 md:py-24", className)}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
        {title}
      </h1>
      {lead ? (
        <div className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {lead}
        </div>
      ) : null}
    </header>
  );
};
