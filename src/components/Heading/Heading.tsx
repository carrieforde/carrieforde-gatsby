import React from 'react';
import { useMemo } from 'react';
import { HeadingProps } from './Heading.interface';
import parse from 'html-react-parser';

const Heading: React.FC<HeadingProps> = ({ level, className, children }) => {
  const HeadingLevel = useMemo(() => level, []);
  const content = useMemo(
    () => (typeof children === 'string' ? parse(children) : children),
    []
  );

  return <HeadingLevel className={className}>{content}</HeadingLevel>;
};

export default Heading;
