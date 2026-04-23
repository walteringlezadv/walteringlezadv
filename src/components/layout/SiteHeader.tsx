import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { MAIN_NAV, ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

/**
 * Cabeçalho institucional único, compartilhado por todas as rotas
 * (incluindo o blog). Garante continuidade visual do site-base.
 *
 * Os rótulos do menu vêm exclusivamente de MAIN_NAV (lib/routes.ts).
 */
export const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link
          to={ROUTES.home}
          className="font-semibold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          Walter Inglez
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-6">
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

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        aria-label="Navegação principal (móvel)"
        className={cn(
          "border-t border-border md:hidden",
          open ? "block" : "hidden",
        )}
      >
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
      </nav>
    </header>
  );
};
