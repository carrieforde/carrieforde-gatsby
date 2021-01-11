import { Link } from 'gatsby';
import React from 'react';
import styles from './mainMenu.module.css';

const MainMenu: React.FC<unknown> = () => (
  <nav className={styles.mainNavigation}>
    <Link className={styles.link} to="/#about">
      About
    </Link>
    <Link className={styles.link} to="/#experience">
      Experience
    </Link>
    <Link className={styles.link} to="/blog">
      Blog
    </Link>
  </nav>
);

export default MainMenu;
