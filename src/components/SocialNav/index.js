import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Mail from '../../icons/paper-plane-light.svg';
import LinkedIn from '../../icons/linkedin-in-brands.svg';
import Github from '../../icons/github-brands.svg';
import CodePen from '../../icons/codepen-brands.svg';
import Twitter from '../../icons/twitter-brands.svg';

import styles from './socialNav.module.css';

const SocialNav = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              socials {
                mail
                linkedin
                github
                codepen
                twitter
              }
            }
          }
        }
      `}
      render={(data) => {
        const { socials } = data.site.siteMetadata,
          { mail, linkedin, github, codepen, twitter } = socials;

        return (
          <ul className={styles.socialNav}>
            <li className={styles.socialNavItem}>
              <a href={`mailto:${mail}`}>
                <Mail />
                <span className={styles.socialNavLabel}>Mail</span>
              </a>
            </li>
            <li className={styles.socialNavItem}>
              <a href={linkedin}>
                <LinkedIn />
                <span className={styles.socialNavLabel}>LinkedIn</span>
              </a>
            </li>
            <li className={styles.socialNavItem}>
              <a href={github}>
                <Github />
                <span className={styles.socialNavLabel}>Github</span>
              </a>
            </li>
            <li className={styles.socialNavItem}>
              <a href={codepen}>
                <CodePen />
                <span className={styles.socialNavLabel}>CodePen</span>
              </a>
            </li>
            <li className={styles.socialNavItem}>
              <a href={twitter}>
                <Twitter />
                <span className={styles.socialNavLabel}>Twitter</span>
              </a>
            </li>
          </ul>
        );
      }}
    />
  );
};

export default SocialNav;
