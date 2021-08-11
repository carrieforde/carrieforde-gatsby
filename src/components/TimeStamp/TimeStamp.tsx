import React from 'react';
import { TimeStampProps } from './TimeStamp.interface';
import {
  timeStamp,
  timeStampIsSmall,
  timeStampUpdated,
} from './timeStamp.module.css';
import cn from 'classnames';

const TimeStamp: React.FC<TimeStampProps> = ({ date, isSmall, updated }) => {
  const dateTime = new Date(date).toISOString();
  const classes = cn(timeStamp, {
    [timeStampIsSmall]: isSmall,
  });

  return (
    <time className={classes} dateTime={dateTime}>
      {updated && <span className={timeStampUpdated}>Updated: </span>}
      {date}
    </time>
  );
};

export default TimeStamp;
