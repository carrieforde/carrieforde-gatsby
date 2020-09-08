import ReactHtmlParser from 'react-html-parser';
import React, { useState, ReactElement } from 'react';
import styles from './TableOfContents.module.css';
import Chevron from '../../icons/chevron-circle-left-light.svg';

interface TableOfContentsProps {
  tableOfContents: string;
}

function TableOfContents({
  tableOfContents,
}: TableOfContentsProps): ReactElement {
  const [tocOpen, setTocState] = useState(false);
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
