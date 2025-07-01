import React from 'react';
import formatTime from '../utils/timeFormatter';

const LapList = ({ laps }) => {
  return (
    <div className="lap-list">
      <h3>Laps</h3>
      {laps.length === 0 ? (
        <p>No laps recorded.</p>
      ) : (
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>
              Lap {index + 1}: {formatTime(lap)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LapList;
