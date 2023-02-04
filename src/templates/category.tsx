import Typography from "components/typography/typography";
import { graphql, PageProps } from "gatsby";
import * as React from "react";

const Category: React.FC<PageProps<Queries.CategoryQuery>> = ({
  data,
  pageContext,
}) => (
  <div>
    <Typography variant="title">Category Template</Typography>

    <Typography variant="subtitle">Data</Typography>
    <pre>
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>

    <Typography variant="subtitle">Page Context</Typography>
    <pre>
      <code>{JSON.stringify(pageContext, null, 2)}</code>
    </pre>
  </div>
);

export default Category;

export const query = graphql`
  query Category($category: String!) {
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          category
          date(formatString: "MMM D, YYYY")
          description
          title
        }
      }
    }
  }
`;
