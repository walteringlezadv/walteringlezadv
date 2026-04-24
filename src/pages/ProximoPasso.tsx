import { Check, Mail, X } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { PageHeader } from "@/components/institutional/PageHeader";
import { Button } from "@/components/ui/button";
import { INSTITUTIONAL_LABELS, ROUTES } from "@/lib/routes";
import { EMAIL_HREF, WHATSAPP_HREF } from "@/lib/contact";

/**
 * Próximo Passo — Fase 3A.
 *
 * Página de conversão. Mantém o título institucional protegido
 * (INSTITUTIONAL_LABELS.pageTitleProximoPasso) e substitui o CTA
 * canônico do fechamento por contato direto (WhatsApp + e-mail),
 * já que esta é a página final do funil.
 */

const paraQuemE = [
  "Empresa ou PJ ativa com operação em curso",
  "Passivo bancário relevante (a partir de R$ 200 mil)",
  "Proposta de renegociação ou aditivo pendente de assinatura",
  "Prazo curto para decidir antes da assinatura",
  "Pressão concreta do banco para formalização imediata",
];

const paraQuemNaoE = [
  "Pessoa física",
  "Empresa paralisada ou sem operação consolidada",
  "Recuperação judicial em fase inicial",
  "Quem busca redução automática de dívida",
];

const oQueEsperar = [
  "Retorno em até 48h úteis após o envio das informações",
  "Confirmação de aderência do caso ao escopo técnico",
  "Indicação objetiva do próximo passo coerente com o cenário",
  "Sem comunicação à instituição financeira nesta etapa",
];

const ProximoPasso = () => {
  return (
    <SiteShell>
      <PageSeo
        title={INSTITUTIONAL_LABELS.pageTitleProximoPasso}
        description="Critérios de aderência e próximos passos para empresas sob pressão bancária."
        path={ROUTES.proximoPasso}
      />

      {/* Cabeçalho institucional (rótulo público protegido) */}
      <section className="border-b border-border/40">
        <PageHeader
          eyebrow={INSTITUTIONAL_LABELS.menuProximoPasso}
          title={INSTITUTIONAL_LABELS.pageTitleProximoPasso}
          lead="Antes de avançar, confirme se o seu cenário corresponde ao escopo técnico desta triagem."
        />
      </section>

      {/* Para quem é · Para quem não é */}
      <section className="border-b border-border/40">
        <div className="container max-w-5xl py-14 md:py-20">
          <h2 className="text-center font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Para quem é · Para quem não é
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="rounded-lg border border-border/60 bg-card/60 p-6 md:p-8">
              <h3 className="font-serif text-xl text-foreground md:text-2xl">
                Para quem é
              </h3>
              <ul className="mt-5 space-y-3">
                {paraQuemE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-primary"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-foreground/90 md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-border/60 bg-card/60 p-6 md:p-8">
              <h3 className="font-serif text-xl text-foreground md:text-2xl">
                Para quem não é
              </h3>
              <ul className="mt-5 space-y-3">
                {paraQuemNaoE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X
                      className="mt-1 h-4 w-4 shrink-0 text-muted-foreground"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* O que esperar */}
      <section className="border-b border-border/40 bg-secondary/30">
        <div className="container max-w-3xl py-14 md:py-20">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            O que esperar após a solicitação
          </h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2 md:gap-4">
            {oQueEsperar.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-md border border-border/60 bg-card/50 p-4"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden
                />
                <span className="text-sm leading-relaxed text-foreground/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs leading-relaxed text-muted-foreground/80">
            A triagem possui natureza jurídica e contratual, com foco na
            compreensão inicial do caso antes de qualquer aprofundamento formal.
          </p>
        </div>
      </section>

      {/* Fechamento institucional — contato direto */}
      <section>
        <div className="container max-w-3xl py-14 text-center md:py-20">
          <p className="mb-5 text-base italic text-muted-foreground">
            Se o banco está pressionando e o papel está na mesa, este é o momento.
          </p>
          <p className="mx-auto mb-6 max-w-xl text-sm leading-relaxed text-foreground/90">
            A triagem começa pelo envio das informações essenciais da empresa e
            do passivo bancário envolvido.
          </p>
          <div className="flex flex-col items-center gap-4">
            <p className="text-xs text-muted-foreground">
              Envie as informações iniciais para avaliação técnica.
            </p>
            <Button asChild size="lg">
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                Iniciar triagem pelo WhatsApp
              </a>
            </Button>
            <a
              href={EMAIL_HREF}
              aria-label="Enviar informações iniciais por e-mail"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4 decoration-primary/70 transition-colors hover:decoration-primary"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Enviar por e-mail
            </a>
          </div>
          <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-muted-foreground/80">
            Exclusivo para empresas com operação ativa. Retorno em até 48h úteis
            para confirmação de aderência e orientação do próximo passo.
          </p>
        </div>
      </section>
    </SiteShell>
  );
};

export default ProximoPasso;
