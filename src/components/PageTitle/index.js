import React from 'react';
import PropTypes from 'prop-types';
import styles from './pageTitle.module.css';

const PageTitle = ({ title }) => (
  <h1
    className={styles.pageTitle}
    dangerouslySetInnerHTML={{ __html: title }}
  />
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageTitle;
