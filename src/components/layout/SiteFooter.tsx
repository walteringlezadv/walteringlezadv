import { Link } from "react-router-dom";
import { MAIN_NAV, ROUTES } from "@/lib/routes";
import {
  EMAIL_ADDRESS,
  EMAIL_HREF,
  WHATSAPP_DISPLAY,
  WHATSAPP_HREF,
} from "@/lib/contact";

/**
 * Rodapé institucional simplificado.
 *
 * Estrutura em 3 colunas:
 *  1. Identificação institucional
 *  2. Contato (WhatsApp + e-mail Gmail compose)
 *  3. Presença digital (redes sociais)
 *
 * Endereços completos foram movidos para /contato para manter
 * o rodapé visualmente leve.
 */

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/walteringlezadv" },
  { label: "YouTube", href: "https://youtube.com/@walteringlezadv" },
  { label: "LinkedIn", href: "https://linkedin.com/in/walteringlezadv" },
  { label: "TikTok", href: "https://tiktok.com/@walteringlezadv" },
];

export const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Coluna 1 — Identificação institucional */}
          <div>
            <Link
              to={ROUTES.home}
              className="font-semibold tracking-tight text-foreground"
            >
              Walter Inglez Advocacia e Consultoria
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Gestão estratégica do passivo bancário empresarial.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Atendimento mediante triagem prévia.
            </p>
          </div>

          {/* Coluna 2 — Contato */}
          <div>
            <h2 className="text-sm font-medium text-foreground">Contato</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="text-muted-foreground">WhatsApp: </span>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <span className="text-muted-foreground">E-mail: </span>
                <a
                  href={EMAIL_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-foreground transition-colors hover:text-primary"
                >
                  {EMAIL_ADDRESS}
                </a>
              </li>
            </ul>

            <h2 className="mt-8 text-sm font-medium text-foreground">
              Navegação
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
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

          {/* Coluna 3 — Presença digital */}
          <div>
            <h2 className="text-sm font-medium text-foreground">
              Presença digital
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {SOCIAL_LINKS.map((social, idx) => (
                <li key={social.label} className="flex items-center gap-x-4">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {social.label}
                  </a>
                  {idx < SOCIAL_LINKS.length - 1 && (
                    <span aria-hidden className="text-muted-foreground/50">
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {year} Walter Inglez Advocacia e Consultoria. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
};
