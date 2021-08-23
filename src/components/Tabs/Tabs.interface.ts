import { ReactNode } from 'react';

export interface TabsProps {
  tabItems: Tab[];
  ariaLabel: string;
  buttonClass?: string;
  panelClass?: string;
}

export interface Tab {
  title: string;
  content: ReactNode & string;
}

export interface TabButtonProps {
  id: string;
  ariaSelected: boolean;
  className?: string;
  onClick: () => void;
}

export interface TabPanelProps {
  id: string;
  className?: string;
  hidden: boolean;
}
