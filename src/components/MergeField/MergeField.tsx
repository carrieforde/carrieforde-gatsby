import parse from 'html-react-parser';
import React, { useContext } from 'react';
import { MergeFieldContext } from './MergeField.context';
import { MergeFieldProps } from './MergeField.interface';
import { processMergeField, searchContent } from './MergeField.utils';

const MergeField: React.FC<MergeFieldProps> = ({ text }) => {
  const data = useContext(MergeFieldContext);
  const processed = processMergeField(text, data);

  if (searchContent(processed)) {
    return <MergeField text={processed} />;
  }

  return <>{parse(processed)}</>;
};

export default MergeField;
