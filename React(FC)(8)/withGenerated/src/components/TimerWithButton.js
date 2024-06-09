import React, { useState, useEffect } from 'react';

function TimerWithButton() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevState) => !prevState);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleStartStop}>{isRunning ? '⏸️' : '▶️'}</button>
    </div>
  );
}

export default TimerWithButton;
