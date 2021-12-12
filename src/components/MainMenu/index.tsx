import { Link } from "gatsby";
import React from "react";
import { gtm } from "utils/analytics";
import { mainNavigation, link } from "./mainMenu.module.css";

const MainMenu: React.VFC = () => {
  const gtmObj = { event: "click", category: "Main Menu" };

  return (
    <nav className={mainNavigation}>
      <Link
        className={link}
        to="/#about"
        onClick={() => gtm({ ...gtmObj, label: "About" })}
      >
        About
      </Link>
      <Link
        className={link}
        to="/#experience"
        onClick={() => gtm({ ...gtmObj, label: "Experience" })}
      >
        Experience
      </Link>
      <Link
        className={link}
        to="/blog"
        onClick={() => gtm({ ...gtmObj, label: "Blog" })}
      >
        Blog
      </Link>
    </nav>
  );
};

export default MainMenu;
