import { graphql, useStaticQuery } from 'gatsby';
import React, { ReactElement } from 'react';
import Tabs from 'components/Tabs';

function ExperienceTabs(): ReactElement {
  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              company
              location
              range
            }
            body
          }
        }
      }
    }
  `);

  return <Tabs {...allMdx} />;
}

export default ExperienceTabs;
