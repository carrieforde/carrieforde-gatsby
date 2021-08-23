import React from 'react';
import { TextWithSeparatorProps } from './TextWithSeparator.interface';
import parse from 'html-react-parser';
import {
  textWithSeparator,
  textWithSeparator__separator,
} from './TextWithSeparator.module.css';

const TextWithSeparator: React.FC<TextWithSeparatorProps> = ({
  text1,
  text2,
  separator = '&#9656;',
}) => {
  return (
    <p className={textWithSeparator}>
      <span>{parse(text1)}</span>
      <span className={textWithSeparator__separator}>{parse(separator)}</span>
      <span>{parse(text2)}</span>
    </p>
  );
};

export default TextWithSeparator;
