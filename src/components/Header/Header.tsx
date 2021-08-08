import { Link } from 'gatsby';
import React from 'react';
import Logo from 'icons/carrie-forde-logo.svg';
import { HeaderProps } from './Header.interface';
import styles from './header.module.css';
import MainMenu from 'components/MainMenu/MainMenu';

const Header: React.FC<HeaderProps> = ({ siteTitle = '' }) => (
  <header className={styles.siteHeader}>
    <Link className={styles.siteBranding} to="/">
      <Logo className={styles.siteLogo} />
      <h1 className={styles.siteTitle}>{siteTitle}</h1>
    </Link>
    <MainMenu />
  </header>
);

export default Header;
