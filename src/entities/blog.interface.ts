import { Edge } from './edge.interface';

export interface BlogProps {
  data: {
    allMdx: {
      edges: Edge[];
    };
  };
}
