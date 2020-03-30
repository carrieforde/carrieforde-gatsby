import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../Header';
import Footer from '../Footer';
import styles from './site.module.css';

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
    render={(data) => (
      <div className={styles.site}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={styles.page}>{children}</main>
        <Footer />
      </div>
    )}
  />
);

Site.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Site;
