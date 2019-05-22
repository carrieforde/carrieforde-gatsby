import React from 'react';
import PropTypes from 'prop-types';

import pageDescriptionStyles from './pageDescription.module.css';

const PageDescription = ({ description }) => (
  <p className={pageDescriptionStyles.pageDescription}>{description}</p>
);

PageDescription.propTypes = {
  description: PropTypes.string
};

PageDescription.defaultProps = {
  description: ''
};

export default PageDescription;
