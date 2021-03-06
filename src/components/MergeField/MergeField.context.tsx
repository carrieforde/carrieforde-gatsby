import React, { createContext } from 'react';
import {
  MergeFieldContextProps,
  MergeFieldProviderProps,
} from './MergeField.interface';

const defaultMergeFieldContext = {};

export const MergeFieldContext = createContext<MergeFieldContextProps>(
  defaultMergeFieldContext
);

MergeFieldContext.displayName = 'MergeFieldContext';

const MergeFieldProvider: React.FC<MergeFieldProviderProps> = ({
  data,
  children,
}) => {
  return (
    <MergeFieldContext.Provider value={data}>
      {children}
    </MergeFieldContext.Provider>
  );
};

export default MergeFieldProvider;
