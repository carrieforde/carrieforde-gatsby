import React from 'react';
import { graphql } from 'gatsby';
import Site from '../components/Site/Site';
import SEO from '../components/SEO/SEO';
import PropTypes from 'prop-types';

const Article = ({ data }) => {
  const post = data.markdownRemark,
    { frontmatter, html } = post,
    { title, date, category } = frontmatter;

  return (
    <Site>
      <SEO title={title} />
      <header className="post">
        <span className="post__category">{category}</span>
        <h1 className="post__title">{title}</h1>
        <span className="post__date">{date}</span>
      </header>
      <div
        className="post__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Site>
  );
};

Article.propTypes = {
  data: PropTypes.object
};

export default Article;

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
      }
      html
    }
  }
`;
