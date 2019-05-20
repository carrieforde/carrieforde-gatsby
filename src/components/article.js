import React from 'react';
import { Link } from 'gatsby';

const Article = data => {
  const { excerpt, frontmatter, timeToRead, fields } = data.node,
    { title, date } = frontmatter;

  return (
    <article className="post">
      <header className="post__header">
        <Link to={fields.slug}>
          <h2 className="post__title">{title}</h2>
        </Link>
        <span className="post__date">{date}</span>
        <span className="post__time-to-read">{timeToRead} minutes</span>
      </header>
      <div className="post__excerpt">{excerpt}</div>
    </article>
  );
};

export default Article;
