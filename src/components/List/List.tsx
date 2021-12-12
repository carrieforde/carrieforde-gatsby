import React, { useMemo } from "react";
import { ListItemProps, ListProps } from "./List.interface";

const List: React.FC<ListProps> = ({ type, className, children }) => {
  const ListType = useMemo(() => (type === "BULLETED" ? "ul" : "ol"), []);

  return <ListType className={className}>{children}</ListType>;
};

const ListItem: React.FC<ListItemProps> = ({ className, children }) => (
  <li className={className}>{children}</li>
);

export { List as default, ListItem };
