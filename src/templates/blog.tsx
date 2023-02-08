import {
  Article,
  ArticleCategory,
  ArticleContent,
  ArticleHeader,
  ArticleMeta,
  ArticleTitle,
  Layout,
  Link,
  PageHeader,
  Pagination,
  Seo,
  Typography,
} from "components";
import { PageProps, graphql, HeadProps } from "gatsby";
import parse from "html-react-parser";
import * as React from "react";

import * as s from "./templates.module.css";

export const Blog: React.FC<
  PageProps<
    Queries.BlogQuery,
    { limit: number; skip: number; pageCount: number; currentPage: number }
  >
> = ({ data, location, pageContext }) => (
  <Layout location={location}>
    <PageHeader
      description={[
        "Occasional posts on JavaScript, WordPress, and front end development.",
      ]}
      title="Blog"
    />

    <ul className={s.postList}>
      {data.allMdx.nodes.map((node) => {
        if (!node.fields?.slug || !node.frontmatter) {
          return null;
        }

        const { slug, timeToRead } = node.fields;
        const { category, title, description, date } = node.frontmatter;
        const excerpt = description
          ? `${parse(
              `${description?.join("").substring(0, 140).trim()}&hellip;`
            )}`
          : node.excerpt;
        const timeToReadMinutes = Math.ceil(timeToRead?.minutes ?? 0);

        return (
          <li key={node.id}>
            <Article>
              <ArticleHeader>
                <ArticleCategory slug={`/category/${slug}`}>
                  {category}
                </ArticleCategory>
                {title && (
                  <ArticleTitle slug={slug}>{parse(title)}</ArticleTitle>
                )}
                <ArticleMeta date={date} timeToRead={timeToReadMinutes} />
              </ArticleHeader>

              <ArticleContent>
                <Typography>{excerpt}</Typography>
              </ArticleContent>
            </Article>
          </li>
        );
      })}
    </ul>

    <Pagination
      basePath="/blog"
      currentPage={pageContext.currentPage}
      totalPages={pageContext.pageCount}
    />
  </Layout>
);

export default Blog;

export const Head: React.FC<HeadProps<Queries.BlogQuery>> = () => (
  <Seo
    description={[
      "Occasional posts on JavaScript, WordPress, and front end development.",
    ]}
    title="Blog"
  />
);

export const query = graphql`
  query Blog($limit: Int!, $skip: Int!) {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/posts/" } } }
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          category
          date(formatString: "MMMM D, YYYY")
          description
        }
        id
        fields {
          slug
          timeToRead {
            minutes
          }
        }
      }
    }
  }
`;
