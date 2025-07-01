import React, { useState, useEffect } from 'react';
import PaletteForm from './components/PaletteForm';
import Palette from './components/Palette';
import SavedPalettes from './components/SavedPalettes';
import { savePalette, getPalettes, deletePalette } from './utils/storage';

function App() {
  const [currentColors, setCurrentColors] = useState([]);
  const [savedPalettes, setSavedPalettes] = useState([]);
  const [toastVisible, setToastVisible] = useState(false); // ✅ New toast state

  useEffect(() => {
    setSavedPalettes(getPalettes());
  }, []);

  const handleSavePalette = (name) => {
    const newPalette = { name, colors: currentColors };
    savePalette(newPalette);
    setSavedPalettes(getPalettes());
    setCurrentColors([]);

    // ✅ Show toast
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const handleDeletePalette = (name) => {
    deletePalette(name);
    setSavedPalettes(getPalettes());
  };

  return (
    <div className="app-container">
      <h1>🎨 Color Palette Saver</h1>

      {/* ✅ Pass onSavePalette */}
      <PaletteForm
        setCurrentColors={setCurrentColors}
        onSavePalette={handleSavePalette}
      />

      <Palette colors={currentColors} />

      <SavedPalettes
        palettes={savedPalettes}
        onDelete={handleDeletePalette}
      />

      {/* ✅ Toast Message */}
      <div className={`toast ${toastVisible ? 'show' : ''}`}>
        🎉 Palette saved successfully!
      </div>
    </div>
  );
}

export default App;
