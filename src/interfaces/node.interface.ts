import { Frontmatter } from './frontmatter.interface';
import { Fields } from './fields.interface';

export interface Node {
  frontmatter: Frontmatter;
  timeToRead: number;
  excerpt: string;
  fields: Fields;
  html: string;
  tableOfContents?: string;
}
