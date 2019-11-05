import React from 'react';
import { graphql } from 'gatsby';
import Site from '../../components/Site';
import SEO from '../../components/SEO';
import PropTypes from 'prop-types';

import PageHeader from '../../components/PageHeader';
import 'cf-components-alert';
import Pagination from '../../components/Pagination';

const Post = props => {
  const post = props.data.markdownRemark,
    { frontmatter, html } = post,
    { title, date, updated, category, description } = frontmatter,
    { next, previous } = props.pageContext;

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
        className="post__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Pagination next={next} previous={previous} />
    </Site>
  );
};

Post.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
};

export default Post;

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
        category
        description
      }
      html
    }
  }
`;
