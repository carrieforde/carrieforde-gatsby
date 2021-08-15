import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import React from 'react';
import MergeField from 'components/MergeField/MergeField';
import { CallOutProps } from './CallOut.interface';
import * as styles from './Callout.module.css';

const ICON_MAP: { [key: string]: IconName } = {
  INFO: 'info-circle',
  TIP: 'lightbulb-exclamation',
  WARNING: 'exclamation-circle',
  DANGER: 'exclamation-triangle',
};

const CallOut: React.FC<CallOutProps> = ({ type, text }) => {
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
        <MergeField text={text} />
      </p>
    </div>
  );
};

export default CallOut;
