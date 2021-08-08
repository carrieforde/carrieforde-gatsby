import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { SiteProps } from './Site.interface';
import styles from './site.module.css';

const Site: React.FC<SiteProps> = ({ children }) => (
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

export default Site;
