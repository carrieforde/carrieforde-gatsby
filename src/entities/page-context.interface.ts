import { Fields } from './fields.interface';
import { Frontmatter } from './frontmatter.interface';

export interface PageContext {
  slug?: string;
  previous?: {
    fields: Fields;
    frontmatter: Frontmatter;
  };
  next?: {
    fields: Fields;
    frontmatter: Frontmatter;
  };
}
