import { Frontmatter } from "./frontmatter.interface";
import { Fields } from "./fields.interface";
import { TocItem } from "../components/TableOfContents/TableOfContents.interface";

export interface Node {
  frontmatter: Frontmatter;
  timeToRead: number;
  excerpt: string;
  fields: Fields;
  body: string;
  tableOfContents?: {
    items: TocItem[];
  };
}
