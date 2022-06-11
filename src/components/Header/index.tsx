import { Link } from "gatsby";
import Logo from "icons/carrie-forde-logo.svg";
import React from "react";
import { visuallyHidden } from "styles/utilities.module.css";
import { HeaderProps } from "./Header.interface";
import { siteBranding, siteHeader, siteLogo } from "./header.module.css";

const Header: React.FC<HeaderProps> = ({ siteTitle = "" }) => (
  <header className={siteHeader}>
    <Link className={siteBranding} to="/">
      <Logo className={siteLogo} />
      <h1 className={visuallyHidden}>{siteTitle}</h1>
    </Link>
  </header>
);

export default Header;
