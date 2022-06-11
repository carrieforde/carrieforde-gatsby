import Article from "components/Article/Article";
import { Edge } from "entities/edge.interface";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { postList, postListItem } from "./ArticleList.module.css";

const ArticleList: React.FC = () => {
  const { allMdx } = useStaticQuery(
    graphql`
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
    `
  );
  const { edges } = allMdx;

  return (
    <ul className={postList}>
      {edges.map(({ node }: Edge) => (
        <li key={node.frontmatter.title} className={postListItem}>
          <Article {...node} />
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
