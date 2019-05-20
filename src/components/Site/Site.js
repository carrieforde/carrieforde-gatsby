import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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
      <div className="site">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="site-content">{children}</main>
        <Footer />
      </div>
    )}
  />
);

Site.propTypes = {
  children: PropTypes.node.isRequired
};

export default Site;
