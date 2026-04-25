import { Link } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { PageHeader } from "@/components/institutional/PageHeader";
import { SolicitarTriagemCTA } from "@/components/cta/SolicitarTriagemCTA";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { ROUTES } from "@/lib/routes";
import { getAllArticles } from "@/lib/articles";

/**
 * Blog — Fase 3B.
 *
 * Índice editorial. Inerda integralmente o ritmo institucional da Fase 2/3A:
 *  - SiteShell, header e footer compartilhados
 *  - PageHeader (eyebrow → h1 → lead) idêntico às páginas institucionais
 *  - Containers max-w-3xl e seções com a mesma cadência vertical
 *  - CTA canônico apenas no fechamento estrutural
 *
 * O blog é continuação do site, nunca um produto separado.
 */
const Blog = () => {
  const articles = getAllArticles();

  return (
    <SiteShell>
      <PageSeo
        title="Blog"
        description="Análises sóbrias e técnicas sobre gestão estratégica do passivo bancário empresarial."
        path={ROUTES.blog}
      />

      {/* Cabeçalho institucional */}
      <section className="border-b border-border/20">
        <PageHeader
          eyebrow="Blog"
          title="Análises sobre passivo bancário empresarial"
          lead="Leituras técnicas e sóbrias sobre o momento contratual entre empresa e banco — sem promessas, sem atalhos."
        />
      </section>

      {/* Listagem editorial */}
      <section className="border-b border-border/20">
        <div className="container max-w-3xl py-12 md:py-16">
          {articles.length === 0 ? (
            <div className="text-center">
              <p className="font-serif text-xl italic leading-relaxed text-muted-foreground md:text-2xl">
                Os primeiros artigos serão publicados em breve.
              </p>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground/90 md:text-base">
                A linha editorial acompanha a mesma sobriedade da prática: foco
                no momento contratual, leitura estrutural e linguagem objetiva.
              </p>
            </div>
          ) : (
            <ul className="space-y-14 md:space-y-16">
              {articles.map((article) => (
                <li key={article.slug}>
                  <ArticleCard article={article} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Fechamento institucional — CTA canônico */}
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
