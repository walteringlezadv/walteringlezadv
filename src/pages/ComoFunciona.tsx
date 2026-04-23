import { SiteShell } from "@/components/layout/SiteShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { PageHeader } from "@/components/institutional/PageHeader";
import { ROUTES } from "@/lib/routes";

const ComoFunciona = () => {
  return (
    <SiteShell>
      <PageSeo
        title="Como Funciona"
        description="O método de trabalho na gestão estratégica do passivo bancário empresarial."
        path={ROUTES.comoFunciona}
      />
      <PageHeader
        title="Como Funciona"
        lead="Página em construção — o conteúdo institucional desta seção será definido na próxima etapa."
      />
    </SiteShell>
  );
};

export default ComoFunciona;
