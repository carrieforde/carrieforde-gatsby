import { Link } from 'gatsby';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Category from '../Category/Category';
import TimeStamp from '../TimeStamp/TimeStamp';
import { ArticleProps } from './Article.interface';
import {
  article,
  articleDescription,
  articleHeader,
  articleSeparator,
  articleTimeToRead,
  articleTitle,
} from './article.module.css';

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
          <h2 className={articleTitle}>{ReactHtmlParser(title)}</h2>
        </Link>
        <TimeStamp date={date} isSmall={true} />
        <span className={articleSeparator}>&#9656;</span>
        <span className={articleTimeToRead}>{timeToRead} minute read</span>
      </header>
      <div className={articleDescription}>
        {ReactHtmlParser(description ?? excerpt)}
      </div>
    </article>
  );
};

export default Article;
