import React from 'react';
import { TimeStampProps } from './TimeStamp.interface';
import styles from './timeStamp.module.css';

const TimeStamp: React.FC<TimeStampProps> = ({ date, className, updated }) => {
  const dateTime = new Date(date).toISOString();

  return (
    <time className={className || styles.timeStamp} dateTime={dateTime}>
      {updated && <span className={styles.timeStampUpdated}>Updated: </span>}
      {date}
    </time>
  );
};

export default TimeStamp;
