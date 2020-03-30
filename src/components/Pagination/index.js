import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import styles from './pagination.module.css';

const Pagination = ({ next, previous }) => (
  <nav className={styles.pagination}>
    {previous && (
      <Link className={styles.previous} to={previous.fields.slug}>
        <span className={styles.arrow}>&larr;</span>
        <p dangerouslySetInnerHTML={{ __html: previous.frontmatter.title }} />
      </Link>
    )}
    {next && (
      <Link className={styles.next} to={next.fields.slug}>
        <p dangerouslySetInnerHTML={{ __html: next.frontmatter.title }} />
        <span className={styles.arrow}>&rarr;</span>
      </Link>
    )}
  </nav>
);

export default Pagination;

Pagination.propTypes = {
  next: PropTypes.object,
  previous: PropTypes.object,
};
