import React from 'react';
import PropTypes from 'prop-types';
import styles from './timeStamp.module.css';

const TimeStamp = ({ date, className, updated }) => {
  const dateTime = new Date(date).toISOString();

  return (
    <time className={className || styles.timeStamp} dateTime={dateTime}>
      {updated && <span className={styles.timeStampUpdated}>Updated: </span>}
      {date}
    </time>
  );
};

TimeStamp.propTypes = {
  date: PropTypes.string,
  className: PropTypes.string,
  updated: PropTypes.boolean
};

export default TimeStamp;
