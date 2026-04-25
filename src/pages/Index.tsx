import { ArrowDown, Check, X } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { SolicitarTriagemCTA } from "@/components/cta/SolicitarTriagemCTA";
import { ROUTES } from "@/lib/routes";
import { Link } from "react-router-dom";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { getAllArticles } from "@/lib/articles";

/**
 * Home institucional — Fase 3.
 *
 * Reestruturação da Home para posicionamento institucional, jurídico e
 * estratégico, voltada a empresários sob pressão bancária.
 *
 * Regras invioláveis:
 *  - Renderiza dentro do SiteShell (header/footer compartilhados).
 *  - O CTA de conversão SÓ pode ser instanciado via <SolicitarTriagemCTA />.
 *  - CTA "Solicitar triagem" aparece apenas em 3 pontos: Hero, fim de
 *    "O que a triagem faz" e bloco final de decisão.
 *  - Sem promessa de resultado, sem linguagem promocional, sem expressões
 *    proibidas pela OAB.
 */

const cardLateralHero = [
  "Contratos",
  "Garantias",
  "Risco executivo",
  "Patrimônio",
  "Margem de decisão",
];

const sinaisDePressao = [
  "a empresa paga, mas a dívida não reduz;",
  "o banco oferece acordo com prazo curto;",
  "há CCB, capital de giro, cheque especial, cartão empresarial ou garantias cruzadas;",
  "o empresário não sabe exatamente o que assinou;",
  "existe risco de bloqueio, execução, vencimento antecipado ou comprometimento patrimonial;",
  "a negociação está sendo conduzida apenas pelo gerente ou setor de cobrança.",
];

const colunaRenegociacaoSemLeitura = [
  "começa pela proposta do banco;",
  "olha apenas parcela e prazo;",
  "busca alívio imediato;",
  "pode consolidar desvantagens;",
  "trata dívidas isoladas.",
];

const colunaGestaoEstrategica = [
  "começa pela leitura dos contratos;",
  "observa produto, garantias e risco;",
  "mede consequência jurídica e patrimonial;",
  "preserva margem de decisão;",
  "enxerga o conjunto do passivo.",
];

const triagemIdentifica = [
  "tipo de dívida bancária;",
  "banco ou instituições envolvidas;",
  "estágio da cobrança;",
  "existência de CCB, capital de giro, cartão, cheque especial, financiamento ou outras operações;",
  "garantias pessoais ou reais;",
  "risco de execução, bloqueio ou vencimento antecipado;",
  "impacto sobre caixa, patrimônio e continuidade da atividade;",
  "documentos mínimos disponíveis;",
  "necessidade de providência preventiva, negocial ou defensiva.",
];

const podeFazerSentido = [
  "empresários com dívidas bancárias relevantes em nome da empresa;",
  "empresas pressionadas por banco, cobrança ou escritório terceirizado;",
  "empresários que receberam proposta de renegociação e não sabem se devem aceitar;",
  "casos com garantias pessoais, reais ou patrimoniais;",
  "situações com risco de execução, bloqueio, busca de bens ou vencimento antecipado;",
  "empresas que precisam decidir antes de assinar novo acordo.",
];

const naoIndicado = [
  "quem busca apenas promessa de desconto;",
  "quem deseja ação judicial automática sem análise prévia;",
  "quem procura solução genérica para qualquer dívida;",
  "quem não pretende organizar documentos mínimos;",
  "quem deseja apenas adiar o problema sem avaliar riscos;",
  "quem espera resultado garantido ou imediato.",
];

const etapasProcesso = [
  {
    n: "1",
    title: "Triagem inicial",
    body: "O empresário informa o cenário básico: tipo de dívida, banco, estágio da cobrança, garantias e urgência.",
  },
  {
    n: "2",
    title: "Enquadramento técnico",
    body: "As informações são avaliadas para verificar aderência à gestão estratégica de passivo bancário empresarial.",
  },
  {
    n: "3",
    title: "Documentos essenciais",
    body: "Quando houver aderência, podem ser solicitados contratos, notificações, extratos, propostas, garantias e comunicações bancárias.",
  },
  {
    n: "4",
    title: "Leitura jurídica do passivo",
    body: "A análise observa produto bancário, garantias, executividade, riscos, margem defensiva, margem negocial e prioridades.",
  },
  {
    n: "5",
    title: "Próximos passos",
    body: "A partir da leitura, podem ser avaliados caminhos como negociação assistida, contenção de danos, defesa judicial, medidas preventivas ou reorganização estratégica.",
  },
];

const categoriasBlog = [
  "Contratos bancários empresariais",
  "Renegociação e risco",
  "Garantias e patrimônio",
  "Cobrança, execução e bloqueios",
  "Gestão estratégica de passivos",
];

const Index = () => {
  const artigosRecentes = getAllArticles().slice(0, 2);

  return (
    <SiteShell>
      <PageSeo
        title="Walter Inglez — Gestão estratégica de passivo bancário empresarial"
        description="Antes de renegociar, assinar acordo ou responder cobrança, entenda a posição jurídica da empresa. Triagem inicial conduzida por Walter Inglez Advocacia e Consultoria."
        path={ROUTES.home}
      />

      {/* ======================================================
          SEÇÃO 1 — HERO
          ====================================================== */}
      <section className="border-b border-border/20">
        <div className="container max-w-6xl py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-start md:gap-16">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Gestão Estratégica de Passivo Bancário
              </p>
              <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Gestão estratégica de passivo bancário para empresas sob
                pressão de bancos.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Antes de renegociar, assinar um acordo ou responder a uma
                cobrança, a empresa precisa entender o que está em jogo:
                contratos, garantias, risco e margem real de decisão.
              </p>
              <p className="mt-5 max-w-xl text-base italic text-muted-foreground/90">
                Em dívida bancária empresarial, decidir sem leitura prévia
                costuma ampliar o risco.
              </p>
              <div className="mt-7">
                <SolicitarTriagemCTA size="lg" />
              </div>
              <p className="mt-4 max-w-xl text-xs leading-relaxed text-muted-foreground/90">
                Etapa inicial de enquadramento técnico do seu cenário.
              </p>
              <p className="mt-1 max-w-xl text-[11px] leading-relaxed text-muted-foreground/70">
                Sem envio de documentos nesta etapa inicial.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                Walter Inglez Advocacia e Consultoria
              </p>
            </div>

            <aside
              aria-label="Eixos de leitura do passivo"
              className="md:sticky md:top-24"
            >
              <div className="rounded-md border border-border/60 bg-card/60 p-6 md:w-64">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Eixos de leitura
                </p>
                <ul className="mt-5 space-y-3 text-sm text-foreground/90">
                  {cardLateralHero.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-b border-border/40 pb-3 last:border-b-0 last:pb-0"
                    >
                      <span
                        aria-hidden
                        className="h-1 w-1 shrink-0 rounded-full bg-primary"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 2 — POSICIONAMENTO
          ====================================================== */}
      <section className="border-b border-border/20">
        <div className="container max-w-3xl py-12 md:py-16">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Antes de discutir valor, prazo ou desconto, é preciso saber qual é
            a posição jurídica da empresa.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Muitos empresários só procuram uma saída quando o banco já
              ligou, a proposta chegou, a cobrança avançou ou a execução
              parece próxima.
            </p>
            <p>
              Nessa hora, a pressão leva a decisões rápidas: aceitar acordo,
              alongar dívida, entregar nova garantia, refinanciar ou apenas
              ganhar tempo.
            </p>
            <p>
              Sem leitura jurídica do passivo, a decisão pode ser tomada com
              base na pressão do banco — e não no risco real da empresa.
            </p>
          </div>

          <h3 className="mt-12 font-serif text-xl text-foreground md:text-2xl">
            Isso costuma acontecer quando:
          </h3>
          <ul className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {sinaisDePressao.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-3 h-1 w-1 shrink-0 rounded-full bg-primary"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-10 border-l-2 border-primary/60 pl-6 text-base italic text-foreground/90 md:text-lg">
            A leitura do passivo vem antes da escolha do caminho.
          </p>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 3 — EDUCAÇÃO ESTRATÉGICA
          ====================================================== */}
      <section className="border-b border-border/20 bg-secondary/30">
        <div className="container max-w-5xl py-12 md:py-16">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Renegociar sem leitura pode apenas reorganizar o problema.
          </h2>
          <div className="mt-7 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Nem toda proposta bancária é ruim. Nem toda renegociação deve
              ser recusada.
            </p>
            <p>
              O ponto é outro: uma negociação só pode ser avaliada depois que
              se compreende a estrutura da dívida.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="rounded-lg border border-border/60 bg-card/60 p-6 md:p-8">
              <h3 className="font-serif text-xl text-foreground md:text-2xl">
                Renegociação sem leitura
              </h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {colunaRenegociacaoSemLeitura.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-border/60 bg-card/60 p-6 md:p-8">
              <h3 className="font-serif text-xl text-foreground md:text-2xl">
                Gestão estratégica do passivo
              </h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                {colunaGestaoEstrategica.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-primary"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-3xl border-l-2 border-primary/60 pl-6 text-base italic text-foreground/90 md:text-lg">
            A pergunta não é apenas quanto o banco aceita. A pergunta anterior
            é: qual é a posição real da empresa antes de aceitar qualquer
            coisa?
          </p>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 4 — O QUE A TRIAGEM FAZ
          ====================================================== */}
      <section className="border-b border-border/20">
        <div className="container max-w-3xl py-12 md:py-16">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            O que a triagem inicial procura identificar
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            A triagem é a etapa inicial de enquadramento do cenário. Ela não
            substitui análise documental completa, mas permite verificar
            aderência técnica, urgência e possíveis próximos passos.
          </p>

          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {triagemIdentifica.map((item) => (
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

          <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            A primeira leitura ajuda a separar três coisas que muitas vezes
            aparecem misturadas: problema financeiro, risco jurídico e
            estratégia de decisão.
          </p>

          <p className="mt-6 text-xs leading-relaxed text-muted-foreground/80">
            A triagem não garante aceitação do caso, não antecipa resultado e
            não substitui análise jurídica completa dos documentos.
          </p>

          <div className="mt-8">
            <SolicitarTriagemCTA />
          </div>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 5 — PARA QUEM É · NÃO É
          ====================================================== */}
      <section className="border-b border-border/20 bg-secondary/30">
        <div className="container max-w-5xl py-12 md:py-16">
          <h2 className="text-center font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Para quem esta atuação foi pensada
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border/60 bg-card/60 p-6 md:p-8">
              <h3 className="font-serif text-xl text-foreground md:text-2xl">
                Pode fazer sentido para:
              </h3>
              <ul className="mt-6 space-y-4">
                {podeFazerSentido.map((item) => (
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
                Não é indicado para:
              </h3>
              <ul className="mt-6 space-y-4">
                {naoIndicado.map((item) => (
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

          <p className="mx-auto mt-10 max-w-3xl text-center text-base italic text-muted-foreground md:text-lg">
            Nem todo caso exige ação judicial. Nem todo acordo deve ser
            recusado. Nem toda urgência deve ser enfrentada da mesma forma.
          </p>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 6 — COMO FUNCIONA
          ====================================================== */}
      <section className="border-b border-border/20">
        <div className="container max-w-3xl pt-8 pb-12 md:pt-10 md:pb-16">
          <h2 className="text-center font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Como funciona o primeiro encaminhamento
          </h2>

          <ol className="mt-12 space-y-10">
            {etapasProcesso.map((step, i) => (
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
                {i < etapasProcesso.length - 1 ? (
                  <div className="mt-8 flex justify-center" aria-hidden>
                    <ArrowDown className="h-5 w-5 text-muted-foreground/60" />
                  </div>
                ) : null}
              </li>
            ))}
          </ol>

          <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground/80">
            Cada caso depende dos documentos, do estágio da cobrança e da
            posição jurídica da empresa. Não há promessa de resultado.
          </p>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 7 — INTEGRAÇÃO COM BLOG
          ====================================================== */}
      <section className="border-b border-border/20 bg-secondary/30">
        <div className="container max-w-5xl py-12 md:py-16">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Leituras para empresários que precisam decidir sob pressão
            bancária
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              O blog reúne análises sobre contratos bancários, garantias,
              renegociação, cobrança, execução, risco patrimonial e gestão
              estratégica de passivos.
            </p>
            <p>
              O objetivo é ajudar o empresário a compreender riscos antes de
              agir, sem substituir análise jurídica individual.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {categoriasBlog.map((cat) => (
              <li
                key={cat}
                className="rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-foreground/80"
              >
                {cat}
              </li>
            ))}
          </ul>

          {artigosRecentes.length > 0 ? (
            <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
              {artigosRecentes.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : null}

          <div className="mt-12">
            <Link
              to={ROUTES.blog}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Acessar artigos
            </Link>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground/80">
            Conteúdo informativo, sem promessa de resultado e sem substituição
            da análise do caso concreto.
          </p>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 8 — AUTORIDADE
          ====================================================== */}
      <section className="border-b border-border/20">
        <div className="container max-w-3xl py-12 md:py-16">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Quem conduz a análise
          </h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              A atuação é conduzida por Walter Inglez Advocacia e
              Consultoria, com foco em gestão estratégica de passivo bancário
              para empresas sob pressão de bancos.
            </p>
            <p>
              Antes da advocacia, Walter construiu trajetória de mais de três
              décadas em ambientes de decisão técnica, planejamento e
              responsabilidade estratégica.
            </p>
            <p>
              Essa experiência orienta a forma de analisar o passivo
              bancário: primeiro compreender o cenário, depois definir o
              movimento.
            </p>
            <p>
              A atuação combina leitura jurídica, organização documental,
              análise de risco, compreensão econômica do contrato bancário e
              definição prudente dos próximos passos — sem automatizar
              litígios e sem tratar renegociação como solução universal.
            </p>
          </div>

          <p className="mt-10 border-l-2 border-primary/60 pl-6 text-base italic text-foreground/90 md:text-lg">
            O objetivo não é substituir a decisão do empresário. É permitir
            que ela seja tomada com mais informação, método e consciência de
            risco.
          </p>

          <div className="mt-8 border-t border-border/60 pt-6 text-sm">
            <p className="font-medium text-foreground">
              Walter Inglez Advocacia e Consultoria
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          SEÇÃO 9 — BLOCO FINAL DE DECISÃO
          ====================================================== */}
      <section>
        <div className="container max-w-3xl py-16 text-center md:py-20">
          <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-foreground md:text-5xl">
            Antes de responder ao banco, entenda a posição da sua empresa.
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Quando a empresa está sob pressão bancária, não decidir também
              produz efeitos.
            </p>
            <p>
              Sem leitura do passivo, a decisão tende a ser conduzida pelo
              tempo, pela cobrança ou pela proposta apresentada pelo próprio
              banco.
            </p>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-base italic text-foreground/90 md:text-lg">
            O banco conhece os contratos, as garantias e os caminhos de
            cobrança. A empresa também precisa conhecer o próprio cenário
            antes do próximo passo.
          </p>

          <div className="mt-10 flex justify-center">
            <SolicitarTriagemCTA size="lg" />
          </div>

          <p className="mx-auto mt-8 max-w-xl text-xs leading-relaxed text-muted-foreground/80">
            A triagem verifica aderência técnica, urgência e possibilidade de
            análise jurídica do passivo. Não há promessa de resultado.
          </p>
        </div>
      </section>
    </SiteShell>
  );
};

export default Index;
