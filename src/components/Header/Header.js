import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Logo from '../../icons/carrie-forde-logo.svg';
import './Header.scss';

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <Link className="site-branding" to="/">
      <Logo className="site-logo" />
      <h1 className="site-title visually-hidden">{siteTitle}</h1>
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
