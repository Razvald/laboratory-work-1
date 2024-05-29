import React from 'react';

const Temperature = ({ t }) => {
  const style = {
    color: t >= 0 ? 'red' : 'blue'
  };

  return (
    <div style={style}>
      {t}°C
    </div>
  );
};

export default Temperature;
