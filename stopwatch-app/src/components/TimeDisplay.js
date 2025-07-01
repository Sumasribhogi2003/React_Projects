import React from 'react';
import formatTime from '../utils/timeFormatter';

const TimeDisplay = ({ time }) => {
  return <div className="time-display">{formatTime(time)}</div>;
};

export default TimeDisplay;
