import cn from "classnames";
import { kebabCase } from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import { TabButtonProps, TabPanelProps, TabsProps } from "./Tabs.interface";
import {
  tabButton,
  tabButtonIsActive,
  tabPanel,
  tabs,
  tabsList,
} from "./Tabs.module.css";

const Tabs: React.FC<TabsProps> = ({
  tabItems,
  ariaLabel,
  panelClass,
  buttonClass,
}) => {
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
              key={`${key}-button`}
              id={key}
              className={buttonClass}
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
          <TabPanel key={key} id={key} className={panelClass} hidden={hidden}>
            {content}
          </TabPanel>
        );
      })}
    </div>
  );
};

const TabButton: React.FC<TabButtonProps> = ({
  id,
  className,
  ariaSelected,
  onClick,
  children,
}) => {
  const classes = cn(tabButton, className, {
    [tabButtonIsActive]: ariaSelected,
  });

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

const TabPanel: React.FC<TabPanelProps> = ({
  id,
  className,
  hidden,
  children,
}) => {
  const classes = cn(tabPanel, className);

  return (
    <div
      className={classes}
      id={`${id}-panel`}
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
      hidden={hidden}
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export default Tabs;
