import React from 'react';
import SEO from 'components/Seo/Seo';
import Site from 'components/Site/Site';

const NotFoundPage: React.FC<unknown> = () => (
  <Site>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Site>
);

export default NotFoundPage;
