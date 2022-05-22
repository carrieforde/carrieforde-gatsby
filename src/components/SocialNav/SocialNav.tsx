import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { SocialNavQueryResult } from "./SocialNav.interface";
import {
  socialNav,
  socialNavItem,
  socialNavLabel,
} from "./socialNav.module.css";

const SocialNav: React.FC = () => {
  const { site }: SocialNavQueryResult = useStaticQuery(graphql`
    query Socials {
      site {
        siteMetadata {
          socials {
            label
            value
            icon
          }
        }
      }
    }
  `);
  const { socials } = site.siteMetadata;

  return (
    <ul className={socialNav}>
      {socials.map(({ label, value, icon }) => (
        <li key={label} className={socialNavItem}>
          <a href={value} className="socialLink">
            <FontAwesomeIcon icon={icon} size="lg" />
            <span className={socialNavLabel}>{label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialNav;
