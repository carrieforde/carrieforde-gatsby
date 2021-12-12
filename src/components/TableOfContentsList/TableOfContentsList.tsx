import React from "react";
import { TableOfContentsListProps } from "./TableOfContentsList.interface";
import {
  tableOfContentsList,
  toclLink,
} from "./TableOfContentsList.module.css";

const TableOfContentsList: React.FC<TableOfContentsListProps> = ({
  listItems,
}) => (
  <ol className={tableOfContentsList}>
    {listItems.map((item) => (
      <li key={item.title}>
        <a href={item.url} className={toclLink}>
          {item.title}
        </a>
        {item.items && <TableOfContentsList listItems={item.items} />}
      </li>
    ))}
  </ol>
);

export default TableOfContentsList;
