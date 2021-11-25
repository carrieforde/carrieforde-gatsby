import { Fields } from "interfaces/fields.interface";
import { Frontmatter } from "interfaces/frontmatter.interface";

export interface PaginationProps {
  previous?: {
    fields: Fields;
    frontmatter: Frontmatter;
  };
  next?: {
    fields: Fields;
    frontmatter: Frontmatter;
  };
}
