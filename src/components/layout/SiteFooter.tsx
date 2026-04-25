import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Youtube } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { ROUTES } from "@/lib/routes";
import {
  EMAIL_ADDRESS,
  EMAIL_HREF,
  WHATSAPP_DISPLAY,
  WHATSAPP_HREF,
} from "@/lib/contact";

/**
 * Rodapé institucional global — bloco final único.
 *
 * Consolida identificação institucional, canais de contato (WhatsApp +
 * e-mail via Gmail compose), endereços completos das duas unidades e
 * presença digital. É o único bloco de fechamento utilizado em todas as
 * páginas — nenhuma página deve repetir essas informações acima dele.
 */

/** TikTok não existe na lucide-react — SVG mínimo equivalente. */
const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.71a8.16 8.16 0 0 0 4.77 1.52V6.78a4.85 4.85 0 0 1-1.84-.09Z" />
  </svg>
);

type SocialLink = {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/walteringlezadv", Icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/@walteringlezadv", Icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com/in/walteringlezadv", Icon: Linkedin },
  { label: "TikTok", href: "https://tiktok.com/@walteringlezadv", Icon: TikTokIcon },
];

export const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-background">
      <div className="container py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
          {/* Coluna 1 — Institucional */}
          <div className="space-y-3">
            <Link
              to={ROUTES.home}
              className="block font-serif text-base leading-tight text-foreground"
            >
              Walter Inglez Advocacia
              <br />e Consultoria
            </Link>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Gestão estratégica do passivo bancário empresarial.
            </p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Atendimento mediante triagem prévia.
            </p>
            <div className="pt-2 text-xs leading-relaxed text-muted-foreground/80">
              <p>CNPJ: 55.880.505/0001-80</p>
              <p>OAB/CE 04325</p>
            </div>
          </div>

          {/* Coluna 2 — Contato */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Contato
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MessageCircle
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>
                    <span className="block text-[11px] uppercase tracking-wider text-muted-foreground/70">
                      WhatsApp
                    </span>
                    <span className="block">{WHATSAPP_DISPLAY}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>
                    <span className="block text-[11px] uppercase tracking-wider text-muted-foreground/70">
                      E-mail
                    </span>
                    <span className="block break-all">{EMAIL_ADDRESS}</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 — Endereços */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Endereços
            </h3>
            <ul className="space-y-4 text-xs leading-relaxed">
              <li className="flex items-start gap-2">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden
                />
                <div>
                  <p className="font-medium text-foreground">Fortaleza – CE</p>
                  <p className="mt-1 text-muted-foreground">
                    R. Dr. Gilberto Studart, 55
                    <br />
                    Torre Sul, Sala 1.018 — Cocó
                    <br />
                    CEP 60192-105
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden
                />
                <div>
                  <p className="font-medium text-foreground">São Paulo – SP</p>
                  <p className="mt-1 text-muted-foreground">
                    Av. Paulista, 1636
                    <br />
                    Sala 1105/1064 — Cerqueira César
                    <br />
                    CEP 01310-200
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Coluna 4 — Presença digital */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Presença digital
            </h3>
            <ul className="flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
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
