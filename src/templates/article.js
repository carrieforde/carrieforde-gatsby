import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Article = ({ data }) => {
  const post = data.markdownRemark,
    { frontmatter, html } = post,
    { title, date, category } = frontmatter

  return (
    <Layout>
      <header className="post">
        <span className="post__category">{category}</span>
        <h1 className="post__title">{title}</h1>
        <span className="post__date">{date}</span>
      </header>
      <div
        className="post__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export default Article

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
      }
      html
    }
  }
`
