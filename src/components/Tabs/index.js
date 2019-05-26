import React, { Component } from 'react';
import styles from './tabs.module.css';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0
    };
  }

  render() {
    const { edges } = this.props,
      { currentTab } = this.state;

    return (
      <div className={styles.tabs}>
        <div className={styles.tabsNavigation} role="tablist" aria-label="Jobs">
          {edges.map((job, index) => {
            const { frontmatter } = job.node;

            return (
              <button
                key={index}
                id={index}
                className={
                  currentTab === index
                    ? styles.tabsButtonSelected
                    : styles.tabsButton
                }
                role="tab"
                aria-selected={currentTab === index ? true : false}
                aria-controls={`${index}-tab`}
                tabIndex="-1"
                onClick={() => this.setState({ currentTab: index })}
              >
                {frontmatter.company}
              </button>
            );
          })}
        </div>

        {edges.map((job, index) => {
          const { frontmatter, html } = job.node,
            { title, location, range, company } = frontmatter;
          return (
            <div
              key={index}
              id={`${index}-tab`}
              className={styles.tabsPanel}
              role="tabpanel"
              aria-labelledby={index}
              hidden={currentTab === index ? false : true}
              tabIndex="0"
            >
              <h3 className={styles.jobTitle}>
                {title} &#64; {company}
              </h3>
              <p className={styles.locationDate}>
                <span>{location}</span>
                <span className={styles.separator}>&#9656;</span>
                <span>{range}</span>
              </p>

              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Tabs;
