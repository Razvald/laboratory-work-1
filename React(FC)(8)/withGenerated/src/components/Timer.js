import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{count}</div>;
}

export default Timer;
