import { graphql } from 'gatsby';
import React from 'react';
import Article from 'components/Article/Article';
import { CategoryProps } from './Category.interface';
import PageHeader from 'components/PageHeader/PageHeader';
import Seo from 'components/Seo/Seo';
import Site from 'components/Site';
import { postList, postListItem } from 'styles/blog.module.css';
import { getComponentKey } from 'utils/utilities';

const Category: React.FC<CategoryProps> = ({ pageContext, data }) => {
  const { category } = pageContext;
  return (
    <Site>
      <Seo title={`Posts in ${category}`} />
      <PageHeader title={`Posts in ${category}`} />

      <ul className={postList}>
        {data.allMdx.edges.map(({ node }, index: number) => (
          <li
            key={getComponentKey(node.frontmatter.title, index)}
            className={postListItem}
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
