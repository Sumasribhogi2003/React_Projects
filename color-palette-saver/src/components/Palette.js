import React from 'react';
import ColorBox from './ColorBox';

function Palette({ colors }) {
  return (
    <div className="palette">
      {colors.map((color, index) => (
        <ColorBox key={index} color={color} />
      ))}
    </div>
  );
}

export default Palette;
