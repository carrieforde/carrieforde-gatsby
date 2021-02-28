import { Link } from 'gatsby';
import React from 'react';
import { gtm } from '../../utils/analytics';
import styles from './mainMenu.module.css';

const MainMenu: React.FC<unknown> = () => (
  <nav className={styles.mainNavigation}>
    <Link
      className={styles.link}
      to="/#about"
      onClick={() => gtm({ event: 'click', label: 'About' })}
    >
      About
    </Link>
    <Link
      className={styles.link}
      to="/#experience"
      onClick={() => gtm({ event: 'click', label: 'Experience' })}
    >
      Experience
    </Link>
    <Link
      className={styles.link}
      to="/blog"
      onClick={() => gtm({ event: 'click', label: 'Blog' })}
    >
      Blog
    </Link>
  </nav>
);

export default MainMenu;
