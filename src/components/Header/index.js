import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Logo from '../../icons/carrie-forde-logo.svg';
import MainMenu from '../MainMenu';
import styles from './header.module.css';
import DarkMode from '../DarkModeToggle';

const Header = ({ siteTitle }) => (
  <header className={styles.siteHeader}>
    <Link className={styles.siteBranding} to="/">
      <Logo className={styles.siteLogo} />
      <h1 className={styles.siteTitle}>{siteTitle}</h1>
    </Link>
    <MainMenu />
    <DarkMode />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
