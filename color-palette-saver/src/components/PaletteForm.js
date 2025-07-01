import React, { useState } from 'react';

function PaletteForm({ setCurrentColors, onSavePalette }) {
  const [color, setColor] = useState('#000000'); // default to black

  const addColor = () => {
    if (color) {
      setCurrentColors(prev => [...prev, color]);
      setColor('#000000');
    }
  };

  return (
    <div className="palette-form">
      <div className="palette-form__input-wrapper">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <div className="palette-form__buttons">
        <button className="btn-add" onClick={addColor}>➕ Add Color</button>
        <button
  className="btn-save"
  onClick={() => onSavePalette("My Palette")}
>
  💾 Save Palette
</button>

      </div>
    </div>
  );
}

export default PaletteForm;
