import Category from 'components/Category/Category';
import PageDescription from 'components/PageDescription/PageDescription';
import PageTitle from 'components/PageTitle/PageTitle';
import TimeStamp from 'components/TimeStamp/TimeStamp';
import React from 'react';
import { PageHeaderProps } from './PageHeader.interface';
import styles from './pageHeader.module.css';

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  multiLineDescription,
  category,
  date,
  updated,
}) => (
  <header className="pageHeader">
    {category && <Category category={category} />}
    <PageTitle title={title} />
    {(description || multiLineDescription) && (
      <PageDescription
        description={description}
        multiLineDescription={multiLineDescription}
      />
    )}
    {date && <TimeStamp date={date} />}
    {updated && (
      <>
        <span className={styles.dateSeparator}>&#9656;</span>
        <TimeStamp date={updated} updated={true} />
      </>
    )}
  </header>
);

export default PageHeader;
