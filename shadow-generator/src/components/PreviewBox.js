import React, { useState } from 'react';

function hexToRgb(hex) {
  if (typeof hex !== 'string') return { r: 0, g: 0, b: 0 };
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map((h) => h + h).join('');
  const bigint = parseInt(hex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

const PreviewBox = ({ shadow }) => {
  const { r, g, b } = hexToRgb(shadow.color);
  const boxShadow = `${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blur}px ${shadow.spread}px rgba(${r}, ${g}, ${b}, ${shadow.opacity})`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`box-shadow: ${boxShadow};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="preview">
      <div className="box" style={{ boxShadow }}></div>
      <p><code>box-shadow: {boxShadow};</code></p>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? 'Copied!' : 'Copy CSS'}
      </button>
    </div>
  );
};

export default PreviewBox;
