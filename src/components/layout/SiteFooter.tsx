import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { MAIN_NAV, ROUTES } from "@/lib/routes";
import {
  EMAIL_ADDRESS,
  EMAIL_HREF,
  WHATSAPP_DISPLAY,
  WHATSAPP_HREF,
} from "@/lib/contact";

/**
 * Rodapé institucional — layout limpo em 3 colunas.
 *
 *  1. Identificação institucional
 *  2. Contato (WhatsApp + e-mail Gmail compose)
 *  3. Presença digital (ícones de redes sociais)
 *
 * Endereços completos vivem em /contato. O rodapé é deliberadamente
 * leve, com tipografia secundária reduzida e bastante respiro vertical.
 */

/** TikTok não existe na lucide-react — fornecemos um SVG mínimo equivalente. */
const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.71a8.16 8.16 0 0 0 4.77 1.52V6.78a4.85 4.85 0 0 1-1.84-.09Z" />
  </svg>
);

type SocialLink = {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/walteringlezadv",
    Icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@walteringlezadv",
    Icon: Youtube,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/walteringlezadv",
    Icon: Linkedin,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@walteringlezadv",
    Icon: TikTokIcon,
  },
];

export const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-background">
      <div className="container py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {/* Coluna 1 — Identificação institucional */}
          <div className="space-y-3">
            <Link
              to={ROUTES.home}
              className="block text-sm font-semibold tracking-tight text-foreground"
            >
              Walter Inglez Advocacia e Consultoria
            </Link>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Gestão estratégica do passivo bancário empresarial.
            </p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Atendimento mediante triagem prévia.
            </p>
          </div>

          {/* Coluna 2 — Contato */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Contato
            </h2>
            <ul className="mt-5 space-y-3 text-xs">
              <li className="flex flex-col gap-0.5">
                <span className="text-muted-foreground">WhatsApp</span>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-muted-foreground">E-mail</span>
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

            <h2 className="mt-8 text-xs font-semibold uppercase tracking-wider text-foreground">
              Navegação
            </h2>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs">
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
            <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Presença digital
            </h2>
            <ul className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-[11px] leading-relaxed text-muted-foreground">
          © {year} Walter Inglez Advocacia e Consultoria. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
};
