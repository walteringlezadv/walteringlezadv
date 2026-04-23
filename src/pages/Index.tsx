import { SiteShell } from "@/components/layout/SiteShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { ROUTES } from "@/lib/routes";

/**
 * Home — placeholder de Fase 1.
 *
 * Na Fase 2, a landing validada será migrada para cá, mantendo
 * SiteShell, tokens e o CTA canônico SolicitarTriagemCTA.
 */
const Index = () => {
  return (
    <SiteShell>
      <PageSeo
        title="Walter Inglez"
        description="Gestão estratégica do passivo bancário empresarial."
        path={ROUTES.home}
      />
      <section className="container max-w-3xl py-16 md:py-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Fase 1 — Fundação
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          Walter Inglez
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Esqueleto navegável estabelecido. A landing validada será migrada
          para esta página na próxima fase, preservando shell, tokens e o
          CTA institucional canônico.
        </p>
      </section>
    </SiteShell>
  );
};

export default Index;
