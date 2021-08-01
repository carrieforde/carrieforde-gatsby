import { Link } from 'gatsby';
import React from 'react';
import SocialNav from '../SocialNav/SocialNav';
import styles from './footer.module.css';
import utils from '../../styles/utilities.module.css';
import { gtm } from '../../utils/analytics';

const Footer: React.VFC = () => (
  <footer className={styles.footer}>
    <p>
      <Link
        to="/privacy"
        className={utils.noBackgroundLink}
        onClick={() =>
          gtm({ event: 'click', category: 'Privacy', label: 'Privacy' })
        }
      >
        Privacy
      </Link>
      <span className={styles.bullet}>&bull;</span>
      Copyright &copy; 2013 &ndash; {new Date().getFullYear()} Carrie Forde.
    </p>
    <SocialNav />
  </footer>
);

export default Footer;
