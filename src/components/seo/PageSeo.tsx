import { Helmet } from "react-helmet";
import {
  buildCanonicalUrl,
  buildPageTitle,
  type PageSeoInput,
} from "@/lib/seo";

/**
 * Componente único para meta tags por rota.
 * Toda página deve renderizar <PageSeo /> uma vez.
 */
export const PageSeo = ({
  title,
  description,
  path,
  image,
  type = "website",
}: PageSeoInput) => {
  const fullTitle = buildPageTitle(title);
  const canonical = buildCanonicalUrl(path);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      {image ? <meta property="og:image" content={image} /> : null}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image ? <meta name="twitter:image" content={image} /> : null}
    </Helmet>
  );
};
