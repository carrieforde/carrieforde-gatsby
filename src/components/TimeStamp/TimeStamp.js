import React from 'react';
import PropTypes from 'prop-types';
import timeStampStyles from './timeStamp.module.css';

const TimeStamp = ({ date, className }) => {
  const dateTime = new Date(date).toISOString();

  return (
    <time
      className={className || timeStampStyles.timeStamp}
      dateTime={dateTime}
    >
      {date}
    </time>
  );
};

TimeStamp.propTypes = {
  date: PropTypes.string
};

export default TimeStamp;
