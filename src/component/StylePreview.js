import React from 'react';

const StyledPreview = ({ style }) => {
  return (
    <div
      style={{
        backgroundColor: style.backgroundColor,
        color: style.textColor,
        fontFamily: style.fontStyle,
        fontSize: `${style.fontSize}px`,
        padding: '20px',
        textAlign: 'center',
        marginTop: '20px',
      }}
    >
      This is a preview text!
    </div>
  );
};

export default StyledPreview;
