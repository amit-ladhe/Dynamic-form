import React, { useState } from 'react';

const StyleForm = ({ onApplyStyle }) => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  const [fontStyle, setFontStyle] = useState('Arial');
  const [fontSize, setFontSize] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    onApplyStyle({ backgroundColor, textColor, fontStyle, fontSize });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Background Color</label>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Text Color</label>
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Font Style</label>
        <select
          value={fontStyle}
          onChange={(e) => setFontStyle(e.target.value)}
          className="form-control"
        >
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
        </select>
      </div>

      <div className="form-group">
        <label>Font Size (px) </label>
        <input
          type="number"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          className="form-control"
          min="1"
        />
      </div>

      <button type="submit" className="btn btn-primary mt-3">
        Apply Style
      </button>
    </form>
  );
};

export default StyleForm;
