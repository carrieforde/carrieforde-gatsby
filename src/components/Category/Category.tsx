import { Link } from 'gatsby';
import React from 'react';
import { slugify } from '../../utils/utilities';
import { CategoryProps } from './Category.interface';
import { category as cat } from './category.module.css';

const Category: React.FC<CategoryProps> = ({ category }) => (
  <Link className={cat} to={`/category/${slugify(category)}`}>
    {category}
  </Link>
);

export default Category;
