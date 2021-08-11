import React from 'react';
import Category from '../Category/Category';
import PageDescription from '../PageDescription/PageDescription';
import PageTitle from '../PageTitle/PageTitle';
import TimeStamp from '../TimeStamp/TimeStamp';
import { PageHeaderProps } from './PageHeader.interface';
import { dateSeparator } from './pageHeader.module.css';

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
        <span className={dateSeparator}>&#9656;</span>
        <TimeStamp date={updated} updated={true} />
      </>
    )}
  </header>
);

export default PageHeader;
