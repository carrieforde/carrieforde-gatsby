import { Link } from 'gatsby';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Category from '../Category/Category';
import TimeStamp from '../TimeStamp/TimeStamp';
import { ArticleProps } from './Article.interface';
import styles from './article.module.css';

const Article: React.FC<ArticleProps> = ({
  excerpt,
  frontmatter,
  timeToRead,
  fields,
}) => {
  const { title, date, category, description } = frontmatter;

  return (
    <article className={styles.article}>
      <header className={styles.articleHeader}>
        <Category category={category} />
        <Link to={fields.slug}>
          <h2 className={styles.articleTitle}>{ReactHtmlParser(title)}</h2>
        </Link>
        <TimeStamp date={date} isSmall={true} />
        <span className={styles.articleSeparator}>&#9656;</span>
        <span className={styles.articleTimeToRead}>
          {timeToRead} minute read
        </span>
      </header>
      <div className={styles.articleDescription}>
        {ReactHtmlParser(description ?? excerpt)}
      </div>
    </article>
  );
};

export default Article;
