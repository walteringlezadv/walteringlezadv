import { formatPublishedDate, formatReadingTime } from "@/lib/articleFormat";
import { cn } from "@/lib/utils";

/**
 * Metadados editoriais sóbrios — categoria · data · tempo de leitura.
 *
 * Usa exclusivamente tokens semânticos do design system institucional.
 * Tipografia herdada (Inter, sem nova hierarquia).
 */
type Props = {
  category: string;
  publishedAt: string;
  readingTime: number;
  className?: string;
  align?: "left" | "center";
};

export const ArticleMeta = ({
  category,
  publishedAt,
  readingTime,
  className,
  align = "left",
}: Props) => {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.18em] text-muted-foreground",
        align === "center" && "justify-center",
        className,
      )}
    >
      <span className="bg-primary/20 border border-primary text-primary px-2 py-0.5 text-xs uppercase tracking-widest">{category}</span>
      <span aria-hidden className="text-border">·</span>
      <time dateTime={publishedAt}>{formatPublishedDate(publishedAt)}</time>
      <span aria-hidden className="text-border">·</span>
      <span className="normal-case tracking-normal text-muted-foreground/90">
        {formatReadingTime(readingTime)}
      </span>
    </div>
  );
};
