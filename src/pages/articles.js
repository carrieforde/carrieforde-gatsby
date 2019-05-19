import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import Article from "../components/article"
import SEO from "../components/seo"

const Articles = ({ data }) => {
  return (
    <Layout>
      <SEO title="Articles" />
      <h1>Articles</h1>
      {data.allMarkdownRemark.edges.map((article, index) => (
        <Article key={index} {...article} />
      ))}
    </Layout>
  )
}

export default Articles

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
`
