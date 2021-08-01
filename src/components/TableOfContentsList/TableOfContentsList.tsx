import React from 'react';
import { TableOfContentsListProps } from './TableOfContentsList.interface';
import styles from './TableOfContentsList.module.css';

const TableOfContentsList: React.FC<TableOfContentsListProps> = ({
  listItems,
}) => (
  <ol className={styles.tableOfContentsList}>
    {listItems.map((item) => (
      <li key={item.title}>
        <a href={item.url} className={styles.toclLink}>
          {item.title}
        </a>
        {item.items && <TableOfContentsList listItems={item.items} />}
      </li>
    ))}
  </ol>
);

export default TableOfContentsList;
