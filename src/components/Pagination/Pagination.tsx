import { Link } from 'gatsby';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { gtm } from '../../utils/analytics';
import { PaginationProps } from './Pagination.interface';
import {
  pagination,
  previous as paginationPrev,
  arrow,
  next as paginationNext,
} from './pagination.module.css';

const Pagination: React.FC<PaginationProps> = ({ next, previous }) => {
  const gtmObj = { event: 'click', category: 'Pagination' };
  return (
    <nav className={pagination}>
      {previous && (
        <Link
          className={paginationPrev}
          to={previous.fields.slug}
          onClick={() =>
            gtm({
              ...gtmObj,
              label: previous.frontmatter.title,
            })
          }
        >
          <span className={arrow}>&larr;</span>
          <p>{ReactHtmlParser(previous.frontmatter.title)}</p>
        </Link>
      )}
      {next && (
        <Link
          className={paginationNext}
          to={next.fields.slug}
          onClick={() =>
            gtm({
              ...gtmObj,
              label: next.frontmatter.title,
            })
          }
        >
          <p>{ReactHtmlParser(next.frontmatter.title)}</p>
          <span className={arrow}>&rarr;</span>
        </Link>
      )}
    </nav>
  );
};

export default Pagination;
