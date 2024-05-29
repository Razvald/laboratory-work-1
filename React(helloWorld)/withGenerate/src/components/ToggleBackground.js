import React, { useState } from 'react';

const ToggleBackground = () => {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  const style = {
    backgroundColor: isRed ? 'red' : 'green',
    width: '100px',
    height: '100px'
  };

  return (
    <div style={style} onClick={toggleColor}>
      Click me
    </div>
  );
};

export default ToggleBackground;
