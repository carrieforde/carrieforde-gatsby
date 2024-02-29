import Link from "components/link/link";
import Typography from "components/typography/typography";
import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

import * as s from "./footer.module.css";

export const Footer: React.FC = () => {
  const { site } = useStaticQuery<Queries.FooterLinksQuery>(graphql`
    query FooterLinks {
      site {
        siteMetadata {
          footerLinks {
            to
            text
          }
        }
      }
    }
  `);

  return (
    <footer className={s.footer}>
      <div className={s.copyright}>
        <Link to="/privacy">Privacy</Link>
        <Typography component="span" variant="finePrint">
          &bull;
        </Typography>
        <Typography component="span" variant="finePrint">
          Copyright &copy; 2013 &ndash; {new Date().getFullYear()} Carrie Forde.
        </Typography>
      </div>
      <ul className={s.footerMenu}>
        {site?.siteMetadata?.footerLinks?.map(
          (item) =>
            item?.to && (
              <li key={item.to}>
                <Link className={s.footerLink} color="primary" to={item?.to}>
                  {item?.text}
                </Link>
              </li>
            )
        )}
      </ul>
    </footer>
  );
};
export default Footer;
