import cn from "classnames";
import * as React from "react";

import * as styles from "./typography.module.css";

type TypographyVariant = "title" | "subtitle" | "body1" | "body2" | "overline";

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
};

export const Typography = ({
  children,
  component,
  variant,
}: React.PropsWithChildren<TypographyProps>) => {
  const Comp = variant === "title" && !component ? "h1" : component ?? "p";
  const className = cn("typography", {
    [styles[variant ?? ""]]: !!variant && styles[variant],
  });

  return <Comp className={className}>{children}</Comp>;
};

export default Typography;
