import cn from "classnames";
import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby";
import * as React from "react";

import * as s from "./link.module.css";

type LinkProps = Pick<GatsbyLinkProps<unknown>, "to"> & {
  variant?: "navigation" | "skipLink";
  color?: "primary" | "inherit";
  className?: string;
};

export const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({
  children,
  variant,
  to,
  color,
  className,
}) => {
  const classes = cn("link", s.link, className, {
    [s.navigation]: variant === "navigation",
    [s.skipLink]: variant === "skipLink",
    [s.primary]: color === "primary" || variant === "navigation",
    [s.inherit]: color === "inherit",
  });
  const activeClasses = cn("active", {
    [s.navigationActive]: variant === "navigation",
  });

  const isExternalLink = to.includes("http") || to.includes("mailto");

  if (isExternalLink) {
    return (
      <a className={classes} href={to}>
        {children}
      </a>
    );
  }

  return (
    <GatsbyLink activeClassName={activeClasses} className={classes} to={to}>
      {children}
    </GatsbyLink>
  );
};

export default Link;
