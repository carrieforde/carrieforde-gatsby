export interface TableOfContentsListProps {
  listItems: ListItem[];
}

export interface ListItem {
  url: string;
  title: string;
  items?: ListItem[];
}
