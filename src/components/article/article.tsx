import Link from "components/link/link";
import Typography from "components/typography/typography";
import * as React from "react";

import * as s from "./article.module.css";

type ArticleCategoryProps = {
  slug: string;
};

export const ArticleHeader: React.FC<React.PropsWithChildren> = ({
  children,
}) => <header>{children}</header>;

export const ArticleCategory: React.FC<
  React.PropsWithChildren<ArticleCategoryProps>
> = ({ children, slug }) => (
  <Link to={slug}>
    <Typography component="span" variant="overline">
      {children}
    </Typography>
  </Link>
);

type ArticleTitleProps = {
  slug: string;
};

export const ArticleTitle: React.FC<
  React.PropsWithChildren<ArticleTitleProps>
> = ({ slug, children }) => (
  <Typography component="h2" variant="title">
    <Link to={slug}>{children}</Link>
  </Typography>
);

type ArticleMetaProps = {
  date: string | null;
  timeToRead: number;
};

export const ArticleMeta: React.FC<ArticleMetaProps> = ({
  date,
  timeToRead,
}) => {
  if (!date) {
    return null;
  }

  return (
    <div className={s.articleMeta}>
      <Typography component="time" variant="finePrint">
        {date}
      </Typography>
      <Typography component="span" variant="finePrint">
        &#9656;
      </Typography>
      <Typography component="span" variant="finePrint">
        {timeToRead} minutes
      </Typography>
    </div>
  );
};

export const ArticleContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => <div>{children}</div>;

export const Article: React.FC<React.PropsWithChildren> = ({ children }) => (
  <article className={s.article}>{children}</article>
);

export default Article;
