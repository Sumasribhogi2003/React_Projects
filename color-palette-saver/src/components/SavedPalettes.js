import React from 'react';
import ColorBox from './ColorBox';

function SavedPalettes({ palettes, onDelete }) {
  return (
    <div className="saved-palettes">
      <h2>Saved Palettes</h2>
      {palettes.length === 0 && <p>No palettes saved yet.</p>}
      {palettes.map((palette) => (
        <div key={palette.name} className="saved-palette">
          <div className="palette-header">
            <h3>{palette.name}</h3>
            <button onClick={() => onDelete(palette.name)}>Delete</button>
          </div>
          <div className="palette">
            {palette.colors.map((color, index) => (
              <ColorBox key={index} color={color} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SavedPalettes;
