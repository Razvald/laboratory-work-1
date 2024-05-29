import React, { useState, useEffect } from 'react';

const Revert = ({ s }) => {
  const [str, setStr] = useState(s);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStr(prevStr => prevStr.slice(-1) + prevStr.slice(0, -1));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{str}</div>;
};

export default Revert;
