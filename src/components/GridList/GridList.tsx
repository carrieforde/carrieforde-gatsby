import List, { ListItem } from "components/List/List";
import React from "react";
import { gridList, gridListItem } from "./GridList.module.css";

const GridList: React.FC = ({ children }) => (
  <List type="BULLETED" className={gridList}>
    {children}
  </List>
);

const GridListItem: React.FC = ({ children }) => (
  <ListItem className={gridListItem}>{children}</ListItem>
);

export { GridList as default, GridListItem };
