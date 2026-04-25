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
 * Hierarquia visual (do mais discreto ao mais destacado):
 *  1. CNPJ + OAB           → microcópia silenciosa
 *  2. Institucional (nome) → presença sóbria
 *  3. Contato              → leitura intermediária
 *  4. Endereços            → destaque principal
 *  5. Redes sociais        → destaque visual (autoridade pública)
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
      <div className="container py-16 md:py-20">
        <div className="grid gap-14 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-16">
          {/* Coluna 1 — Institucional (presença discreta) */}
          <div className="space-y-3">
            <Link
              to={ROUTES.home}
              className="block font-serif text-base leading-tight text-foreground/90"
            >
              Walter Inglez Advocacia
              <br />e Consultoria
            </Link>
            <p className="text-xs leading-relaxed text-foreground/80">
              Gestão estratégica do passivo bancário empresarial.
            </p>
            <p className="text-xs leading-relaxed text-foreground/80">
              Atendimento mediante triagem prévia.
            </p>
            <div className="pt-3 space-y-0.5 text-[11px] leading-relaxed text-foreground/60">
              <p>CNPJ: 55.880.505/0001-80</p>
              <p>OAB/CE 04325</p>
            </div>
          </div>

          {/* Coluna 2 — Contato (leitura intermediária) */}
          <div className="space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/90">
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MessageCircle
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>
                    <span className="block text-[11px] uppercase tracking-wider text-foreground/60">
                      WhatsApp
                    </span>
                    <span className="mt-0.5 block">{WHATSAPP_DISPLAY}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>
                    <span className="block text-[11px] uppercase tracking-wider text-foreground/60">
                      E-mail
                    </span>
                    <span className="mt-0.5 block break-all">{EMAIL_ADDRESS}</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 — Endereços (DESTAQUE PRINCIPAL) */}
          <div className="space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/90">
              Endereços
            </h3>
            <ul className="space-y-7">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-1 h-[18px] w-[18px] shrink-0 text-primary"
                  aria-hidden
                />
                <div className="space-y-1.5">
                  <p className="font-medium text-[15px] leading-tight text-foreground">
                    Fortaleza – CE
                  </p>
                  <address className="not-italic text-sm leading-[1.65] text-muted-foreground">
                    R. Dr. Gilberto Studart, 55
                    <br />
                    Torre Sul, Sala 1.018
                    <br />
                    Cocó · CEP 60192-105
                  </address>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-1 h-[18px] w-[18px] shrink-0 text-primary"
                  aria-hidden
                />
                <div className="space-y-1.5">
                  <p className="font-medium text-[15px] leading-tight text-foreground">
                    São Paulo – SP
                  </p>
                  <address className="not-italic text-sm leading-[1.65] text-muted-foreground">
                    Av. Paulista, 1636
                    <br />
                    Sala 1105/1064
                    <br />
                    Cerqueira César · CEP 01310-200
                  </address>
                </div>
              </li>
            </ul>
          </div>

          {/* Coluna 4 — Presença digital (DESTAQUE VISUAL) */}
          <div className="space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/90 lg:text-right">
              Presença digital
            </h3>
            <ul className="flex flex-wrap items-center justify-center gap-3 lg:justify-end">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-[0_0_18px_-4px_hsl(var(--primary)/0.45)]"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border/70 pt-6 text-[11px] leading-relaxed text-foreground/55">
          © {year} Walter Inglez Advocacia e Consultoria. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
};
