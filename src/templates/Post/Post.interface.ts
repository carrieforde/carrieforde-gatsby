import { Node } from '../../interfaces/node.interface';
import { PageContext } from '../../interfaces/page-context.interface';

export interface PostProps {
  data: {
    markdownRemark: Node;
  };
  pageContext: PageContext;
}
