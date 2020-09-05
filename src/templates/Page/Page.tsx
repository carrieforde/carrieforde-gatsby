import 'cf-components-alert';
import { graphql } from 'gatsby';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PageHeader from '../../components/PageHeader';
import SEO from '../../components/SEO';
import Site from '../../components/Site';
import { PageProps } from '../../interfaces/page.interface';

const Page: React.FC<PageProps> = ({ data }) => {
  const page = data.markdownRemark;
  const { frontmatter, html } = page;
  const { title, date, updated, category, description } = frontmatter;

  return (
    <Site>
      <SEO title={title} description={description} />
      <PageHeader
        title={title}
        description={description}
        category={category}
        date={date}
        updated={updated}
      />
      <div className="page__content">{ReactHtmlParser(html)}</div>
    </Site>
  );
};

export default Page;

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
      }
      html
    }
  }
`;
