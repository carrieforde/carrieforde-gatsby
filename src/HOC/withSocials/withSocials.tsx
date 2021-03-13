import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { SocialNavQuery } from './withSocials.interface';

const withSocials = <T extends unknown>(
  Component: React.ComponentType<T>
): React.FC<T> => {
  const WrappedComponent: React.FC<T> = (props) => {
    const { site }: SocialNavQuery = useStaticQuery(graphql`
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

    return <Component socials={site.siteMetadata.socials} {...props} />;
  };

  return WrappedComponent;
};

export default withSocials;
