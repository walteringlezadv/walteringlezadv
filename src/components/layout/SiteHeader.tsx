import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { SolicitarTriagemCTA } from "@/components/cta/SolicitarTriagemCTA";
import { MAIN_NAV, ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";
import logoWI from "@/assets/logo-wi.svg";

/**
 * Cabeçalho institucional único, compartilhado por todas as rotas
 * (incluindo o blog). Reproduz a lógica do header validado em
 * walteringlezadv-estrutura.manus.space:
 *
 *  - Esquerda: lockup tipográfico (monograma WI + nome + descritor)
 *  - Centro:   tagline institucional "Gestão Estratégica de Passivos"
 *  - Direita:  CTA canônico "Solicitar triagem"
 *
 * A barra de navegação principal permanece logo abaixo do lockup,
 * preservando a arquitetura de rotas já aprovada (PT-BR).
 */
export const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Linha institucional: lockup · tagline · CTA */}
      <div className="container grid h-28 grid-cols-[auto_1fr_auto] items-center gap-8">
        {/* Lockup institucional (esquerda) */}
        <Link
          to={ROUTES.home}
          onClick={() => setOpen(false)}
          className="flex items-center gap-5 group"
          aria-label="Walter Inglez — Advocacia e Consultoria"
        >
          <img
            src={logoWI}
            alt=""
            aria-hidden="true"
            className="h-20 w-20 shrink-0 transition-opacity group-hover:opacity-90"
          />
          <span
            aria-hidden="true"
            className="hidden sm:block h-14 w-px bg-border/70"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-xl text-foreground tracking-[0.12em]">
              WALTER INGLEZ
            </span>
            <span className="mt-1 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Advocacia e Consultoria
            </span>
          </span>
        </Link>

        {/* Tagline institucional (centro) — desktop apenas */}
        <p className="hidden lg:block text-center font-serif text-sm italic text-muted-foreground">
          Gestão Estratégica de Passivos
        </p>

        {/* CTA institucional (direita) — desktop apenas */}
        <div className="hidden md:flex items-center justify-end">
          <SolicitarTriagemCTA size="sm" />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="col-start-3 inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Linha de navegação principal (desktop) */}
      <nav
        aria-label="Navegação principal"
        className="hidden md:block border-t border-border/60"
      >
        <ul className="container flex items-center justify-center gap-8 py-3">
          {MAIN_NAV.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === ROUTES.home}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeClassName="text-foreground font-medium"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile nav (drawer simples) */}
      <nav
        aria-label="Navegação principal (móvel)"
        className={cn(
          "border-t border-border md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <p className="container pt-3 text-center font-serif text-sm italic text-muted-foreground">
          Gestão Estratégica de Passivos
        </p>
        <ul className="container flex flex-col gap-1 py-3">
          {MAIN_NAV.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === ROUTES.home}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                activeClassName="text-foreground font-medium"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="container pb-4" onClick={() => setOpen(false)}>
          <SolicitarTriagemCTA className="w-full" />
        </div>
      </nav>
    </header>
  );
};
