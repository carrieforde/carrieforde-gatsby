import React from 'react';
import Site from '../components/Site/Site';
import { graphql } from 'gatsby';

import Article from '../components/Article/Article';
import SEO from '../components/SEO/SEO';
import PropTypes from 'prop-types';
import PageHeader from '../components/PageHeader/PageHeader';

const Blog = ({ data }) => {
  return (
    <Site>
      <SEO title="Blog" />
      <PageHeader
        title="Blog"
        description="Occasional posts on JavaScript, WordPress, and front end development."
      />

      <ul className="blog">
        {data.allMarkdownRemark.edges.map((article, index) => (
          <li key={index} className="blog__post">
            <Article {...article} />
          </li>
        ))}
      </ul>
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
            category
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
