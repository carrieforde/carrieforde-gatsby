import React from 'react';
import { Link } from 'gatsby';

import Site from '../components/Site/Site';
import SEO from '../components/SEO/SEO';

const SecondPage = () => (
  <Site>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Site>
);

export default SecondPage;
