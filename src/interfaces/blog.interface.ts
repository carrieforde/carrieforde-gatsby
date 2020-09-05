import { Edge } from './edge.interface';

export interface BlogProps {
  data: {
    allMarkdownRemark: {
      edges: Edge[];
    };
  };
}
