import Article from 'components/Article/Article';
import PageHeader from 'components/PageHeader/PageHeader';
import SEO from 'components/Seo/Seo';
import Site from 'components/Site/Site';
import { graphql } from 'gatsby';
import React from 'react';
import blog from 'styles/blog.module.css';
import { getComponentKey } from 'utils/utilities';
import { CategoryPageProps } from './Category.interface';

const Category: React.FC<CategoryPageProps> = ({ pageContext, data }) => {
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
