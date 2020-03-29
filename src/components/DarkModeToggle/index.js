import React from 'react';
import Helmet from 'react-helmet';
import { useState } from 'react';
import styles from './darkModeToggle.module.css';

const DarkMode = () => {
  const [darkMode, setMode] = useState(false);

  return (
    <>
      <Helmet
        htmlAttributes={{
          class: darkMode ? 'dark' : null,
        }}
      />
      <label
        htmlFor="dark-mode"
        className={`${styles.toggle} ${darkMode ? styles.darkToggle : null}`}
      >
        {darkMode}
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
