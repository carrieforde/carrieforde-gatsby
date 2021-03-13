import React from 'react';
import { TimeStampProps } from './TimeStamp.interface';
import styles from './timeStamp.module.css';
import cn from 'classnames';

const TimeStamp: React.FC<TimeStampProps> = ({ date, isSmall, updated }) => {
  const dateTime = new Date(date).toISOString();
  const classes = cn(styles.timeStamp, {
    [styles.timeStampIsSmall]: isSmall,
  });

  return (
    <time className={classes} dateTime={dateTime}>
      {updated && <span className={styles.timeStampUpdated}>Updated: </span>}
      {date}
    </time>
  );
};

export default TimeStamp;
