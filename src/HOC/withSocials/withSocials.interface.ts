import { SocialProps } from 'entities/socials.interface';

export interface SocialNavQuery {
  site: {
    siteMetadata: {
      socials: SocialProps[];
    };
  };
}
