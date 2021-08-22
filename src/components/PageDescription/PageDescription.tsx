import React from 'react';
import { PageDescriptionProps } from './PageDescription.interface';
import ReactHtmlParser from 'react-html-parser';
import { pageDescription } from './pageDescription.module.css';

const PageDescription: React.FC<PageDescriptionProps> = ({
  description,
  multiLineDescription,
}) => {
  if (description) {
    return <p className={pageDescription}>{ReactHtmlParser(description)}</p>;
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
