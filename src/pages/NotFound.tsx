import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { ROUTES } from "@/lib/routes";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <SiteShell>
      <PageSeo
        title="Página não encontrada"
        description="A página solicitada não foi encontrada."
      />
      <section className="container flex min-h-[60vh] max-w-3xl flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          404
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Página não encontrada.
        </p>
        <Link
          to={ROUTES.home}
          className="mt-6 text-primary underline-offset-4 hover:underline"
        >
          Voltar para a Home
        </Link>
      </section>
    </SiteShell>
  );
};

export default NotFound;
