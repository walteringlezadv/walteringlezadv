import { SiteShell } from "@/components/layout/SiteShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { PageHeader } from "@/components/institutional/PageHeader";
import { ROUTES } from "@/lib/routes";

const Sobre = () => {
  return (
    <SiteShell>
      <PageSeo
        title="Sobre"
        description="Trajetória, método e prática técnica em gestão estratégica do passivo bancário empresarial."
        path={ROUTES.sobre}
      />
      <PageHeader
        title="Sobre"
        lead="Página em construção — o conteúdo institucional desta seção será definido na próxima etapa."
      />
    </SiteShell>
  );
};

export default Sobre;
