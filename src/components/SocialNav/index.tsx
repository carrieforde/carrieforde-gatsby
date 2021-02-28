import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import CodePen from '../../icons/codepen-brands.svg';
import Github from '../../icons/github-brands.svg';
import LinkedIn from '../../icons/linkedin-in-brands.svg';
import Mail from '../../icons/paper-plane-light.svg';
import styles from './socialNav.module.css';

const SocialNav: React.FC<unknown> = () => {
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
          </ul>
        );
      }}
    />
  );
};

export default SocialNav;
