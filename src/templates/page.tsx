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
      {children}
    </Layout>
  );
};

export default Page;

export const Head: React.FC<HeadProps<Queries.PageQuery>> = ({ data }) => (
  <Seo
    description={data.mdx?.frontmatter?.description}
    title={data.mdx?.frontmatter?.title}
  />
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
