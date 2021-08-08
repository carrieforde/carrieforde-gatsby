import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { useState } from 'react';
import { getComponentKey } from 'utils/utilities';
import { TabsProps } from './Tabs.interface';
import styles from './tabs.module.css';

const Tabs: React.FC<TabsProps> = ({ edges }) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabsNavigation} role="tablist" aria-label="Jobs">
        {edges.map((job, index) => {
          const { frontmatter } = job.node;
          const buttonKey = getComponentKey(frontmatter.company, index);

          return (
            <button
              key={buttonKey}
              id={`${buttonKey}-tab`}
              className={
                currentTab === index
                  ? styles.tabsButtonSelected
                  : styles.tabsButton
              }
              role="tab"
              aria-selected={currentTab === index ? true : false}
              aria-controls={`${buttonKey}-tab`}
              tabIndex={-1}
              onClick={() => setCurrentTab(index)}
            >
              {frontmatter.company}
            </button>
          );
        })}
      </div>

      {edges.map((job, index) => {
        const { frontmatter, body } = job.node;
        const { title, location, range, company } = frontmatter;
        const panelKey = `${getComponentKey(company, index)}-panel`;
        return (
          <div
            key={panelKey}
            id={panelKey}
            className={styles.tabsPanel}
            role="tabpanel"
            aria-labelledby={getComponentKey(company, index)}
            hidden={currentTab === index ? false : true}
            tabIndex={0}
          >
            <h3 className={styles.jobTitle}>
              {title} &#64; {company}
            </h3>
            <p className={styles.locationDate}>
              <span>{location}</span>
              <span className={styles.separator}>&#9656;</span>
              <span>{range}</span>
            </p>

            <div>
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
