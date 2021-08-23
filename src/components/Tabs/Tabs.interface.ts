import { ReactNode } from 'react';

export interface TabsProps {
  tabItems: Tab[];
  ariaLabel: string;
}

export interface Tab {
  title: string; // what appears on the button
  content: ReactNode & string;
}

export interface TabButtonProps {
  id: string;
  ariaSelected: boolean;
  onClick: () => void;
}

export interface TabPanelProps {
  id: string;
  hidden: boolean;
}
