import React, { useState } from 'react';
import styles from './tabs.module.css';
import { TabsProps } from './Tabs.interface';
import { getComponentKey } from '../../utils/utilities';
import ReactHtmlParser from 'react-html-parser';

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
        const { frontmatter, html } = job.node;
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

            <div>{ReactHtmlParser(html)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
