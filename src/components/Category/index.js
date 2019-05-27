import React from 'react';
import PropTypes from 'prop-types';

import styles from './category.module.css';

const Category = ({ category }) => (
  <p className={styles.category}>{category}</p>
);

Category.propTypes = {
  category: PropTypes.string
};

export default Category;
