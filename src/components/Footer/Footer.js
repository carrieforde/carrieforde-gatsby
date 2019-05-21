import React from 'react';
import SocialNav from '../SocialNav/SocialNav';

import './Footer.scss';

const Footer = () => (
  <footer className="site-footer">
    <p>
      Copyright &copy; 2013 &ndash; {new Date().getFullYear()} Carrie Forde.
    </p>
    <SocialNav />
  </footer>
);

export default Footer;
