import { Link } from 'gatsby';
import React from 'react';
import styles from './footer.module.css';
import utils from 'styles/utilities.module.css';
import { gtm } from 'utils/analytics';
import { SocialNavMenu } from 'components/SocialNav/SocialNav.stories';

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
    <SocialNavMenu />
  </footer>
);

export default Footer;
