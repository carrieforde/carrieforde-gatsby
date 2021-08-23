import parse from 'html-react-parser';
import React from 'react';
import { PageDescriptionProps } from './PageDescription.interface';
import { pageDescription } from './pageDescription.module.css';

const PageDescription: React.FC<PageDescriptionProps> = ({
  description,
  multiLineDescription,
}) => {
  if (description) {
    return <p className={pageDescription}>{parse(description)}</p>;
  }

  if (multiLineDescription) {
    return (
      <>
        {multiLineDescription.map((d: string) => (
          <PageDescription key={d} description={d} />
        ))}
      </>
    );
  }

  return null;
};

export default PageDescription;
