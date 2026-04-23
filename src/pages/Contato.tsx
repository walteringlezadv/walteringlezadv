import { SiteShell } from "@/components/layout/SiteShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { PageHeader } from "@/components/institutional/PageHeader";
import { ROUTES } from "@/lib/routes";

const Contato = () => {
  return (
    <SiteShell>
      <PageSeo
        title="Contato"
        description="Canais institucionais de contato."
        path={ROUTES.contato}
      />
      <PageHeader
        title="Contato"
        lead="Página em construção — os canais institucionais serão definidos na próxima etapa."
      />
    </SiteShell>
  );
};

export default Contato;
