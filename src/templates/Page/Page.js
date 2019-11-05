import React from 'react';
import { graphql } from 'gatsby';
import Site from '../../components/Site';
import SEO from '../../components/SEO';
import PropTypes from 'prop-types';

import PageHeader from '../../components/PageHeader';
import 'cf-components-alert';

const Page = ({ data }) => {
  const page = data.markdownRemark,
    { frontmatter, html } = page,
    { title, date, updated, category, description } = frontmatter;

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
      <div
        className="page__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Site>
  );
};

Page.propTypes = {
  data: PropTypes.object
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
