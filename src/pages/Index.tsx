import { ArrowDown, Check, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { SolicitarTriagemCTA } from "@/components/cta/SolicitarTriagemCTA";
import { ROUTES } from "@/lib/routes";

/**
 * Home — Fase 2.
 *
 * Estrutura, hierarquia, ritmo e ordem das seções herdados da landing
 * institucional validada (walteringlezadv-estrutura.manus.space).
 *
 * Regras invioláveis:
 *  - Renderiza dentro do SiteShell (header/footer compartilhados com o blog).
 *  - O CTA de conversão SÓ pode ser instanciado via <SolicitarTriagemCTA />.
 *  - Rótulos públicos PT-BR são institucionais e não podem ser reescritos
 *    livremente (ver INSTITUTIONAL_LABELS em src/lib/routes.ts).
 *  - Não introduzir nova terminologia pública nesta fase.
 */

const fatores = [
  {
    title: "O que as garantias exigidas realmente cobrem",
    body: null,
  },
  {
    title:
      "Gatilhos e cláusulas que permitem restrição de limites, reforço de garantias ou antecipação de vencimento",
    body: "Diante de mudança de risco — mesmo antes de inadimplência formal.",
  },
  {
    title: "O que você deixa de poder decidir depois que a assinatura estiver feita",
    body: "Renegociação sem leitura estratégica pode reduzir seu poder contratual.",
  },
];

const escopo = [
  "Composição e tipo do passivo bancário",
  "Garantias reais e pessoais envolvidas",
  "Exposição entre contratos do mesmo grupo",
  "Cláusulas de vencimento antecipado",
  "Restrições operacionais e obrigações acessórias",
  "Intervalo real de decisão antes da formalização",
];

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

const faq = [
  {
    q: "Isso é uma ação judicial?",
    a: "Não. A triagem é uma etapa jurídica preliminar de enquadramento e leitura contratual. Não há ajuizamento, comunicação ao banco ou qualquer providência processual nesta etapa.",
  },
  {
    q: "Preciso estar inadimplente?",
    a: "Não. A triagem é dirigida principalmente ao momento anterior à assinatura — quando ainda existe espaço de decisão. A presença de inadimplência não é requisito.",
  },
  {
    q: "Qual o prazo do retorno da triagem?",
    a: "Em até 48 horas úteis após o envio das informações, com retorno objetivo sobre a aderência do caso ao escopo técnico.",
  },
  {
    q: "O banco é comunicado?",
    a: "Não. A triagem é uma etapa interna de leitura jurídica. Nenhuma comunicação é enviada à instituição financeira nesta fase.",
  },
  {
    q: "Quanto custa a triagem?",
    a: "A triagem inicial não tem custo. Eventual etapa técnica aprofundada depende de aderência ao escopo e ocorre apenas mediante contratação formal.",
  },
];

const Index = () => {
  return (
    <SiteShell>
      <PageSeo
        title="Walter Inglez — Gestão estratégica de passivos bancários"
        description="Antes de assinar a próxima proposta do banco, entenda o que o contrato realmente produz para a sua empresa. Triagem jurídica conduzida por Walter Inglez."
        path={ROUTES.home}
      />

      {/* ======================================================
          HERO
          ====================================================== */}
      <section className="border-b border-border/40">
        <div className="container max-w-3xl py-14 text-center md:py-20">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Gestão Estratégica de Passivos
          </p>
          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Você tem certeza do que está assinando?
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            O banco apresentou uma proposta. O prazo está correndo. Antes de
            assinar, você precisa saber o que esse contrato realmente produz
            para a sua empresa.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base italic text-muted-foreground/90">
            Se o banco está pressionando e o papel está na mesa, este é o momento.
          </p>
          <div className="mt-10 flex justify-center">
            <SolicitarTriagemCTA size="lg" />
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Walter Inglez · Advogado
          </p>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-muted-foreground/80">
            Exclusivo para empresas com operação ativa. Retorno em até 48h úteis
            para confirmação de aderência e orientação do próximo passo.
          </p>
        </div>
      </section>

      {/* ======================================================
          3 FATORES
          ====================================================== */}
      <section className="border-b border-border/40">
        <div className="container max-w-3xl py-14 md:py-20">
          <h2 className="text-center font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            3 fatores que determinam sua posição antes de assinar
          </h2>
          <ul className="mt-12 space-y-8">
            {fatores.map((f, i) => (
              <li key={i} className="flex gap-4 border-l-2 border-primary/60 pl-6">
                <div>
                  <p className="text-base font-medium leading-snug text-foreground md:text-lg">
                    {f.title}
                  </p>
                  {f.body ? (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {f.body}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <p className="mb-6 text-base italic text-muted-foreground">
              Se o banco está pressionando e o papel está na mesa, este é o momento.
            </p>
            <SolicitarTriagemCTA />
          </div>
        </div>
      </section>

      {/* ======================================================
          TRIAGEM CONDUZIDA POR WALTER INGLEZ
          ====================================================== */}
      <section className="border-b border-border/40 bg-secondary/30">
        <div className="container max-w-3xl py-14 md:py-20">
          <h2 className="text-center font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Triagem jurídica conduzida por Walter Inglez
          </h2>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              A triagem é conduzida diretamente por Walter Inglez. Em até 48h,
              você recebe uma leitura objetiva do seu momento contratual — com
              clareza sobre os riscos reais, as garantias envolvidas e qual o
              próximo passo mais seguro para a sua empresa.
            </p>
            <p>
              O foco não é o valor da dívida. É o que o contrato produz — e o
              que você ainda pode evitar antes da formalização.
            </p>
          </div>

          <ul className="mt-10 space-y-3 border-t border-border/60 pt-8 text-sm text-muted-foreground md:text-base">
            <li className="flex gap-3">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              atuação focada em contratos bancários e passivo empresarial
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              atenção voltada a garantias, exposição e risco estrutural
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              abordagem jurídica de natureza estratégica e preventiva
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              encaminhamento definido conforme aderência do caso ao escopo técnico
            </li>
          </ul>

          <p className="mt-8 text-xs leading-relaxed text-muted-foreground/80">
            A triagem possui natureza jurídica e contratual, com foco na
            compreensão inicial do caso antes de qualquer aprofundamento formal.
          </p>
        </div>
      </section>

      {/* ======================================================
          O QUE A SOLICITAÇÃO PERMITE VERIFICAR
          ====================================================== */}
      <section className="border-b border-border/40">
        <div className="container max-w-3xl py-14 md:py-20">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            O que a solicitação de triagem permite verificar
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Esta etapa é voltada à compreensão inicial do contexto e à definição
            do encaminhamento mais adequado.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
            Quando indicado e mediante contratação formal, a etapa técnica
            aprofundada pode examinar:
          </p>

          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {escopo.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-md border border-border/60 bg-card/50 p-4"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span className="text-sm leading-relaxed text-foreground/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-xs leading-relaxed text-muted-foreground/80">
            Esta triagem possui natureza jurídica e contratual e não se confunde
            com assessoria financeira.
          </p>
          <div className="mt-8">
            <SolicitarTriagemCTA />
          </div>
        </div>
      </section>

      {/* ======================================================
          PARA QUEM É · PARA QUEM NÃO É
          ====================================================== */}
      <section className="border-b border-border/40 bg-secondary/30">
        <div className="container max-w-5xl py-14 md:py-20">
          <h2 className="text-center font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Para quem é · Para quem não é
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border/60 bg-card/60 p-6 md:p-8">
              <h3 className="font-serif text-xl text-foreground md:text-2xl">
                Para quem é
              </h3>
              <ul className="mt-6 space-y-4">
                {paraQuemE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
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
              <ul className="mt-6 space-y-4">
                {paraQuemNaoE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
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

      {/* ======================================================
          COMO FUNCIONA O PROCESSO
          ====================================================== */}
      <section className="border-b border-border/40">
        <div className="container max-w-3xl py-14 md:py-20">
          <h2 className="text-center font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Como funciona o processo
          </h2>

          <ol className="mt-14 space-y-12">
            {processo.map((step, i) => (
              <li key={step.n}>
                <div className="flex flex-col items-center text-center">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/60 font-serif text-lg text-primary">
                    {step.n}
                  </span>
                  <h3 className="font-serif text-xl text-foreground md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {step.body}
                  </p>
                </div>
                {i < processo.length - 1 ? (
                  <div className="mt-10 flex justify-center" aria-hidden>
                    <ArrowDown className="h-5 w-5 text-muted-foreground/60" />
                  </div>
                ) : null}
              </li>
            ))}
          </ol>

          <div className="mt-16 text-center">
            <p className="mb-6 text-base italic text-muted-foreground">
              Se o banco está pressionando e o papel está na mesa, este é o momento.
            </p>
            <SolicitarTriagemCTA />
          </div>
        </div>
      </section>

      {/* ======================================================
          QUEM CONDUZ
          ====================================================== */}
      <section className="border-b border-border/40 bg-secondary/30">
        <div className="container max-w-3xl py-14 md:py-20">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Quem conduz sua triagem
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Walter Inglez é advogado com atuação voltada à análise jurídica de
              passivos bancários empresariais. Seu trabalho se concentra no
              momento mais delicado da relação entre empresa e banco — quando a
              pressão é real, o prazo é curto e uma decisão mal posicionada pode
              consolidar desvantagens contratuais por anos.
            </p>
            <p>
              A abordagem não se baseia em promessa de descontos ou renegociação
              isolada de taxas. O foco está na leitura estrutural da posição
              jurídica da empresa: o que os contratos realmente estabelecem,
              quais decisões ainda estão abertas e quais efeitos podem se tornar
              irreversíveis após determinadas assinaturas.
            </p>
          </div>
          <div className="mt-10 border-t border-border/60 pt-6 text-sm">
            <p className="font-medium text-foreground">Walter Inglez · Advogado</p>
            <p className="mt-1 text-muted-foreground">Fortaleza – CE · São Paulo – SP</p>
          </div>
        </div>
      </section>

      {/* ======================================================
          FAQ
          ====================================================== */}
      <section className="border-b border-border/40">
        <div className="container max-w-3xl py-14 md:py-20">
          <h2 className="text-center font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Perguntas frequentes
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {faq.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/60">
                <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:no-underline md:text-xl">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ======================================================
          FECHAMENTO
          ====================================================== */}
      <section>
        <div className="container max-w-3xl py-24 text-center md:py-32">
          <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-foreground md:text-5xl">
            Decidir sem leitura estratégica da estrutura contratual é assumir
            risco invisível.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Se houver aderência ao escopo, retorno em até 48h úteis para
            confirmar enquadramento e orientar o próximo passo.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base italic text-muted-foreground/90">
            Se o banco está pressionando e o papel está na mesa, este é o momento.
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

export default Index;
