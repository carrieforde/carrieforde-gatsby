import cn from "classnames";
import Typography from "components/typography/typography";
import * as React from "react";

import * as s from "./banner.module.css";

type BannerVariant = "default" | "error" | "info" | "success" | "warning";

type BannerProps = {
  variant?: BannerVariant;
  icon?: React.ReactNode;
};

type BannerIconProps = Pick<BannerProps, "variant">;

const BannerIcon: React.FC<React.PropsWithChildren<BannerIconProps>> = ({
  children,
  variant,
}) => {
  if (children) {
    return <Typography component="span">{children}</Typography>;
  }

  if (variant === "error") {
    return <Typography component="span">🛑</Typography>;
  }

  if (variant === "info") {
    return <Typography component="span">ℹ️</Typography>;
  }

  if (variant === "success") {
    return <Typography component="span">✅</Typography>;
  }

  if (variant === "warning") {
    return <Typography component="span">⚠️</Typography>;
  }

  return null;
};

export const Banner: React.FC<React.PropsWithChildren<BannerProps>> = ({
  children,
  icon,
  variant,
}) => {
  const classes = cn("banner", s.banner, {
    [s[variant ?? "default"]]: !!variant,
  });

  return (
    <section className={classes}>
      <BannerIcon variant={variant}>{icon}</BannerIcon>
      {children}
    </section>
  );
};

export default Banner;
