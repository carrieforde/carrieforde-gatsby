import React from 'react';
import { PageDescriptionProps } from './PageDescription.interface';
import ReactHtmlParser from 'react-html-parser';
import styles from './pageDescription.module.css';

const PageDescription: React.FC<PageDescriptionProps> = ({
  description,
  multiLineDescription,
}) => {
  if (description) {
    return (
      <p className={styles.pageDescription}>{ReactHtmlParser(description)}</p>
    );
  }

  if (multiLineDescription) {
    return (
      <>
        {multiLineDescription.map((description: string) => (
          <PageDescription key={description} description={description} />
        ))}
      </>
    );
  }

  return null;
};

export default PageDescription;
