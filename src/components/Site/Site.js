import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import siteStyles from './site.module.css';

const Site = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={siteStyles.site}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={siteStyles.page}>{children}</main>
        <Footer />
      </div>
    )}
  />
);

Site.propTypes = {
  children: PropTypes.node.isRequired
};

export default Site;
