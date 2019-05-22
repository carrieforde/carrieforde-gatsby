import React from 'react';
import PropTypes from 'prop-types';
import timeStampStyles from './timeStamp.module.css';

const TimeStamp = ({ date }) => {
  const dateTime = new Date(date);

  return (
    <time className={timeStampStyles.pageDate} dateTime={dateTime}>
      {date}
    </time>
  );
};

TimeStamp.propTypes = {
  date: PropTypes.string
};

export default TimeStamp;
