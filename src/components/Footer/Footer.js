import React from 'react';
import SocialNav from '../SocialNav/SocialNav';

import footerStyles from './footer.module.css';

const Footer = () => (
  <footer className={footerStyles.footer}>
    <p>
      Copyright &copy; 2013 &ndash; {new Date().getFullYear()} Carrie Forde.
    </p>
    <SocialNav />
  </footer>
);

export default Footer;
