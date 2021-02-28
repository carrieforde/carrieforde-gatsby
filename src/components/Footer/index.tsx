import { Link } from 'gatsby';
import React from 'react';
import SocialNav from '../SocialNav';
import styles from './footer.module.css';
import utils from '../../styles/utilities.module.css';

const Footer: React.FC<unknown> = () => (
  <footer className={styles.footer}>
    <p>
      Copyright &copy; 2013 &ndash; {new Date().getFullYear()} Carrie Forde.
      <span className={styles.bullet}>&bull;</span>
      <Link to="/privacy" className={utils.noBackgroundLink}>
        Privacy
      </Link>
    </p>
    <SocialNav />
  </footer>
);

export default Footer;
