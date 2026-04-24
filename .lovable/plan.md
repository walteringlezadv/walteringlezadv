

# Pre-Publish Audit Plan — Walter Inglez

A read-only audit of the current site before publishing. No changes will be made during the audit itself; findings are reported at the end, and any required fixes are scoped as a separate phase.

## Recommended Execution Order

The order moves from **structural foundations** (routes, labels) → **page-level integrity** (Home, institutional, blog) → **cross-cutting quality** (SEO, responsive, a11y). Structural issues found early would invalidate later checks, so they go first.

---

### 1. Navigation and Routes
- `ROUTES` in `src/lib/routes.ts` matches every `<Route>` in `src/App.tsx`.
- `MAIN_NAV` order is exactly: Home · Como Funciona · Sobre · Blog · Próximo Passo · Contato.
- All `<Link to=...>` use `ROUTES.*` constants — no hardcoded paths.
- `blogPostPath(slug)` is used everywhere a post is linked.
- `NotFound` catch-all `*` is last and renders on unknown URLs.
- Internal linking path Blog → ComoFunciona → ProximoPasso is intact (Phase 4).

### 2. PT-BR Locked Labels
- All occurrences of `INSTITUTIONAL_LABELS.menuProximoPasso`, `pageTitleProximoPasso`, and `ctaSolicitarTriagem` come from the constants — no hardcoded variants.
- Grep for stray strings: "solicitar triagem", "Próximo passo", "Inglêz", any English public copy.
- Confirm no new public-facing terminology was introduced in any phase.

### 3. CTA Discipline
- `<SolicitarTriagemCTA />` is the only component rendering the CTA.
- Exactly **one** primary CTA per page (header CTA is global and excluded from per-page count).
- **Zero** CTA buttons inside `src/content/articles/*.tsx`.
- All CTAs route to `ROUTES.proximoPasso`.
- No decorative or duplicate CTA placements.

### 4. Header and Logo Usage (regression check only)
- `SiteHeader.tsx` still uses the official `logo-wi.svg` (no typographic monogram).
- Header brand area unchanged since approval.
- Lockup renders consistently across Home, institutional, blog, and post routes.
- Mobile drawer opens/closes; nav and CTA work correctly.

### 5. Home Integrity (regression check only)
- Home content/structure unchanged since approval.
- One canonical CTA on Home.
- No marketing or urgency language.

### 6. Institutional Pages Consistency
- `Sobre`, `ComoFunciona`, `Contato`, `ProximoPasso` each use `<PageHeader />` and `<SiteShell />`.
- Each renders one `<PageSeo />` with route-appropriate title, description, and canonical path.
- Each has exactly one canonical CTA (with `ProximoPasso` reviewed as the destination page).
- Sober institutional tone preserved.

### 7. Blog and Article Pages
- `/blog`: lists all articles from `src/content/articles/index.tsx`, uses `ArticleCard`, has the inline link to `ComoFunciona`, plus the canonical CTA.
- `/blog/:slug`: correct article via slug lookup, `ArticleMeta` renders, `ArticleProse` typography applied, "Voltar ao índice" present, "Leitura relacionada" links to `ComoFunciona`, single canonical CTA at the end.
- Invalid slug routes to `NotFound`.
- No embedded CTA buttons in article content files.
- Article metadata (date, category, reading time) renders in PT-BR via `Intl`.

### 8. SEO Metadata
- Every page renders `<PageSeo />` exactly once.
- `<title>` unique per route, ≤60 chars.
- `<meta name="description">` unique per route, ≤160 chars.
- Canonical URLs use `SITE_URL` from `src/lib/seo.ts`.
- Open Graph tags present on every route; articles use `type="article"`.
- `index.html` base meta is institutional (review `og:image`, `twitter:site` for Lovable defaults).
- `public/robots.txt` allows relevant crawlers.
- Semantic HTML: single `<h1>` per page; proper `<article>`, `<time>`, `<nav>`.
- Flag `sitemap.xml` as a recommendation, not a blocker.

### 9. Mobile Responsiveness
- Test breakpoints: 360, 390, 768, 1024, 1366.
- Header collapses to drawer below `md`; CTA visible inside drawer.
- No horizontal scroll on Home, institutional, blog, BlogPost.
- Article prose remains legible (line length, font size) on mobile.
- Footer stacks correctly on mobile.

### 10. Accessibility Basics
- Single `<h1>` per page; logical heading hierarchy (no skips).
- All interactive elements have accessible names.
- `aria-label` on icon-only buttons (mobile menu toggle, etc.).
- Focus-visible states on all interactive elements.
- Color contrast (especially `text-muted-foreground` on `bg-background`) meets WCAG AA.
- Images have `alt` text or `aria-hidden="true"` when decorative.
- `<html lang="pt-BR">` confirmed in `index.html`.
- Keyboard navigation: logical tab order, drawer is keyboard-accessible.
- Forms (Contato, ProximoPasso) have associated `<label>` elements.

---

## Method

The audit is **read-only**: file inspection (`code--view`, `code--search_files`) plus targeted browser checks (`browser--navigate_to_sandbox`, `browser--screenshot`, `browser--set_viewport_size`) for header behavior, mobile breakpoints, and visual regression on Home and key pages.

## Deliverable

A single audit report grouped by the 10 sections above, each item marked **Pass / Warn / Fail** with a one-line note and file reference. Any required fixes are listed as a follow-up scope — not executed during the audit.

## What This Plan Does Not Do

- No code changes.
- No content changes.
- No new sections, CTAs, labels, or design tokens.
- No work on the header, Home, or any approved area beyond regression verification.

Awaiting approval to run the audit, or instruction to run a subset (e.g., sections 1–3 only first).

