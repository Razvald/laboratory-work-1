import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState('red');
  const colors = ['red', 'yellow', 'green'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor(prevColor => {
        const currentIndex = colors.indexOf(prevColor);
        return colors[(currentIndex + 1) % colors.length];
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: color === 'red' ? 'red' : 'gray', width: 50, height: 50, borderRadius: '50%', margin: '10px' }}></div>
      <div style={{ backgroundColor: color === 'yellow' ? 'yellow' : 'gray', width: 50, height: 50, borderRadius: '50%', margin: '10px' }}></div>
      <div style={{ backgroundColor: color === 'green' ? 'green' : 'gray', width: 50, height: 50, borderRadius: '50%', margin: '10px' }}></div>
    </div>
  );
};

export default TrafficLight;
