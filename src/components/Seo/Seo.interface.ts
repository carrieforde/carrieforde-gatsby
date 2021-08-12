export interface SeoProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: Meta[];
}

interface Meta {
  name: string;
  content: string;
}
