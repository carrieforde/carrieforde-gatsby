import { Link } from 'gatsby';
import React from 'react';
import Logo from 'icons/carrie-forde-logo.svg';
import MainMenu from 'components/MainMenu';
import { HeaderProps } from './Header.interface';
import { siteHeader, siteBranding, siteLogo } from './header.module.css';
import { visuallyHidden } from 'styles/utilities.module.css';

const Header: React.FC<HeaderProps> = ({ siteTitle = '' }) => (
  <header className={siteHeader}>
    <Link className={siteBranding} to="/">
      <Logo className={siteLogo} />
      <h1 className={visuallyHidden}>{siteTitle}</h1>
    </Link>
    <MainMenu />
  </header>
);

export default Header;
