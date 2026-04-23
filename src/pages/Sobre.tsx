import { SiteShell } from "@/components/layout/SiteShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { PageHeader } from "@/components/institutional/PageHeader";
import { SolicitarTriagemCTA } from "@/components/cta/SolicitarTriagemCTA";
import { ROUTES } from "@/lib/routes";

/**
 * Sobre — Fase 3A.
 *
 * Página institucional sóbria. Herda o ritmo de seções, hierarquia
 * e tons aprovados na Home. Sem nova terminologia pública.
 */

const principios = [
  {
    title: "Foco no momento contratual",
    body: "A atuação se concentra no intervalo em que ainda existe espaço de decisão — antes da formalização que consolida efeitos por anos.",
  },
  {
    title: "Leitura estrutural, não pontual",
    body: "O exame considera garantias, exposição entre contratos do mesmo grupo e gatilhos contratuais — não apenas taxa ou parcela.",
  },
  {
    title: "Natureza jurídica e preventiva",
    body: "A abordagem é jurídica e contratual. Não se confunde com assessoria financeira nem com promessa de redução automática de dívida.",
  },
];

const Sobre = () => {
  return (
    <SiteShell>
      <PageSeo
        title="Sobre"
        description="Trajetória, método e prática técnica em gestão estratégica do passivo bancário empresarial."
        path={ROUTES.sobre}
      />

      {/* Cabeçalho institucional */}
      <section className="border-b border-border/40">
        <PageHeader
          eyebrow="Sobre"
          title="Walter Inglez · Advogado"
          lead="Atuação voltada à análise jurídica de passivos bancários empresariais, com foco no momento mais delicado da relação entre empresa e banco."
        />
      </section>

      {/* Trajetória */}
      <section className="border-b border-border/40">
        <div className="container max-w-3xl py-20 md:py-28">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Atuação
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              A prática se concentra no momento em que a pressão é real, o prazo
              é curto e uma decisão mal posicionada pode consolidar desvantagens
              contratuais por anos. O foco está na leitura estrutural da posição
              jurídica da empresa: o que os contratos realmente estabelecem,
              quais decisões ainda estão abertas e quais efeitos podem se tornar
              irreversíveis após determinadas assinaturas.
            </p>
            <p>
              A abordagem não se baseia em promessa de descontos ou renegociação
              isolada de taxas. Trata-se de leitura jurídica preventiva, com
              encaminhamento definido conforme a aderência do caso ao escopo
              técnico.
            </p>
          </div>

          <div className="mt-10 border-t border-border/60 pt-6 text-sm">
            <p className="font-medium text-foreground">Walter Inglez · Advogado</p>
            <p className="mt-1 text-muted-foreground">Fortaleza – CE · São Paulo – SP</p>
          </div>
        </div>
      </section>

      {/* Princípios */}
      <section className="border-b border-border/40 bg-secondary/30">
        <div className="container max-w-3xl py-20 md:py-28">
          <h2 className="text-center font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Princípios da atuação
          </h2>
          <ul className="mt-12 space-y-8">
            {principios.map((p) => (
              <li
                key={p.title}
                className="flex gap-4 border-l-2 border-primary/60 pl-6"
              >
                <div>
                  <p className="text-base font-medium leading-snug text-foreground md:text-lg">
                    {p.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fechamento institucional */}
      <section>
        <div className="container max-w-3xl py-20 text-center md:py-28">
          <p className="mb-6 text-base italic text-muted-foreground">
            Se o banco está pressionando e o papel está na mesa, este é o momento.
          </p>
          <SolicitarTriagemCTA size="lg" />
        </div>
      </section>
    </SiteShell>
  );
};

export default Sobre;
