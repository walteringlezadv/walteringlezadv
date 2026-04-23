import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ArticleMeta } from "./ArticleMeta";
import { blogPostPath } from "@/lib/routes";
import type { Article } from "@/types/article";

/**
 * Card editorial do índice do blog.
 *
 * Inspirado no ritmo institucional aprovado (lista vertical de itens
 * com border-l-2 border-primary/60), agora aplicado a artigos.
 * Não introduz novo sistema tipográfico nem decoração extra.
 */
type Props = {
  article: Article;
};

export const ArticleCard = ({ article }: Props) => {
  return (
    <article className="border-l-2 border-primary/60 pl-6 md:pl-8">
      <ArticleMeta
        category={article.category}
        publishedAt={article.publishedAt}
        readingTime={article.readingTime}
      />
      <h2 className="mt-4 font-serif text-2xl leading-tight tracking-tight text-foreground md:text-3xl">
        <Link
          to={blogPostPath(article.slug)}
          className="transition-colors hover:text-primary"
        >
          {article.title}
        </Link>
      </h2>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
        {article.excerpt}
      </p>
      <div className="mt-5">
        <Link
          to={blogPostPath(article.slug)}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Ler artigo
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
};
