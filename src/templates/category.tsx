import {
  Article,
  ArticleCategory,
  ArticleContent,
  ArticleHeader,
  ArticleMeta,
  ArticleTitle,
  Layout,
  PageHeader,
  Seo,
  Typography,
} from "components";
import { graphql, HeadProps, PageProps } from "gatsby";
import parse from "html-react-parser";
import * as React from "react";

import * as s from "./templates.module.css";

const Category: React.FC<
  PageProps<Queries.CategoryQuery, { category: string }>
> = ({ data, pageContext, location }) => {
  return (
    <Layout location={location}>
      <PageHeader title={`Posts in ${pageContext.category}`} />

      <ul className={s.postList}>
        {data.allMdx.nodes.map((node) => {
          if (!node.fields?.slug || !node.frontmatter) {
            return;
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
    </Layout>
  );
};

export default Category;

export const Head: React.FC<
  HeadProps<Queries.CategoryQuery, { category: string }>
> = ({ pageContext }) => <Seo title={`Posts in ${pageContext.category}`} />;

export const query = graphql`
  query Category($category: String!) {
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          category
          date(formatString: "MMMM D, YYYY")
          description
          title
        }
        excerpt
        fields {
          slug
          timeToRead {
            minutes
          }
        }
        id
      }
    }
  }
`;
