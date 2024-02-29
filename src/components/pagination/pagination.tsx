import Link from "components/link/link";
import * as React from "react";

import * as s from "./pagination.module.css";

type PaginationLinkProps = {
  to: string;
  text?: string;
};

const Next: React.FC<PaginationLinkProps> = ({ text = "Next", to }) => (
  <Link className={s.nextLink} to={to}>
    <span>{text}</span>
    <span className={s.arrow}>&rarr;</span>
  </Link>
);

const Previous: React.FC<PaginationLinkProps> = ({ text = "Previous", to }) => (
  <Link className={s.previousLink} to={to}>
    <span className={s.arrow}>&larr;</span>
    <span>{text}</span>
  </Link>
);

type NumberLinkProps = Omit<PaginationLinkProps, "text"> & {
  text: string;
};

const Number: React.FC<NumberLinkProps> = ({ to, text }) => (
  <Link activeClassName={s.linkActive} className={s.link} to={to}>
    {text}
  </Link>
);

type PaginationProps = {
  basePath: string;
  currentPage: number;
  totalPages: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  basePath,
  currentPage,
  totalPages,
}) => {
  // No need to paginate a single page.
  if (totalPages <= 1) {
    return null;
  }

  const showPrevious = currentPage > 1;
  const previousPath =
    currentPage <= 2 ? basePath : `${basePath}/${currentPage - 1}`;

  const showNext = currentPage < totalPages;
  const nextPath = `${basePath}/${currentPage + 1}`;

  return (
    <div className={s.pagination}>
      {showPrevious && <Previous text="Newer Posts" to={previousPath} />}

      <div className={s.numbers}>
        {Array.from({ length: totalPages }).map((_, idx) => {
          const to = idx === 0 ? basePath : `${basePath}/${idx + 1}`;
          const text = (idx + 1).toString();

          return <Number key={to} text={text} to={to} />;
        })}
      </div>

      {showNext && <Next text="Older Posts" to={nextPath} />}
    </div>
  );
};
