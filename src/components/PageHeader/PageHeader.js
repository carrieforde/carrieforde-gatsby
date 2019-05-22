import React from 'react';
import PropTypes from 'prop-types';

import PageTitle from '../PageTitle/PageTitle';
import PageDescription from '../PageDescription/PageDescription';
import TimeStamp from '../TimeStamp/TimeStamp';
import Category from '../Category/Category';

const PageHeader = ({ title, description, category, date }) => (
  <header className="pageHeader">
    {category && <Category category={category} />}
    <PageTitle title={title} />
    {description && <PageDescription description={description} />}
    {date && <TimeStamp date={date} />}
  </header>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string
};

export default PageHeader;
