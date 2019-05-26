import React from 'react';
import { Link } from 'gatsby';
import TimeStamp from '../TimeStamp/TimeStamp';

import articleStyles from './article.module.css';
import timeStampStyles from '../TimeStamp/timeStamp.module.css';

const Article = data => {
  const { excerpt, frontmatter, timeToRead, fields } = data.node,
    { title, date, category, description } = frontmatter;

  return (
    <article className={articleStyles.article}>
      <header className={articleStyles.articleHeader}>
        <span className={articleStyles.articleCategory}>{category}</span>
        <Link to={fields.slug}>
          <h2
            className={articleStyles.articleTitle}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Link>
        <TimeStamp date={date} className={timeStampStyles.timeStampIsSmall} />
        <span className={articleStyles.articleSeparator}>&#9656;</span>
        <span className={articleStyles.articleTimeToRead}>
          {timeToRead} minute read
        </span>
      </header>
      <div className={articleStyles.articleDescription}>
        {description || excerpt}
      </div>
    </article>
  );
};

export default Article;
