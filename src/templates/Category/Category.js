import React from 'react';
import Site from '../../components/Site';
import { graphql } from 'gatsby';

import Article from '../../components/Article';
import SEO from '../../components/SEO';
import PropTypes from 'prop-types';
import PageHeader from '../../components/PageHeader';

import blog from '../../styles/blog.module.css';

const Category = props => {
  const { category } = props.pageContext;
  return (
    <Site>
      <SEO title={`Posts in ${category}`} />
      <PageHeader title={`Posts in ${category}`} />

      <ul className={blog.postList}>
        {props.data.allMarkdownRemark.edges.map((article, index) => (
          <li key={index} className={blog.postListItem}>
            <Article {...article} />
          </li>
        ))}
      </ul>
    </Site>
  );
};

Category.propTypes = {
  data: PropTypes.object
};

export default Category;

export const query = graphql`
  query PostsByCategory($category: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            category
            description
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
