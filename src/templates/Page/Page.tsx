import { MDXProvider } from "@mdx-js/react";
import PageHeader from "components/PageHeader/PageHeader";
import Seo from "components/Seo/Seo";
import Site from "components/Site";
import { MDX_COMPONENTS } from "constants/mdx-components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { PageProps } from "entities/page.interface";
import React from "react";

const Page: React.FC<PageProps> = ({ data }) => {
  const page = data.mdx;
  const { frontmatter, body } = page;
  const { title, description, multiLineDescription } = frontmatter;

  return (
    <Site>
      <Seo title={title} description={description} />
      <PageHeader
        title={title}
        description={description}
        multiLineDescription={multiLineDescription}
      />
      <div className="page__content">
        <MDXProvider components={MDX_COMPONENTS}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Site>
  );
};

export default Page;

export const query = graphql`
  query ($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        multiLineDescription
      }
      body
    }
  }
`;
