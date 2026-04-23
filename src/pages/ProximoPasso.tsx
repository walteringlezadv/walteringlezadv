import { SiteShell } from "@/components/layout/SiteShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { PageHeader } from "@/components/institutional/PageHeader";
import { SolicitarTriagemCTA } from "@/components/cta/SolicitarTriagemCTA";
import { INSTITUTIONAL_LABELS, ROUTES } from "@/lib/routes";

const ProximoPasso = () => {
  return (
    <SiteShell>
      <PageSeo
        title={INSTITUTIONAL_LABELS.pageTitleProximoPasso}
        description="Critérios de aderência e próximos passos para empresas sob pressão bancária."
        path={ROUTES.proximoPasso}
      />
      <PageHeader
        title={INSTITUTIONAL_LABELS.pageTitleProximoPasso}
        lead="Página em construção — a estrutura definitiva (contexto, critérios de aderência, o que esperar) entra na fase específica desta seção."
      />
      <section className="container max-w-3xl pb-16">
        <SolicitarTriagemCTA />
      </section>
    </SiteShell>
  );
};

export default ProximoPasso;
