import { GatsbyImageProps } from "gatsby-image";
import { Edge } from "./edge.interface";
import { Node } from "./node.interface";

export interface PageProps {
  data: {
    image?: {
      childImageSharp: GatsbyImageProps;
    };
    jobs?: Edge[];
    mdx?: Node;
  };
}
