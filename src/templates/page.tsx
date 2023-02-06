import { MDXProvider } from "@mdx-js/react";
import { Layout, PageHeader, Seo } from "components";
import { graphql, HeadProps, PageProps } from "gatsby";
import * as React from "react";

const Page: React.FC<PageProps<Queries.PageQuery>> = ({
  data,
  children,
  location,
}) => {
  if (!data.mdx?.frontmatter) {
    return null;
  }

  const { title, description } = data.mdx.frontmatter;

  return (
    <Layout location={location}>
      <PageHeader description={description} title={title} />
      <MDXProvider>{children}</MDXProvider>
    </Layout>
  );
};

export default Page;

export const Head: React.FC<HeadProps<Queries.PageQuery>> = ({ data }) => (
  <Seo frontmatter={data.mdx?.frontmatter ?? null} />
);

export const query = graphql`
  query Page($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
