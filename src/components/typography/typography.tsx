import cn from "classnames";
import * as React from "react";

import * as styles from "./typography.module.css";

type TypographyVariant =
  | "title"
  | "subtitle"
  | "body1"
  | "body2"
  | "overline"
  | "finePrint";

type TypographyComponent =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

export type TypographyProps = {
  variant?: TypographyVariant;
  component?: TypographyComponent;
  className?: string;
};

export const Typography = ({
  children,
  component,
  variant,
  className,
}: React.PropsWithChildren<TypographyProps>) => {
  const Comp = variant === "title" && !component ? "h1" : component ?? "p";
  const classes = cn("typography", className, {
    [styles[variant ?? ""]]: !!variant && styles[variant],
  });

  return <Comp className={classes}>{children}</Comp>;
};

export default Typography;
