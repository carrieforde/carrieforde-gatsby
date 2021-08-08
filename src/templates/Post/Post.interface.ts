import { Location } from 'entities/location.interface';
import { Node } from 'entities/node.interface';
import { PageContext } from 'entities/page-context.interface';

export interface PostProps {
  data: {
    mdx: Node;
  };
  pageContext: PageContext;
  location: Location;
}
