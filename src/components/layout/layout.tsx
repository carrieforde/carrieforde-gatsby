import Footer from "components/footer/footer";
import Header from "components/header/header";
import { Link } from "components/link/link";
import { PageProps } from "gatsby";
import * as React from "react";

import * as s from "./layout.module.css";

type LayoutProps = {
  location: PageProps["location"];
};

export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  children,
  location,
}) => {
  const contentRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    location.hash.includes("content");
    contentRef.current?.focus();
  }, [location.hash]);

  return (
    <div className={s.layout}>
      <Link to="#content" variant="skipLink">
        Skip to content
      </Link>
      <Header />

      <main
        className={s.siteMain}
        id="content"
        ref={contentRef}
        tabIndex={location.hash.includes("content") ? -1 : undefined}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};
