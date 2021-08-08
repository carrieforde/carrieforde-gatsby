import { Edge } from 'entities/edge.interface';

export interface CategoryPageProps {
  pageContext: {
    category: string;
  };
  data: {
    allMdx: {
      edges: Edge[];
    };
  };
}
