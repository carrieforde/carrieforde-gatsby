import { BlogProps } from '../../interfaces/blog.interface';
import { Edge } from '../../interfaces/edge.interface';

export interface CategoryProps {
  pageContext: {
    category: string;
  };
  data: {
    allMarkdownRemark: {
      edges: Edge[];
    };
  };
}
