import { graphql } from 'gatsby';
import React from 'react';
import Article from '../../components/Article';
import { CategoryProps } from '../../components/Category/Category.interface';
import PageHeader from '../../components/PageHeader';
import SEO from '../../components/SEO';
import Site from '../../components/Site';
import blog from '../../styles/blog.module.css';
import { Edge } from '../../interfaces/edge.interface';
import { getComponentKey } from '../../utils/utilities';

const Category: React.FC<CategoryProps> = ({ pageContext, data }) => {
  const { category } = pageContext;
  return (
    <Site>
      <SEO title={`Posts in ${category}`} />
      <PageHeader title={`Posts in ${category}`} />

      <ul className={blog.postList}>
        {data.allMdx.edges.map(({ node }, index: number) => (
          <li
            key={getComponentKey(node.frontmatter.title, index)}
            className={blog.postListItem}
          >
            <Article {...node} />
          </li>
        ))}
      </ul>
    </Site>
  );
};

export default Category;

export const query = graphql`
  query PostsByCategory($category: String!) {
    allMdx(
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
