import React from 'react';
import { Link } from 'gatsby';

import articleStyles from './article.module.css';

const Article = data => {
  const { excerpt, frontmatter, timeToRead, fields } = data.node,
    { title, date, category } = frontmatter;

  return (
    <article className={articleStyles.article}>
      <header className="article__header">
        <span className="article__category">{category}</span>
        <Link to={fields.slug}>
          <h2 className="article__title">{title}</h2>
        </Link>
        <span className="article__date">{date}</span>
        <span className="article__separator">&#9656;</span>
        <span className="article__time-to-read">{timeToRead} minute read</span>
      </header>
      <div className="article__excerpt">{excerpt}</div>
    </article>
  );
};

export default Article;
