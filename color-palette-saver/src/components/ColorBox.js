import React from 'react';

function ColorBox({ color }) {
  return (
    <div className="color-box" style={{ backgroundColor: color }}>
      <span>{color}</span>
    </div>
  );
}

export default ColorBox;
