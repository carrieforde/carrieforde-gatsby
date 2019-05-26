import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Logo from '../../icons/carrie-forde-logo.svg';
import headerStyles from './header.module.css';

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <Link className={headerStyles.siteBranding} to="/">
      <Logo className={headerStyles.siteLogo} />
      <h1 className={headerStyles.siteTitle}>{siteTitle}</h1>
    </Link>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
