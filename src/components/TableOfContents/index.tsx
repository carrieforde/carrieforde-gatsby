import React, { ReactElement, useEffect, useState } from 'react';
import Chevron from '../../icons/chevron-circle-left-light.svg';
import { gtm } from '../../utils/analytics';
import { TableOfContentsProps } from './table-of-contents.interface';
import styles from './TableOfContents.module.css';

function TableOfContents({ items }: TableOfContentsProps): ReactElement {
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
        onClick={() => {
          gtm({
            event: 'click',
            category: 'Table of Contents',
            label: tocOpen ? 'Close' : 'Open',
          });
          return setTocState(!tocOpen);
        }}
      >
        <Chevron />
        <span className={styles.tocButtonText}>Table of Contents</span>
      </button>
      <h2 className={styles.tableOfContentsHeading}>Table of Contents</h2>
      <ul>
        {items.map(({ url, title }, index) => (
          <li key={`toc-${index}`}>
            <a href={url} className="tocLink">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableOfContents;
