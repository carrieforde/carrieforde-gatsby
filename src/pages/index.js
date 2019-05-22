import React from 'react';

import Site from '../components/Site/Site';

import SEO from '../components/SEO/SEO';
import pageTitleStyles from '../components/PageTitle/pageTitle.module.css';

import PageDescription from '../components/PageDescription/PageDescription';

const IndexPage = () => (
  <Site>
    <SEO title="Home" />
    <section className="hero">
      <header className="page-header">
        <h1 className={pageTitleStyles.pageTitle}>
          Hello, I’m Carrie!{' '}
          <span className="emoji" role="img" aria-label="waving hand">
            👋
          </span>
        </h1>
        <PageDescription
          description="I am a front end software engineer in San Mateo, California who builds
          elegant, maintainable, and performant websites with a modern tech
          stack & WordPress."
        />

        <p>
          Send me a message{' '}
          <a href="mailto:carrie@carrieforde.com">carrie@carrieforde.com</a>{' '}
        </p>
      </header>
    </section>
  </Site>
);

export default IndexPage;
