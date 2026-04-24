import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";
import { MAIN_NAV, ROUTES } from "@/lib/routes";
import {
  EMAIL_ADDRESS,
  EMAIL_HREF,
  WHATSAPP_DISPLAY,
  WHATSAPP_HREF,
} from "@/lib/contact";

/**
 * Rodapé institucional único.
 *
 * Bloco de credibilidade: identificação completa, cidades de atuação,
 * canais diretos (WhatsApp e e-mail) e estrutura de presença digital
 * (placeholders — URLs oficiais entram quando disponíveis).
 */
export const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Identificação institucional */}
          <div className="md:col-span-1">
            <Link
              to={ROUTES.home}
              className="font-semibold tracking-tight text-foreground"
            >
              Walter Inglez Advocacia e Consultoria
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Gestão estratégica do passivo bancário empresarial.
            </p>
          </div>

          {/* Atendimento */}
          <div>
            <h2 className="text-sm font-medium text-foreground">Atendimento</h2>
            <ul className="mt-3 space-y-4 text-sm text-muted-foreground">
              <li>
                <p className="font-medium text-foreground">Fortaleza – CE</p>
                <p className="mt-1 leading-relaxed">
                  R. Dr. Gilberto Studart, 55, Torre Sul, Sala 1.018 — Cocó
                  <br />
                  CEP 60192-105
                </p>
              </li>
              <li>
                <p className="font-medium text-foreground">São Paulo – SP</p>
                <p className="mt-1 leading-relaxed">
                  Av. Paulista, 1636, Sala 1105/1064 — Cerqueira César
                  <br />
                  CEP 01310-200
                </p>
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Atendimento mediante triagem prévia.
            </p>
          </div>

          {/* Canais diretos */}
          <div>
            <h2 className="text-sm font-medium text-foreground">Contato</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_HREF}
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden />
                  {EMAIL_ADDRESS}
                </a>
              </li>
            </ul>
          </div>

          {/* Navegação + Presença digital */}
          <div className="space-y-6">
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

            <div>
              <h2 className="text-sm font-medium text-foreground">
                Presença digital
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href="https://instagram.com/walteringlezadv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@walteringlezadv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/walteringlezadv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@walteringlezadv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {year} Walter Inglez Advocacia e Consultoria. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
