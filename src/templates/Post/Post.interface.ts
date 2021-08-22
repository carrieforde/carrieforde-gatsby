import { Location } from 'interfaces/location.interface';
import { Node } from 'interfaces/node.interface';
import { PageContext } from 'interfaces/page-context.interface';

export interface PostProps {
  data: {
    mdx: Node;
  };
  pageContext: PageContext;
  location: Location;
}
