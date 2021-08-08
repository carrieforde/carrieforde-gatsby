import { Link } from 'gatsby';
import React from 'react';
import { useCallback } from 'react';
import { gtm } from 'utils/analytics';
import styles from './mainMenu.module.css';

const MainMenu: React.VFC = () => {
  const handleClick = useCallback(
    (label: string) => gtm({ event: 'click', category: 'Main Menu', label }),
    []
  );

  return (
    <nav className={styles.mainNavigation}>
      <Link
        className={styles.link}
        to="/#about"
        onClick={() => handleClick('About')}
      >
        About
      </Link>
      <Link
        className={styles.link}
        to="/#experience"
        onClick={() => handleClick('Experience')}
      >
        Experience
      </Link>
      <Link
        className={styles.link}
        to="/blog"
        onClick={() => handleClick('Blog')}
      >
        Blog
      </Link>
    </nav>
  );
};

export default MainMenu;
