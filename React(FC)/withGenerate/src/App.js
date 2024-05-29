import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import InfinityTimer from './components/InfinityTimer';
import PrimeNumbers from './components/PrimeNumbers';
import TrafficLight from './components/TrafficLight';
import Revert from './components/Revert';

const App = () => {
  return (
    <div>
      <h1>Lab 10 - React Hooks</h1>
      
      <h2>Task 1: Countdown Timer</h2>
      <CountdownTimer />
      
      <h2>Task 2: Infinity Timer</h2>
      <InfinityTimer />
      
      <h2>Task 3: Prime Numbers</h2>
      <PrimeNumbers />
      
      <h2>Task 4: Traffic Light</h2>
      <TrafficLight />
      
      <h2>Task 5: Revert String</h2>
      <Revert s="привет!" />
    </div>
  );
};

export default App;
