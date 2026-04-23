import { SiteShell } from "@/components/layout/SiteShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { PageHeader } from "@/components/institutional/PageHeader";
import { ROUTES } from "@/lib/routes";
import { getAllArticles } from "@/lib/articles";

const Blog = () => {
  const articles = getAllArticles();

  return (
    <SiteShell>
      <PageSeo
        title="Blog"
        description="Análises sóbrias e técnicas sobre gestão estratégica do passivo bancário empresarial."
        path={ROUTES.blog}
      />
      <PageHeader
        title="Blog"
        lead="Página em construção — listagem, busca, filtros e paginação serão implementados na fase do blog."
      />
      <section className="container max-w-3xl pb-16">
        {articles.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Nenhum artigo publicado ainda.
          </p>
        ) : null}
      </section>
    </SiteShell>
  );
};

export default Blog;
