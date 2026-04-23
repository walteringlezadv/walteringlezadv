/**
 * Fonte única de rotas e rótulos institucionais públicos.
 *
 * IMPORTANTE — proteção semântica:
 * Os rótulos abaixo são institucionais e estão exclusivamente em PT-BR.
 * Nenhum componente deve reescrever essas strings literalmente.
 * Sempre importe de INSTITUTIONAL_LABELS para garantir consistência.
 */

export const ROUTES = {
  home: "/",
  comoFunciona: "/como-funciona",
  sobre: "/sobre",
  blog: "/blog",
  blogPost: "/blog/:slug",
  proximoPasso: "/proximo-passo",
  contato: "/contato",
} as const;

export const INSTITUTIONAL_LABELS = {
  // Rótulo do menu para a página de conversão
  menuProximoPasso: "Próximo Passo",
  // Título interno (h1) da página de conversão
  pageTitleProximoPasso: "Avaliação de Aderência e Próximo Passo",
  // CTA único e canônico de conversão em todo o site
  ctaSolicitarTriagem: "Solicitar triagem",
} as const;

/**
 * Itens do menu principal, na ordem aprovada:
 * Home · Como Funciona · Sobre · Blog · Próximo Passo · Contato
 */
export const MAIN_NAV: ReadonlyArray<{ label: string; to: string }> = [
  { label: "Home", to: ROUTES.home },
  { label: "Como Funciona", to: ROUTES.comoFunciona },
  { label: "Sobre", to: ROUTES.sobre },
  { label: "Blog", to: ROUTES.blog },
  { label: INSTITUTIONAL_LABELS.menuProximoPasso, to: ROUTES.proximoPasso },
  { label: "Contato", to: ROUTES.contato },
];

/**
 * Helper para construir a URL de um post do blog a partir do slug.
 */
export const blogPostPath = (slug: string) => `/blog/${slug}`;
