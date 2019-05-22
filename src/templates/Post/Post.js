import React from 'react';
import { graphql } from 'gatsby';
import Site from '../../components/Site/Site';
import SEO from '../../components/SEO/SEO';
import PropTypes from 'prop-types';
import './Post.scss';

const Post = ({ data }) => {
  const post = data.markdownRemark,
    { frontmatter, html } = post,
    { title, date, category, description } = frontmatter;

  return (
    <Site>
      <SEO title={title} description={description} />
      <header className="post">
        <span className="post__category">{category}</span>
        <h1
          className="post__title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {description && <p className="post__description">{description}</p>}
        <span className="post__date">{date}</span>
      </header>
      <div
        className="post__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Site>
  );
};

Post.propTypes = {
  data: PropTypes.object
};

export default Post;

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
        description
      }
      html
    }
  }
`;
