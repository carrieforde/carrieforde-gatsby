import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { gtm } from 'utils/analytics';
import { TableOfContentsProps } from './TableOfContents.interface';
import styles from './TableOfContents.module.css';
import cn from 'classnames';
import TableOfContentsList from 'components/TableOfContentsList/TableOfContentsList';

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [tocOpen, setTocState] = useState(false);

  const classes = cn(styles.tableOfContents, {
    [styles.tocOpen]: tocOpen,
  });

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
    if (tocOpen && e.key === 'Escape') {
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
    <div className={classes}>
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
        <FontAwesomeIcon icon={['fal', 'chevron-circle-left']} size="lg" />
        <span className={styles.tocButtonText}>Table of Contents</span>
      </button>
      <h2 className={styles.tableOfContentsHeading}>Table of Contents</h2>
      <TableOfContentsList listItems={items} />
    </div>
  );
};

export default TableOfContents;
