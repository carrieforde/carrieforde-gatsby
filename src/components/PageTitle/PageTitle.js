import React from 'react';
import PropTypes from 'prop-types';
import pageTitleStyles from './pageTitle.module.css';

const PageTitle = ({ title }) => (
  <h1
    className={pageTitleStyles.pageTitle}
    dangerouslySetInnerHTML={{ __html: title }}
  />
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageTitle;
