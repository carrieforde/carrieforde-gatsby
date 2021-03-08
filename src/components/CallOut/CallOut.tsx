import { IconName, IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import React from 'react';
import MergeField from '../MergeField/MergeField';
import {
  extractMergeField,
  searchContent,
} from '../MergeField/MergeField.utils';
import { CallOutProps } from './CallOut.interface';
import styles from './CallOut.module.css';
import ReactHtmlParser from 'react-html-parser';

const ICON_MAP: { [key: string]: IconName } = {
  INFO: 'info-circle',
  TIP: 'lightbulb-exclamation',
  WARNING: 'exclamation-circle',
  DANGER: 'exclamation-triangle',
};

const CallOut: React.FC<CallOutProps> = ({ type, text }) => {
  const hasMergeField = searchContent(text);
  const field = hasMergeField ? extractMergeField(text) : null;
  const classes = cn(styles.callOut, {
    [styles[type]]: !!type,
  });

  return (
    <div className={classes}>
      {type ? (
        <FontAwesomeIcon
          icon={['fal', ICON_MAP[type]]}
          className={styles.icon}
        />
      ) : null}
      <p>
        {hasMergeField && field ? (
          <MergeField text={text} />
        ) : (
          ReactHtmlParser(text)
        )}
      </p>
    </div>
  );
};

export default CallOut;
