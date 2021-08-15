import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header';
import { SiteProps } from './Site.interface';
import { site, page } from './site.module.css';

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
      <div className={site}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={page}>{children}</main>
        <Footer />
      </div>
    )}
  />
);

export default Site;
