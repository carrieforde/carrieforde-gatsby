import { Link } from 'gatsby';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { PaginationProps } from './Pagination.interface';
import styles from './pagination.module.css';

const Pagination: React.FC<PaginationProps> = ({ next, previous }) => (
  <nav className={styles.pagination}>
    {previous && (
      <Link className={styles.previous} to={previous.fields.slug}>
        <span className={styles.arrow}>&larr;</span>
        <p>{ReactHtmlParser(previous.frontmatter.title)}</p>
      </Link>
    )}
    {next && (
      <Link className={styles.next} to={next.fields.slug}>
        <p>{ReactHtmlParser(next.frontmatter.title)}</p>
        <span className={styles.arrow}>&rarr;</span>
      </Link>
    )}
  </nav>
);

export default Pagination;
