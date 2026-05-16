import { useState } from "react";
import { Link } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { PageHeader } from "@/components/institutional/PageHeader";
import { SolicitarTriagemCTA } from "@/components/cta/SolicitarTriagemCTA";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { ROUTES } from "@/lib/routes";
import { getAllArticles, getAllCategories } from "@/lib/articles";

const Blog = () => {
  const allArticles = getAllArticles();
  const categories = getAllCategories();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? allArticles.filter((a) => a.category === activeCategory)
    : allArticles;

  return (
    <SiteShell>
      <PageSeo
        title="Blog"
        description="Análises sóbrias e técnicas sobre gestão estratégica do passivo bancário empresarial."
        path={ROUTES.blog}
      />
      <section className="border-b border-border/20">
        <PageHeader
          eyebrow="Blog"
          title="Análises sobre passivo bancário empresarial"
          lead="Leituras técnicas e sóbrias sobre o momento contratual entre empresa e banco — sem promessas, sem atalhos."
        />
      </section>
      <section className="border-b border-border/20 bg-background/60 sticky top-0 z-10 backdrop-blur-sm">
        <div className="container max-w-5xl">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            <button
              onClick={() => setActiveCategory(null)}
              className={`shrink-0 rounded-sm px-4 py-1.5 text-xs font-medium uppercase tracking-widest transition-colors ${
                activeCategory === null
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Todas
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setActiveCategory(activeCategory === cat ? null : cat)
                }
                className={`shrink-0 rounded-sm px-4 py-1.5 text-xs font-medium uppercase tracking-widest transition-colors ${
                  activeCategory === cat
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-border/20">
        <div className="container max-w-3xl py-12 md:py-16">
          {filtered.length === 0 ? (
            <div className="text-center">
              <p className="font-serif text-xl italic leading-relaxed text-muted-foreground md:text-2xl">
                Nenhum artigo nesta categoria ainda.
              </p>
              <button
                onClick={() => setActiveCategory(null)}
                className="mt-6 text-sm text-primary underline-offset-4 hover:underline"
              >
                Ver todos os artigos
              </button>
            </div>
          ) : (
            <ul className="space-y-14 md:space-y-16">
              {filtered.map((article) => (
                <li key={article.slug}>
                  <ArticleCard article={article} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <section>
        <div className="container max-w-3xl py-12 text-center md:py-16">
          <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Para entender como uma leitura técnica é conduzida antes de
            qualquer providência, veja{" "}
            <Link
              to={ROUTES.comoFunciona}
              className="text-primary underline-offset-4 hover:underline"
            >
              como funciona o processo
            </Link>
            .
          </p>
          <p className="mb-6 text-base italic text-muted-foreground">
            Se o banco está pressionando e o papel está na mesa, este é o momento.
          </p>
          <SolicitarTriagemCTA size="lg" />
        </div>
      </section>
    </SiteShell>
  );
};

export default Blog;
