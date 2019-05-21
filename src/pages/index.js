import React from 'react';

import Site from '../components/Site/Site';

import SEO from '../components/SEO/SEO';

const IndexPage = () => (
  <Site>
    <SEO title="Home" />
    <section className="hero">
      <header className="page-header">
        <h1 className="page-title">
          Hello, I’m Carrie!{' '}
          <span className="emoji" role="img" aria-label="waving hand">
            👋
          </span>
        </h1>
        <p className="page-description">
          I am a front end software engineer in San Mateo, California who builds
          elegant, maintainable, and performant websites with a modern tech
          stack & WordPress.
        </p>
        <p>
          Send me a message{' '}
          <a href="mailto:carrie@carrieforde.com">carrie@carrieforde.com</a>{' '}
        </p>
      </header>
    </section>
  </Site>
);

export default IndexPage;
