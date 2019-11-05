import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styles from './category.module.css';
import { slugify } from '../../utils/utilities';

const Category = ({ category }) => (
  <Link className={styles.category} to={`/category/${slugify(category)}`}>
    {category}
  </Link>
);

Category.propTypes = {
  category: PropTypes.string
};

export default Category;
