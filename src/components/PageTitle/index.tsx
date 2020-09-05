import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { PageTitleProps } from './PageTitle.interface';
import styles from './pageTitle.module.css';

const PageTitle: React.FC<PageTitleProps> = ({ title }) => (
  <h1 className={styles.pageTitle}>{ReactHtmlParser(title)}</h1>
);

export default PageTitle;
