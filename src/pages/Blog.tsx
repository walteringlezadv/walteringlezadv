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
      <section className="border-b border-foreground/10 bg-[#0d2b27] sticky top-0 z-10">
        <div className="container max-w-7xl">
          <div className="flex flex-wrap gap-2 py-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`shrink-0 rounded-sm border border-white/20 px-3 py-1 text-[11px] font-medium uppercase tracking-widest transition-colors outline-none focus:outline-none ${
                activeCategory === null
                  ? "border-white bg-white/20 text-white font-semibold"
                  : "border-white/60 text-white hover:border-white/70 hover:text-white"
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
                className={`shrink-0 rounded-sm border border-white/20 px-3 py-1 text-[11px] font-medium uppercase tracking-widest transition-colors outline-none focus:outline-none ${
                  activeCategory === cat
                    ? "border-white/40 bg-white/15 text-white font-semibold"
                    : "border-white/40 text-white/80 hover:border-white/70 hover:text-white"
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
