import { Layout, MergeFieldProvider, PageHeader, Seo } from "components";
import { graphql, HeadProps, PageProps } from "gatsby";
import * as React from "react";

function parseQueryString(text: string) {
  const stringArray = (
    text.includes("?") ? text.substring(1, text.length) : text
  ).split("&");

  return stringArray.reduce((acc, curr) => {
    const [key, value] = curr.split("=");

    return { ...acc, [key]: value };
  }, {});
}

const Post: React.FC<PageProps<Queries.PostQuery>> = ({
  data,
  location,
  children,
}) => {
  if (!data.mdx?.frontmatter) {
    return null;
  }

  const memoizedContextValue = React.useMemo(
    () => parseQueryString(location.search),
    []
  );

  const { title, date, description, updated, category } = data.mdx.frontmatter;

  return (
    <MergeFieldProvider data={memoizedContextValue}>
      <Layout location={location}>
        <PageHeader description={description} title={title} />
        {children}
      </Layout>
    </MergeFieldProvider>
  );
};

export default Post;

export const Head: React.FC<HeadProps<Queries.PostQuery>> = ({ data }) => (
  <Seo
    description={data.mdx?.frontmatter?.description}
    title={data.mdx?.frontmatter?.title}
  />
);

export const query = graphql`
  query Post($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        category
        date(formatString: "MMM D, YYYY")
        description
        showToc
        title
        updated(formatString: "MMM D, YYYY")
      }
      tableOfContents(maxDepth: 2)
      excerpt
    }
  }
`;
