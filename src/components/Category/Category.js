import React from 'react';
import PropTypes from 'prop-types';

import categoryStyles from './category.module.css';

const Category = ({ category }) => (
  <p className={categoryStyles.category}>{category}</p>
);

Category.propTypes = {
  category: PropTypes.string
};

export default Category;
