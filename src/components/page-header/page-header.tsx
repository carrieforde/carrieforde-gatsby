import Typography from "components/typography/typography";
import parse from "html-react-parser";
import * as React from "react";

import * as s from "./page-header.module.css";

type PageHeaderProps = {
  title: string | null;
  description?: readonly (string | null)[] | null;
};

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
}) => (
  <header className={s.pageHeader}>
    <Typography variant="title">{title}</Typography>
    {description?.map(
      (subtitle) =>
        subtitle && (
          <Typography key={subtitle} variant="subtitle">
            {parse(subtitle)}
          </Typography>
        )
    )}
  </header>
);
