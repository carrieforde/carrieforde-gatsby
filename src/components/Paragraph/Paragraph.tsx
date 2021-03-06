import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import MergeField from '../MergeField/MergeField';
import {
  extractMergeField,
  searchContent,
} from '../MergeField/MergeField.utils';

const Paragraph = ({ text }) => {
  const hasMergeField = searchContent(text);
  const field = hasMergeField ? extractMergeField(text) : null;

  return (
    <p>
      {hasMergeField && field ? (
        <MergeField text={text} />
      ) : (
        ReactHtmlParser(text)
      )}
    </p>
  );
};

export default Paragraph;
