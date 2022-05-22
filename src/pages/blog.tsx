import { graphql } from "gatsby";
import React from "react";
import Article from "components/Article/Article";
import PageHeader from "components/PageHeader/PageHeader";
import Seo from "components/Seo/Seo";
import Site from "components/Site";
import { BlogProps } from "entities/blog.interface";
import { postList, postListItem } from "styles/blog.module.css";

const Blog: React.FC<BlogProps> = ({ data }) => {
  return (
    <Site>
      <Seo title="Blog" />
      <PageHeader
        title="Blog"
        description="Occasional posts on JavaScript, WordPress, and front end development."
      />

      <ul className={postList}>
        {data.allMdx.edges.map(({ node }, index) => (
          <li key={index} className={postListItem}>
            <Article {...node} />
          </li>
        ))}
      </ul>
    </Site>
  );
};

export default Blog;

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
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
