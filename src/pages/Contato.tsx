import { SiteShell } from "@/components/layout/SiteShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { PageHeader } from "@/components/institutional/PageHeader";
import { SolicitarTriagemCTA } from "@/components/cta/SolicitarTriagemCTA";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import { EMAIL_HREF, WHATSAPP_HREF } from "@/lib/contact";

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
        <div className="container max-w-3xl py-20 text-center md:py-28">
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

      {/* Identificação institucional + canais diretos */}
      <section className="bg-secondary/30">
        <div className="container max-w-3xl py-20 md:py-28">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Identificação
          </h2>
          <div className="mt-8 border-t border-border/60 pt-6 text-sm md:text-base">
            <p className="font-medium text-foreground">Walter Inglez Advocacia e Consultoria</p>
            <p className="mt-1 text-muted-foreground">Atendimento mediante triagem prévia.</p>
          </div>

          <div className="mt-10 border-t border-border/60 pt-8">
            <h3 className="font-serif text-xl text-foreground md:text-2xl">
              Canais diretos
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Para envio direto das informações iniciais da empresa e do
              passivo bancário envolvido.
            </p>
            <div className="mt-6 flex flex-col items-start gap-4">
              <Button asChild size="lg">
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
              </Button>
              <a
                href={EMAIL_HREF}
                className="text-sm font-medium text-foreground underline underline-offset-4 decoration-primary/70 hover:decoration-primary"
              >
                Enviar por e-mail
              </a>
            </div>
          </div>

          <p className="mt-10 text-xs leading-relaxed text-muted-foreground/80">
            Atuação voltada à análise jurídica de passivos bancários
            empresariais. A triagem possui natureza jurídica e contratual e não
            se confunde com assessoria financeira.
          </p>
        </div>
      </section>
    </SiteShell>
  );
};

export default Contato;
