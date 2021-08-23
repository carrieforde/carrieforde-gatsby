import Tabs from 'components/Tabs/Tabs';
import { Tab } from 'components/Tabs/Tabs.interface';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Edge } from 'interfaces/edge.interface';
import React from 'react';
import { useMemo } from 'react';
import { jobPanel } from './Jobs.module.css';

const Jobs: React.FC = () => {
  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              company
              date
            }
            body
          }
        }
      }
    }
  `);

  const tabData = useMemo(() => {
    const { edges } = allMdx;

    return edges.map((e: Edge) => ({
      title: e.node.frontmatter.company,
      content: <MDXRenderer>{e.node.body}</MDXRenderer>,
    })) as Tab[];
  }, []);

  return <Tabs tabItems={tabData} ariaLabel="Jobs" panelClass={jobPanel} />;
};

export default Jobs;
