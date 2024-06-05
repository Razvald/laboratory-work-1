import React, { useState } from 'react';

const ToggleBackground = () => {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  const style = {
    backgroundColor: isRed ? 'red' : 'green',
    height: '10vh',
    width: '10vh'
  };

  return (
    <div style={style}>
      <button onClick={toggleColor}>Toggle Background</button>
    </div>
  );
};

export default ToggleBackground;
