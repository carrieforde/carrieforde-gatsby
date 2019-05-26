import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Site from '../components/Site/Site';

import SEO from '../components/SEO/SEO';
import pageTitleStyles from '../components/PageTitle/pageTitle.module.css';
import indexStyles from '../styles/index.module.css';

import PageDescription from '../components/PageDescription/PageDescription';
import pageDescriptionStyles from '../components/PageDescription/pageDescription.module.css';

const IndexPage = ({ data }) => (
  <Site>
    <SEO title="Home" />

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

      <p className={pageDescriptionStyles.pageDescription}>
        Send me a message{' '}
        <a href="mailto:carrie@carrieforde.com">carrie@carrieforde.com</a>
      </p>
    </header>
    <div className={indexStyles.content}>
      <Img
        className={indexStyles.avatar}
        fluid={data.file.childImageSharp.fluid}
      />
      <p>
        Before becoming a software engineer, I worked as a business analyst
        liaising between sales and technical teams to translate business needs
        into technical requirements. These days, I work directly with my
        business stakeholders to define a technical roadmap, and make their
        requirements a reality.
      </p>
      <p>
        I currently work at{' '}
        <a href="www.freedomfinancialnetwork.com">Freedom Financial Network</a>{' '}
        where I lead the architecture and development of{' '}
        <a href="www.freedomdebtrelief.com">freedomdebtrelief.com</a>.
      </p>
      <p>I reach for these technologies on a daily basis:</p>

      <ul className={indexStyles.gridList}>
        <li>HTML</li>
        <li>CSS (& Sass)</li>
        <li>JavaScript (ES6+)</li>
        <li>WordPress</li>
        <li>Git</li>
        <li>Webpack</li>
        <li>React</li>
      </ul>
    </div>
  </Site>
);

export default IndexPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "images/carrie_color-factory.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
