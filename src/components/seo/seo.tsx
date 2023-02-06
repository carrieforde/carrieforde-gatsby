import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

export const Seo: React.FC<
  React.PropsWithChildren<Queries.PageQuery["mdx"]>
> = ({ children, frontmatter }) => {
  const { site } = useStaticQuery<Queries.SeoQuery>(graphql`
    query Seo {
      site {
        siteMetadata {
          author
          title
          description
        }
      }
    }
  `);

  const titleText = [frontmatter?.title, site?.siteMetadata?.title].join(" | ");
  const metaTitle = frontmatter?.title ?? site?.siteMetadata?.title ?? "";
  const metaDescription = frontmatter?.description?.join(" ") ?? "";
  const author = site?.siteMetadata?.author ?? "";

  return (
    <>
      <link href="https://fonts.gstatic.com" rel="preconnect" />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Libre+Franklin:ital,wght@0,300;0,400;0,500;1,400&display=swap"
        rel="stylesheet"
      />

      <title>{titleText}</title>

      <meta content={metaDescription} name="description" />
      <meta content={metaTitle} name="og:title" />
      <meta content={metaDescription} name="og:description" />
      <meta content="website" name="og:type" />
      <meta content="summary" name="twitter:card" />
      <meta content={author} name="twitter:creator" />
      <meta content={metaTitle} name="twitter:title" />
      <meta content={metaDescription} name="twitter:description" />

      <html lang="en" />

      {children}
    </>
  );
};

export default Seo;
