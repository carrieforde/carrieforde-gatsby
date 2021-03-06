import { ReactNode } from 'react';
import { KeyValue } from '../../interfaces/KeyValue.type';

export interface ExtractedMergeField {
  search: string;
  fieldName: string;
}

export type MergeFieldContextProps = KeyValue;

export interface MergeFieldProviderProps {
  data: KeyValue;
  children: ReactNode;
}

export interface MergeFieldProps {
  text: string;
}
