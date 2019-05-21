import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Mail from '../../icons/paper-plane-light.svg';
import LinkedIn from '../../icons/linkedin-in-brands.svg';
import Github from '../../icons/github-brands.svg';
import CodePen from '../../icons/codepen-brands.svg';
import Twitter from '../../icons/twitter-brands.svg';

import socialNavStyles from './socialNav.module.css';

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
      render={data => {
        const { socials } = data.site.siteMetadata,
          { mail, linkedin, github, codepen, twitter } = socials;

        return (
          <ul className={socialNavStyles.socialNav}>
            <li className={socialNavStyles.socialNav__item}>
              <a href={`mailto:${mail}`}>
                <Mail />
                <span className="visually-hidden">Mail</span>
              </a>
            </li>
            <li className={socialNavStyles.socialNav__item}>
              <a href={linkedin}>
                <LinkedIn />
                <span className="visually-hidden">LinkedIn</span>
              </a>
            </li>
            <li className={socialNavStyles.socialNav__item}>
              <a href={github}>
                <Github />
                <span className="visually-hidden">Github</span>
              </a>
            </li>
            <li className={socialNavStyles.socialNav__item}>
              <a href={codepen}>
                <CodePen />
                <span className="visually-hidden">CodePen</span>
              </a>
            </li>
            <li className={socialNavStyles.socialNav__item}>
              <a href={twitter}>
                <Twitter />
                <span className="visually-hidden">Twitter</span>
              </a>
            </li>
          </ul>
        );
      }}
    />
  );
};

export default SocialNav;
