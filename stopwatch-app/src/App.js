import React, { useState, useEffect } from 'react';
import Stopwatch from './components/Stopwatch';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="app-container">
      <div className="heading-row">
        <h1>Stopwatch with Laps</h1>
        <button className="toggle-darkmode-emoji" onClick={toggleDarkMode}>
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
      <Stopwatch />
    </div>
  );
}

export default App;
