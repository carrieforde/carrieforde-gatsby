import { Link } from 'gatsby';
import React from 'react';
import { gtm } from '../../utils/analytics';
import styles from './mainMenu.module.css';

const MainMenu: React.FC<void> = () => {
  const gtmObj = { event: 'click', category: 'Main Menu' };

  return (
    <nav className={styles.mainNavigation}>
      <Link
        className={styles.link}
        to="/#about"
        onClick={() => gtm({ ...gtmObj, label: 'About' })}
      >
        About
      </Link>
      <Link
        className={styles.link}
        to="/#experience"
        onClick={() => gtm({ ...gtmObj, label: 'Experience' })}
      >
        Experience
      </Link>
      <Link
        className={styles.link}
        to="/blog"
        onClick={() => gtm({ ...gtmObj, label: 'Blog' })}
      >
        Blog
      </Link>
    </nav>
  );
};

export default MainMenu;
