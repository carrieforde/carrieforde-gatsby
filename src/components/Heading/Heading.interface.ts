import { HeadingLevel } from "entities/heading-level.type";

export interface HeadingProps {
  level: HeadingLevel;
  className?: string;
  weight: 300 | 400 | 600;
}
