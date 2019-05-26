import React from 'react';
import { Link } from 'gatsby';

import styles from './mainMenu.module.css';

const MainMenu = () => (
  <nav className="mainNavigation">
    <Link className={styles.link} to="/blog">
      Blog
    </Link>
  </nav>
);

export default MainMenu;
