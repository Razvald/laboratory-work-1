import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count > 0) {
      const timerId = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [count]);

  return <div>Countdown: {count}</div>;
};

export default CountdownTimer;
