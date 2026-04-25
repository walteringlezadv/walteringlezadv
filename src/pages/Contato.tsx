import type { ComponentType, SVGProps } from "react";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Youtube } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { PageHeader } from "@/components/institutional/PageHeader";
import { SolicitarTriagemCTA } from "@/components/cta/SolicitarTriagemCTA";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import { EMAIL_ADDRESS, EMAIL_HREF, WHATSAPP_HREF } from "@/lib/contact";

/** TikTok não existe na lucide-react — SVG mínimo equivalente. */
const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.71a8.16 8.16 0 0 0 4.77 1.52V6.78a4.85 4.85 0 0 1-1.84-.09Z" />
  </svg>
);

type SocialLink = {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/walteringlezadv", Icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/@walteringlezadv", Icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com/in/walteringlezadv", Icon: Linkedin },
  { label: "TikTok", href: "https://tiktok.com/@walteringlezadv", Icon: TikTokIcon },
];

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

      {/* Contato institucional — seção única consolidada */}
      <section className="bg-secondary/30">
        <div className="container max-w-5xl py-14 md:py-20">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Contato institucional
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Walter Inglez Advocacia e Consultoria · Atendimento mediante triagem prévia.
          </p>

          <div className="mt-10 grid gap-12 border-t border-border/60 pt-10 md:grid-cols-2 md:gap-16">
            {/* Coluna esquerda — Canais diretos */}
            <div>
              <h3 className="font-serif text-xl text-foreground md:text-2xl">
                Canais diretos
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Para envio das informações iniciais da empresa e do passivo
                bancário envolvido.
              </p>
              <div className="mt-6 flex flex-col items-start gap-5">
                <Button asChild size="lg">
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    Falar no WhatsApp
                  </a>
                </Button>

                <a
                  href={EMAIL_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-medium text-foreground underline underline-offset-4 decoration-primary/70 hover:decoration-primary"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  {EMAIL_ADDRESS}
                </a>
              </div>
            </div>

            {/* Coluna direita — Endereços de atendimento */}
            <div>
              <h3 className="font-serif text-xl text-foreground md:text-2xl">
                Endereços de atendimento
              </h3>
              <div className="mt-6 space-y-6 text-sm md:text-base">
                <div className="flex gap-3">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <div>
                    <p className="font-medium text-foreground">Fortaleza – CE</p>
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      R. Dr. Gilberto Studart, 55
                      <br />
                      Torre Sul, Sala 1.018 — Cocó
                      <br />
                      CEP 60192-105
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <div>
                    <p className="font-medium text-foreground">São Paulo – SP</p>
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      Av. Paulista, 1636
                      <br />
                      Sala 1105/1064 — Cerqueira César
                      <br />
                      CEP 01310-200
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Presença digital */}
          <div className="mt-12 border-t border-border/60 pt-8">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Presença digital
            </h3>
            <ul className="mt-5 flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
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
