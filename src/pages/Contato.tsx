import { SiteShell } from "@/components/layout/SiteShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { PageHeader } from "@/components/institutional/PageHeader";
import { SolicitarTriagemCTA } from "@/components/cta/SolicitarTriagemCTA";
import { ROUTES } from "@/lib/routes";

/**
 * Contato — Fase 3A.
 *
 * Página institucional sóbria. O canal preferencial é a triagem
 * (CTA canônico). Demais informações institucionais permanecem
 * em registro contido, sem nova terminologia pública.
 */

const Contato = () => {
  return (
    <SiteShell>
      <PageSeo
        title="Contato"
        description="Canais institucionais de contato."
        path={ROUTES.contato}
      />

      {/* Cabeçalho institucional */}
      <section className="border-b border-border/40">
        <PageHeader
          eyebrow="Contato"
          title="Contato institucional"
          lead="O canal preferencial de contato é a solicitação de triagem. Em até 48h úteis, retornamos com a confirmação de aderência e a indicação do próximo passo."
        />
      </section>

      {/* Canal preferencial — CTA canônico */}
      <section className="border-b border-border/40">
        <div className="container max-w-3xl py-14 text-center md:py-20">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Canal preferencial
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A solicitação de triagem é a porta de entrada institucional. Ela
            organiza as informações necessárias para a leitura inicial do
            cenário e garante retorno objetivo no prazo previsto.
          </p>
          <div className="mt-10 flex justify-center">
            <SolicitarTriagemCTA size="lg" />
          </div>
          <p className="mx-auto mt-8 max-w-xl text-xs leading-relaxed text-muted-foreground/80">
            Exclusivo para empresas com operação ativa. Retorno em até 48h úteis
            para confirmação de aderência e orientação do próximo passo.
          </p>
        </div>
      </section>

    </SiteShell>
  );
};

export default Contato;
