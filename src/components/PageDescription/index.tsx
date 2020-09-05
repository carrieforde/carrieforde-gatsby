import React from 'react';
import { PageDescriptionProps } from './PageDescription.interface';
import ReactHtmlParser from 'react-html-parser';
import styles from './pageDescription.module.css';

const PageDescription: React.FC<PageDescriptionProps> = ({ description }) => {
  if (description) {
    return (
      <p className={styles.pageDescription}>{ReactHtmlParser(description)}</p>
    );
  }

  return null;
};

export default PageDescription;
