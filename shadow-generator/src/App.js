import React, { useState } from 'react';
import ShadowControls from './components/ShadowControls';
import PreviewBox from './components/PreviewBox';
import './styles.css';

const App = () => {
  const [shadow, setShadow] = useState({
    offsetX: 10,
    offsetY: 10,
    blur: 15,
    spread: 0,
    color: '#000000',
    opacity: 0.5,
  });

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <div className="top-bar">
        <h1>Shadow Generator Tool</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="toggle-mode">
  {darkMode ? '☀️' : '🌙'}
</button>

      </div>
      <ShadowControls shadow={shadow} setShadow={setShadow} />
      <PreviewBox shadow={shadow} />
    </div>
  );
};

export default App;
