import parse from 'html-react-parser';
import React, { useMemo } from 'react';
import { HeadingProps } from './Heading.interface';

const Heading: React.FC<HeadingProps> = ({
  level,
  className,
  children,
  weight,
}) => {
  const HeadingLevel = useMemo(() => level, []);
  const styles = useMemo(
    () => ({
      fontWeight: weight,
    }),
    []
  );
  const content = useMemo(
    () => (typeof children === 'string' ? parse(children) : children),
    []
  );

  return (
    <HeadingLevel className={className} style={styles}>
      {content}
    </HeadingLevel>
  );
};

export default Heading;
