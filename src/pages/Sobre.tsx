import { Check } from "lucide-react";
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

const experiencia = [
  "Atuação concentrada em contratos bancários e passivo empresarial",
  "Análise de garantias reais, fianças e cláusulas de exposição cruzada",
  "Leitura de propostas de renegociação e aditivos antes da formalização",
  "Acompanhamento de empresas sob pressão concreta de instituições financeiras",
];

const metodo = [
  {
    n: "1",
    title: "Leitura inicial do cenário",
    body: "Compreensão objetiva do momento contratual, do passivo envolvido e do grau de pressão da instituição financeira.",
  },
  {
    n: "2",
    title: "Mapeamento estrutural",
    body: "Identificação de garantias, gatilhos contratuais, obrigações acessórias e exposição entre contratos do mesmo grupo.",
  },
  {
    n: "3",
    title: "Indicação do próximo passo",
    body: "Encaminhamento técnico coerente com o cenário identificado — sem promessa de desconto e sem providência precipitada.",
  },
];

const paraQuemE = [
  "Empresas com operação ativa e passivo bancário relevante",
  "Cenários com proposta de renegociação ou aditivo pendente de assinatura",
  "Situações de pressão concreta da instituição financeira, com prazo curto de decisão",
  "Casos em que ainda existe espaço contratual antes da formalização",
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

      {/* Atuação */}
      <section className="border-b border-border/40">
        <div className="container max-w-3xl py-12 md:py-16">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Atuação
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
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

          {/* Bloco complementar — densidade institucional */}
          <div className="mt-10 grid gap-6 border-t border-border/60 pt-8 md:grid-cols-3 md:gap-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Experiência
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                Experiência construída em ambiente de decisão sob pressão, com
                foco em leitura de cenários complexos.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Método
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                A atuação se baseia na leitura jurídica estrutural dos contratos
                e do passivo, antes de qualquer decisão.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Posicionamento
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                Não se trata de renegociação isolada, mas de enquadramento
                estratégico do problema.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-border/60 pt-5 text-sm">
            <p className="font-medium text-foreground">Walter Inglez Advocacia e Consultoria</p>
            <p className="mt-1 text-muted-foreground">
              Assessoria jurídica estratégica para empresas sob pressão bancária.
            </p>
          </div>
        </div>
      </section>

      {/* Experiência */}
      <section className="border-b border-border/40 bg-secondary/30">
        <div className="container max-w-3xl py-14 md:py-20">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Experiência
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            A trajetória profissional concentra-se em situações em que a
            estrutura contratual define o desfecho — e não o discurso comercial
            do banco.
          </p>
          <ul className="mt-8 grid gap-3 md:grid-cols-2 md:gap-4">
            {experiencia.map((item) => (
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
        </div>
      </section>

      {/* Método de atuação */}
      <section className="border-b border-border/40">
        <div className="container max-w-3xl py-14 md:py-20">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Método de atuação
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Cada caso é examinado em três etapas, na sequência em que a leitura
            jurídica produz mais clareza para a empresa.
          </p>
          <ol className="mt-8 space-y-6">
            {metodo.map((step) => (
              <li
                key={step.n}
                className="flex gap-4 border-l-2 border-primary/60 pl-5"
              >
                <div>
                  <p className="font-serif text-lg text-foreground md:text-xl">
                    <span className="mr-2 text-primary">{step.n}.</span>
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Para quem é o serviço */}
      <section className="border-b border-border/40 bg-secondary/30">
        <div className="container max-w-3xl py-14 md:py-20">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Para quem é o serviço
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            A triagem é dirigida a cenários empresariais específicos, em que a
            leitura jurídica preventiva ainda pode preservar margem de decisão.
          </p>
          <ul className="mt-8 space-y-4">
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
      </section>

      {/* Princípios */}
      <section className="border-b border-border/40">
        <div className="container max-w-3xl py-14 md:py-20">
          <h2 className="text-center font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Princípios da atuação
          </h2>
          <ul className="mt-10 space-y-6">
            {principios.map((p) => (
              <li
                key={p.title}
                className="flex gap-4 border-l-2 border-primary/60 pl-5"
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
        <div className="container max-w-3xl py-14 text-center md:py-20">
          <p className="mb-5 text-base italic text-muted-foreground">
            Se o banco está pressionando e o papel está na mesa, este é o momento.
          </p>
          <SolicitarTriagemCTA size="lg" />
        </div>
      </section>
    </SiteShell>
  );
};

export default Sobre;
