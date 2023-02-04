import * as React from "react";

import { graphql } from "gatsby";

const Page = () => <div>Page template!</div>;

export default Page;

export const query = graphql`
  query Page($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
