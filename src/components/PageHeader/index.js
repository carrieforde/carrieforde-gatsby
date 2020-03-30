import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import PageTitle from '../PageTitle';
import PageDescription from '../PageDescription';
import TimeStamp from '../TimeStamp';
import Category from '../Category';
import styles from './pageHeader.module.css';

const PageHeader = ({ title, description, category, date, updated }) => (
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

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  updated: PropTypes.string,
};

export default PageHeader;
