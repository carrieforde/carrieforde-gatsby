import React from 'react';
import Site from '../components/Site/Site';
import { graphql } from 'gatsby';

import Article from '../components/Article/Article';
import SEO from '../components/SEO/SEO';
import PropTypes from 'prop-types';

const Blog = ({ data }) => {
  return (
    <Site>
      <SEO title="Articles" />
      <h1>Articles</h1>
      {data.allMarkdownRemark.edges.map((article, index) => (
        <Article key={index} {...article} />
      ))}
    </Site>
  );
};

Blog.propTypes = {
  data: PropTypes.object
};

export default Blog;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          timeToRead
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
