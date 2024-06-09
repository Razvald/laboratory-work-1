import React, { useState, useEffect } from 'react';

function TrafficLight() {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['red', 'yellow', 'green'];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {colors.map((color, index) => (
        <div
          key={color}
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: colorIndex === index ? color : 'gray',
            borderRadius: '50%',
            margin: '10px',
          }}
        ></div>
      ))}
    </div>
  );
}

export default TrafficLight;
