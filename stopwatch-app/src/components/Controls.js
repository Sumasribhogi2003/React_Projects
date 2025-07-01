import React from 'react';

const Controls = ({ isRunning, onStartPause, onReset, onLap }) => {
  return (
    <div className="controls">
      <button onClick={onStartPause}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={onLap} disabled={!isRunning}>
        Lap
      </button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Controls;
