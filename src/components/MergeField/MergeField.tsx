import React, { useContext } from 'react';
import { MergeFieldContext } from './MergeField.context';
import { MergeFieldProps } from './MergeField.interface';
import { processMergeField } from './MergeField.utils';

const MergeField: React.FC<MergeFieldProps> = ({ text }) => {
  const data = useContext(MergeFieldContext);
  const processed = processMergeField(text, data);

  return <>{processed}</>;
};

export default MergeField;
