import React, { useState, useEffect, useRef } from 'react';
import TimeDisplay from './TimeDisplay';
import Controls from './Controls';
import LapList from './LapList';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    if (isRunning) {
      setLaps((prev) => [...prev, time]);
    }
  };

  return (
    <div className="stopwatch">
      <TimeDisplay time={time} />
      <Controls
        isRunning={isRunning}
        onStartPause={handleStartPause}
        onReset={handleReset}
        onLap={handleLap}
      />
      <LapList laps={laps} />
    </div>
  );
};

export default Stopwatch;
