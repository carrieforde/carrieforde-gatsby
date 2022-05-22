import { SocialProps } from "entities/socials.interface";

export interface SocialNavProps {
  socials: SocialProps[];
}

export interface SocialNavQueryResult {
  site: {
    siteMetadata: {
      socials: SocialProps[];
    };
  };
}
