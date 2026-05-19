import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { PageHeader } from "@/components/institutional/PageHeader";
import { SolicitarTriagemCTA } from "@/components/cta/SolicitarTriagemCTA";
import { ArticleMeta } from "@/components/blog/ArticleMeta";
import { ArticleProse } from "@/components/blog/ArticleProse";
import { ROUTES, blogPostPath } from "@/lib/routes";
import { getArticleBySlug } from "@/lib/articles";
import { articleJsonLd, organizationJsonLd } from "@/lib/seo";

/**
 * BlogPost — Fase 3B.
 *
 * Página individual do artigo. Renderiza dentro do SiteShell aprovado,
 * herdando header, footer, tokens, fontes e CTA canônico. Aplica de
 * forma controlada a hierarquia tipográfica já validada ao corpo
 * editorial via <ArticleProse />.
 */
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
        <section className="border-b border-border/20">
          <PageHeader
            eyebrow="Blog"
            title="Artigo não encontrado"
            lead={
              <>
                Volte para o{" "}
                <Link
                  to={ROUTES.blog}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  índice do blog
                </Link>
                .
              </>
            }
          />
        </section>
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
        image={article.cover?.src}
        jsonLd={[articleJsonLd(article), organizationJsonLd()]}
      />

      {/* Cabeçalho institucional do artigo */}
      <section className="border-b border-border/20">
        <header className="container max-w-3xl py-12 text-center md:py-16">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Blog
          </p>
          <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
            {article.title}
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {article.description}
          </p>
          <div className="mt-10 flex justify-center">
            <ArticleMeta
              category={article.category}
              publishedAt={article.publishedAt}
              readingTime={article.readingTime}
              align="center"
            />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Por{" "}
            <span className="text-foreground">{article.author.name}</span>
            {article.author.role ? (
              <span className="text-muted-foreground/80">
                {" · "}
                {article.author.role}
              </span>
            ) : null}
          </p>
        </header>
      </section>

      {/* Corpo do artigo */}
      <section className="border-b border-border/20">
        <article className="container max-w-3xl py-12 md:py-16">
          <ArticleProse>
            {typeof article.body === "string" ? (
              <p>{article.body}</p>
            ) : (
              article.body
            )}
          </ArticleProse>
        </article>
      </section>

      {/* Leitura relacionada — link sóbrio para Como Funciona */}
      <section className="border-b border-border/20">
        <div className="container max-w-3xl py-12 md:py-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Leitura relacionada
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Antes de qualquer movimento, vale entender{" "}
            <Link
              to={ROUTES.comoFunciona}
              className="text-primary underline-offset-4 hover:underline"
            >
              como funciona o processo
            </Link>
            {" "}— a sequência institucional de leitura técnica que precede
            qualquer indicação de próximo passo.
          </p>
        </div>
      </section>

      {/* Fechamento institucional — condução do leitor */}
      <section>
        <div className="container max-w-3xl py-12 text-center md:py-16">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Antes de decidir, entenda o seu cenário
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Se o banco já apresentou proposta ou a decisão está próxima, a
            leitura técnica do passivo evita erros que podem se consolidar por
            anos.
          </p>
          <div className="mt-8 flex justify-center">
            <SolicitarTriagemCTA size="lg" />
          </div>
          <div className="mt-12">
            <Link
              to={ROUTES.blog}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Voltar ao índice do blog
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
};

export default BlogPost;
