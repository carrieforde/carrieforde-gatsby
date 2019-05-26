import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Logo from '../../icons/carrie-forde-logo.svg';
import MainMenu from '../MainMenu';
import headerStyles from './header.module.css';

const Header = ({ siteTitle }) => (
  <header className={headerStyles.siteHeader}>
    <Link className={headerStyles.siteBranding} to="/">
      <Logo className={headerStyles.siteLogo} />
      <h1 className={headerStyles.siteTitle}>{siteTitle}</h1>
    </Link>
    <MainMenu />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
