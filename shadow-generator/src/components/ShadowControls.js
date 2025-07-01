import React from 'react';

const ShadowControls = ({ shadow, setShadow }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShadow((prev) => ({
      ...prev,
      [name]:
        name === 'opacity'
          ? parseFloat(value)
          : name === 'color'
          ? value
          : parseInt(value),
    }));
  };

  return (
    <div className="controls">
      <label>
        Offset X:
        <input type="range" name="offsetX" min="-50" max="50" value={shadow.offsetX} onChange={handleChange} />
        <span className="value">{shadow.offsetX}px</span>
      </label>

      <label>
        Offset Y:
        <input type="range" name="offsetY" min="-50" max="50" value={shadow.offsetY} onChange={handleChange} />
        <span className="value">{shadow.offsetY}px</span>
      </label>

      <label>
        Blur Radius:
        <input type="range" name="blur" min="0" max="100" value={shadow.blur} onChange={handleChange} />
        <span className="value">{shadow.blur}px</span>
      </label>

      <label>
        Spread Radius:
        <input type="range" name="spread" min="-50" max="50" value={shadow.spread} onChange={handleChange} />
        <span className="value">{shadow.spread}px</span>
      </label>

      <label>
        Color:
        <input type="color" name="color" value={shadow.color} onChange={handleChange} />
      </label>

      <label>
        Opacity:
        <input type="range" name="opacity" min="0" max="1" step="0.01" value={shadow.opacity} onChange={handleChange} />
        <span className="value">{shadow.opacity}</span>
      </label>
    </div>
  );
};

export default ShadowControls;
