import { kebabCase } from 'lodash';
import React, { useCallback, useState } from 'react';
import { useMemo } from 'react';
import { TabButtonProps, TabPanelProps, TabsProps } from './Tabs.interface';
import {
  tabs,
  tabsList,
  tabButton,
  tabButtonIsActive,
  tabPanel,
} from './Tabs.module.css';
import cn from 'classnames';

const Tabs: React.FC<TabsProps> = ({ tabItems, ariaLabel }) => {
  const initialTab = useMemo(() => kebabCase(tabItems[0].title), []);
  const [currentTab, setCurrentTab] = useState<string>(initialTab);
  const handleClick = useCallback((key: string) => setCurrentTab(key), []);

  return (
    <div className={tabs}>
      <div className={tabsList} role="tablist" aria-label={ariaLabel}>
        {tabItems.map(({ title }) => {
          const key = kebabCase(title);
          const ariaSelected = currentTab === key ? true : false;

          return (
            <TabButton
              key={key}
              id={key}
              onClick={() => handleClick(key)}
              ariaSelected={ariaSelected}
            >
              {title}
            </TabButton>
          );
        })}
      </div>

      {tabItems.map(({ title, content }) => {
        const key = kebabCase(title);
        const hidden = currentTab === key ? false : true;

        return (
          <TabPanel key={key} id={key} hidden={hidden}>
            {content}
          </TabPanel>
        );
      })}
    </div>
  );
};

const TabButton: React.FC<TabButtonProps> = ({
  id,
  ariaSelected,
  onClick,
  children,
}) => {
  const classes = cn(tabButton, { [tabButtonIsActive]: ariaSelected });

  return (
    <button
      className={classes}
      id={`${id}-tab`}
      role="tab"
      aria-selected={ariaSelected}
      aria-controls={`${id}-panel`}
      tabIndex={-1}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const TabPanel: React.FC<TabPanelProps> = ({ id, hidden, children }) => (
  <div
    className={tabPanel}
    id={`${id}-panel`}
    role="tabpanel"
    aria-labelledby={`${id}-tab`}
    hidden={hidden}
    tabIndex={0}
  >
    {children}
  </div>
);

export default Tabs;
