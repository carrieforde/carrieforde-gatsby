import * as React from "react";

import { graphql } from "gatsby";

const Post = () => <div>Post template!</div>;

export default Post;

export const query = graphql`
  query Post($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        category
        date(formatString: "MMM D, YYYY")
        description
        showToc
        title
        updated
      }
      tableOfContents(maxDepth: 2)
    }
  }
`;
