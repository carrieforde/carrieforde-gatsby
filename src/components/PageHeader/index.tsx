import React, { Fragment } from 'react';
import Category from '../Category';
import PageDescription from '../PageDescription';
import PageTitle from '../PageTitle';
import TimeStamp from '../TimeStamp';
import { PageHeaderProps } from './PageHeader.interface';
import styles from './pageHeader.module.css';

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  category,
  date,
  updated,
}) => (
  <header className="pageHeader">
    {category && <Category category={category} />}
    <PageTitle title={title} />
    {description && <PageDescription description={description} />}
    {date && <TimeStamp date={date} />}
    {updated && (
      <Fragment>
        <span className={styles.dateSeparator}>&#9656;</span>
        <TimeStamp date={updated} updated="true" />
      </Fragment>
    )}
  </header>
);

export default PageHeader;
