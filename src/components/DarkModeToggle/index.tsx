import React, { useState } from 'react';
import Helmet from 'react-helmet';
import Moon from '../../icons/moon-stars-light.svg';
import Sun from '../../icons/sun-light.svg';
import styles from './darkModeToggle.module.css';

const DarkMode: React.FC<unknown> = () => {
  if (!global.window) {
    return null;
  }

  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setMode] = useState(prefersDark);
  const icon = darkMode ? <Sun /> : <Moon />;

  return (
    <>
      <Helmet
        htmlAttributes={{
          class: darkMode ? 'dark-mode' : 'light-mode',
        }}
      />
      <label htmlFor="dark-mode" className={styles.toggle}>
        {icon}
        <input
          type="checkbox"
          id="dark-mode"
          className={styles.visuallyHidden}
          onChange={() => setMode(!darkMode)}
        />
        <span className={styles.visuallyHidden}>Enable dark mode?</span>
      </label>
    </>
  );
};

export default DarkMode;
