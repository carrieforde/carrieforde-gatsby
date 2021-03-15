import 'cf-components-alert';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import PageHeader from '../../components/PageHeader';
import SEO from '../../components/SEO';
import Site from '../../components/Site';
import { PageProps } from '../../interfaces/page.interface';
import ExperienceTabs from '../../components/ExperienceTabs';
import { MDXProvider } from '@mdx-js/react';
import PageDescription from '../../components/PageDescription/PageDescription';

const shortcodes = { ExperienceTabs, PageDescription };

const Page: React.FC<PageProps> = ({ data }) => {
  const page = data.mdx;
  const { frontmatter, body } = page;
  const { title, description, multiLineDescription } = frontmatter;

  return (
    <Site>
      <SEO title={title} description={description} />
      <PageHeader
        title={title}
        description={description}
        multiLineDescription={multiLineDescription}
      />
      <div className="page__content">
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Site>
  );
};

export default Page;

export const query = graphql`
  query($slug: String) {
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
