import { Link, useParams } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { PageHeader } from "@/components/institutional/PageHeader";
import { ROUTES, blogPostPath } from "@/lib/routes";
import { getArticleBySlug } from "@/lib/articles";

const BlogPost = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <SiteShell>
        <PageSeo
          title="Artigo não encontrado"
          description="O artigo solicitado não foi encontrado."
          path={blogPostPath(slug)}
        />
        <PageHeader
          title="Artigo não encontrado"
          lead={
            <>
              Volte para o{" "}
              <Link to={ROUTES.blog} className="text-primary hover:underline">
                índice do blog
              </Link>
              .
            </>
          }
        />
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <PageSeo
        title={article.seo?.title ?? article.title}
        description={article.seo?.description ?? article.description}
        path={blogPostPath(article.slug)}
        type="article"
      />
      <PageHeader title={article.title} lead={article.description} />
      <article className="container max-w-3xl pb-16 text-foreground">
        {/* Renderização real do corpo será refinada na fase do blog. */}
        {typeof article.body === "string" ? <p>{article.body}</p> : article.body}
      </article>
    </SiteShell>
  );
};

export default BlogPost;
