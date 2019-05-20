import React from 'react';

import './Footer.scss';

const Footer = () => (
  <footer className="site-footer">
    Copyright &copy; 2013 &ndash; {new Date().getFullYear()} Carrie Forde.
  </footer>
);

export default Footer;
