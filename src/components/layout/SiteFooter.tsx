import { Link } from "react-router-dom";
import { MAIN_NAV, ROUTES } from "@/lib/routes";

/**
 * Rodapé institucional único.
 *
 * Estrutura preparada para receber, na Fase 2, a identificação institucional
 * correta da banca (sociedade de advogados + registro da banca), separada
 * de pessoa física. Endereços de Fortaleza e São Paulo com CEP serão
 * preenchidos com os dados oficiais nessa mesma fase.
 */
export const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Identificação institucional (placeholder estrutural) */}
          <div>
            <Link
              to={ROUTES.home}
              className="font-semibold tracking-tight text-foreground"
            >
              Walter Inglez
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Gestão estratégica do passivo bancário empresarial.
            </p>
          </div>

          {/* Endereços (placeholders — dados oficiais entram na Fase 2) */}
          <div>
            <h2 className="text-sm font-medium text-foreground">Endereços</h2>
            <address className="mt-3 space-y-3 text-sm not-italic text-muted-foreground">
              <div>
                <div className="font-medium text-foreground">Fortaleza</div>
                <div>CEP a confirmar</div>
              </div>
              <div>
                <div className="font-medium text-foreground">São Paulo</div>
                <div>CEP a confirmar</div>
              </div>
            </address>
          </div>

          {/* Navegação secundária */}
          <div>
            <h2 className="text-sm font-medium text-foreground">Navegação</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {MAIN_NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {year} Walter Inglez. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
