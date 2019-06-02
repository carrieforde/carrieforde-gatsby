import React from 'react';
import PropTypes from 'prop-types';

import styles from './pageDescription.module.css';

const PageDescription = ({ description }) => (
  <p
    className={styles.pageDescription}
    dangerouslySetInnerHTML={{ __html: description }}
  />
);

PageDescription.propTypes = {
  description: PropTypes.string
};

PageDescription.defaultProps = {
  description: ''
};

export default PageDescription;
