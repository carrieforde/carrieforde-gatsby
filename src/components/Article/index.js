import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import TimeStamp from '../TimeStamp';

import styles from './article.module.css';
import timeStampStyles from '../TimeStamp/timeStamp.module.css';
import Category from '../Category';

const Article = (data) => {
  const { excerpt, frontmatter, timeToRead, fields } = data.node,
    { title, date, category, description } = frontmatter;

  return (
    <article className={styles.article}>
      <header className={styles.articleHeader}>
        <Category category={category} />
        <Link to={fields.slug}>
          <h2
            className={styles.articleTitle}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Link>
        <TimeStamp date={date} className={timeStampStyles.timeStampIsSmall} />
        <span className={styles.articleSeparator}>&#9656;</span>
        <span className={styles.articleTimeToRead}>
          {timeToRead} minute read
        </span>
      </header>
      <div
        className={styles.articleDescription}
        dangerouslySetInnerHTML={{ __html: description || excerpt }}
      />
    </article>
  );
};

Article.propTypes = {
  data: PropTypes.object,
};

export default Article;
