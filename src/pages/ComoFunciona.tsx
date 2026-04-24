import { ArrowDown } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { PageHeader } from "@/components/institutional/PageHeader";
import { SolicitarTriagemCTA } from "@/components/cta/SolicitarTriagemCTA";
import { ROUTES } from "@/lib/routes";

/**
 * Como Funciona — Fase 3A.
 *
 * Reaproveita a etapa "Como funciona o processo" já validada na Home,
 * sem introduzir nova terminologia pública.
 */

const processo = [
  {
    n: "1",
    title: "Solicitação de triagem",
    body: "Você preenche o formulário com informações objetivas sobre sua empresa, operação e momento contratual. Essa etapa representa uma solicitação de enquadramento técnico — não é análise entregue, mas o início de uma avaliação estruturada.",
  },
  {
    n: "2",
    title: "Avaliação preliminar do cenário",
    body: "Em até 48h úteis, realizamos leitura inicial do contexto informado para compreender se o cenário apresenta complexidade contratual, nível de exposição ou impacto empresarial que justifique estruturação técnica especializada. Essa etapa busca verificar a consistência do enquadramento — não emitir parecer ou orientação conclusiva.",
  },
  {
    n: "3",
    title: "Indicação do próximo passo",
    body: "Se houver consistência técnica no enquadramento, indicamos o próximo passo coerente com o cenário identificado e com o nível de exposição envolvido. A depender da estrutura apresentada, o processo poderá evoluir para etapa técnica aprofundada, mediante contratação formal.",
  },
];

const ComoFunciona = () => {
  return (
    <SiteShell>
      <PageSeo
        title="Como Funciona"
        description="O método de trabalho na gestão estratégica do passivo bancário empresarial."
        path={ROUTES.comoFunciona}
      />

      {/* Cabeçalho institucional */}
      <section className="border-b border-border/40">
        <PageHeader
          eyebrow="Como Funciona"
          title="Como funciona o processo"
          lead="Uma sequência institucional de três etapas — da solicitação inicial à indicação do próximo passo coerente com o cenário identificado."
        />
      </section>

      {/* Etapas do processo */}
      <section className="border-b border-border/40">
        <div className="container max-w-3xl py-14 md:py-20">
          <ol className="space-y-10">
            {processo.map((step, i) => (
              <li key={step.n}>
                <div className="flex flex-col items-center text-center">
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/60 font-serif text-lg text-primary">
                    {step.n}
                  </span>
                  <h2 className="font-serif text-xl text-foreground md:text-2xl">
                    {step.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {step.body}
                  </p>
                </div>
                {i < processo.length - 1 ? (
                  <div className="mt-8 flex justify-center" aria-hidden>
                    <ArrowDown className="h-5 w-5 text-muted-foreground/60" />
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Natureza da etapa */}
      <section className="border-b border-border/40 bg-secondary/30">
        <div className="container max-w-3xl py-14 md:py-20">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Natureza da etapa
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              A triagem é uma etapa jurídica preliminar de enquadramento e
              leitura contratual. Não há ajuizamento, comunicação ao banco ou
              qualquer providência processual nesta fase.
            </p>
            <p>
              A triagem possui natureza jurídica e contratual e não se confunde
              com assessoria financeira.
            </p>
          </div>
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

export default ComoFunciona;
