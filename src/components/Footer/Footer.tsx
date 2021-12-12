import { Link } from "gatsby";
import React from "react";
import SocialNav from "components/SocialNav/SocialNav";
import { footer, bullet } from "./footer.module.css";
import { noBackgroundLink } from "styles/utilities.module.css";
import { gtm } from "utils/analytics";

const Footer: React.VFC = () => (
  <footer className={footer}>
    <p>
      <Link
        to="/privacy"
        className={noBackgroundLink}
        onClick={() =>
          gtm({ event: "click", category: "Privacy", label: "Privacy" })
        }
      >
        Privacy
      </Link>
      <span className={bullet}>&bull;</span>
      Copyright &copy; 2013 &ndash; {new Date().getFullYear()} Carrie Forde.
    </p>
    <SocialNav />
  </footer>
);

export default Footer;
