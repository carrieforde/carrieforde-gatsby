import MainNavigation from "components/main-navigation/main-navigation";
import * as React from "react";
import Logo from "svg/carrie-forde-logo.svg";

import * as s from "./header.module.css";

export const Header: React.FC = () => (
  <header className={s.header}>
    <div className={s.logoArea}>
      <Logo />
    </div>

    <MainNavigation />
  </header>
);

export default Header;
