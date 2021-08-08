import { ReactNode } from 'react';

export interface ExtractedMergeField {
  search: string;
  fieldName: string;
  defaultValue?: string;
}

export type MergeFieldContextProps = Record<string, any>;

export interface MergeFieldProviderProps {
  data: Record<string, any>;
  children: ReactNode;
}

export interface MergeFieldProps {
  text: string;
}
