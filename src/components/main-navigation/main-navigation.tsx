import Link from "components/link/link";
import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

import * as s from "./main-navigation.module.css";

export const MainNavigation: React.FC = () => {
  const { site } = useStaticQuery<Queries.MainNavigationQuery>(graphql`
    query MainNavigation {
      site {
        siteMetadata {
          mainNavigation {
            to
            text
          }
        }
      }
    }
  `);

  return (
    <nav className={s.mainNavigation}>
      <ul className={s.menu}>
        {site?.siteMetadata?.mainNavigation?.map(
          (item) =>
            item?.to && (
              <li key={item.to}>
                <Link to={item.to} variant="navigation">
                  {item?.text}
                </Link>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default MainNavigation;
