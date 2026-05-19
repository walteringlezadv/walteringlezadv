import { Helmet } from "react-helmet";
import {
  buildCanonicalUrl,
  buildPageTitle,
  DEFAULT_OG_IMAGE,
  type PageSeoInput,
} from "@/lib/seo";

type PageSeoProps = PageSeoInput & {
  /** Schemas JSON-LD a injetar como <script type="application/ld+json">. */
  jsonLd?: object[];
};

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
  jsonLd,
}: PageSeoProps) => {
  const fullTitle = buildPageTitle(title);
  const canonical = buildCanonicalUrl(path);
  const ogImage = image ?? DEFAULT_OG_IMAGE;

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
      <meta property="og:site_name" content="Walter Inglez" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="672" />
      <meta property="og:image:alt" content="Walter Inglez — Você tem certeza do que está assinando?" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD */}
      {jsonLd?.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
