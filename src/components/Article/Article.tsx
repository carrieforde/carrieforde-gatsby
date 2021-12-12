import Category from "components/Category/Category";
import Heading from "components/Heading/Heading";
import TimeStamp from "components/TimeStamp/TimeStamp";
import { Link } from "gatsby";
import parse from "html-react-parser";
import React from "react";
import { ArticleProps } from "./Article.interface";
import {
  article,
  articleDescription,
  articleHeader,
  articleSeparator,
  articleTimeToRead,
  articleTitle,
} from "./article.module.css";

const Article: React.FC<ArticleProps> = ({
  excerpt,
  frontmatter,
  timeToRead,
  fields,
}) => {
  const { title, date, category, description } = frontmatter;

  return (
    <article className={article}>
      <header className={articleHeader}>
        <Category category={category} />
        <Link to={fields.slug}>
          <Heading level="h2" className={articleTitle}>
            {title}
          </Heading>
        </Link>
        <TimeStamp date={date} isSmall={true} />
        <span className={articleSeparator}>&#9656;</span>
        <span className={articleTimeToRead}>{timeToRead} minute read</span>
      </header>
      <p className={articleDescription}>{parse(description ?? excerpt)}</p>
    </article>
  );
};

export default Article;
