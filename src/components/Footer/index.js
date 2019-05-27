import React from 'react';
import SocialNav from '../SocialNav';

import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p>
      Copyright &copy; 2013 &ndash; {new Date().getFullYear()} Carrie Forde.
    </p>
    <SocialNav />
  </footer>
);

export default Footer;
