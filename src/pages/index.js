import React from 'react';
import { Link } from 'gatsby';

import Site from '../components/Site/Site';
import Image from '../components/image';
import SEO from '../components/SEO/SEO';

const IndexPage = () => (
  <Site>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Site>
);

export default IndexPage;
