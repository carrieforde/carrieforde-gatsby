import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { SocialProps } from '../../entities/socials.interface';
import withSocials from '../../HOC/withSocials/withSocials';
import { SocialNavProps } from './SocialNav.interface';
import {
  socialNav,
  socialNavItem,
  socialNavLabel,
} from './socialNav.module.css';

const SocialNav: React.FC<SocialNavProps> = ({ socials }) => {
  return (
    <ul className={socialNav}>
      {socials.map((social: SocialProps) => (
        <li key={social.label} className={socialNavItem}>
          <a href={social.value} className="socialLink">
            <FontAwesomeIcon icon={social.icon} size="lg" />
            <span className={socialNavLabel}>{social.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export { SocialNav };
export default withSocials(SocialNav);
