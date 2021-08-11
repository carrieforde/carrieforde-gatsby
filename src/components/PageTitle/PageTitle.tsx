import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { PageTitleProps } from './PageTitle.interface';
import { pageTitle } from './pageTitle.module.css';

const PageTitle: React.FC<PageTitleProps> = ({ title }) => (
  <h1 className={pageTitle}>{ReactHtmlParser(title)}</h1>
);

export default PageTitle;
