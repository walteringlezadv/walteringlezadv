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
    <header
      className={cn(
        "container max-w-3xl py-12 text-center md:py-16",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
        {title}
      </h1>
      {lead ? (
        <div className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {lead}
        </div>
      ) : null}
    </header>
  );
};
