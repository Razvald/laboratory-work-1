import React, { useState, useEffect } from 'react';

const InfinityTimer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (isRunning) {
      timerId = setInterval(() => setCount(prevCount => prevCount + 1), 1000);
    }
    return () => clearInterval(timerId);
  }, [isRunning]);

  return (
    <div>
      <div>Timer: {count}</div>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : '▶'}
      </button>
    </div>
  );
};

export default InfinityTimer;
