import React, { createContext, useMemo } from 'react';
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
  const providedData = useMemo(() => data, [data]);
  return (
    <MergeFieldContext.Provider value={providedData}>
      {children}
    </MergeFieldContext.Provider>
  );
};

export default MergeFieldProvider;
