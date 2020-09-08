import ReactHtmlParser from 'react-html-parser';
import React, { useState, ReactElement, useEffect } from 'react';
import styles from './TableOfContents.module.css';
import Chevron from '../../icons/chevron-circle-left-light.svg';

interface TableOfContentsProps {
  tableOfContents: string;
}

function TableOfContents({
  tableOfContents,
}: TableOfContentsProps): ReactElement {
  const [tocOpen, setTocState] = useState(false);
  const handleClick = () => {
    if (tocOpen) {
      setTocState(!tocOpen);
    }

    if (
      !tocOpen &&
      document.activeElement.classList.contains(styles.tocButton)
    ) {
      setTocState(!tocOpen);
    }
  };
  const handleKeyup = (e: KeyboardEvent) => {
    if (tocOpen && e.keyCode === 27) {
      setTocState(!tocOpen);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keyup', handleKeyup);

    return function cleanup() {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keyup', handleKeyup);
    };
  }, [tocOpen]);

  return (
    <div
      className={`${styles.tableOfContents} ${tocOpen ? styles.tocOpen : null}`}
    >
      <button
        type="button"
        className={styles.tocButton}
        onClick={() => setTocState(!tocOpen)}
      >
        <Chevron />
        <span className={styles.tocButtonText}>Table of Contents</span>
      </button>
      <h3 className={styles.tableOfContentsHeading}>Table of Contents</h3>
      {ReactHtmlParser(tableOfContents)}
    </div>
  );
}

export default TableOfContents;
