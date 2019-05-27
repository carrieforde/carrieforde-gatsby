import React from 'react';
import PropTypes from 'prop-types';
import styles from './timeStamp.module.css';

const TimeStamp = ({ date, className }) => {
  const dateTime = new Date(date).toISOString();

  return (
    <time className={className || styles.timeStamp} dateTime={dateTime}>
      {date}
    </time>
  );
};

TimeStamp.propTypes = {
  date: PropTypes.string
};

export default TimeStamp;
