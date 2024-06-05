import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './components/Timer';
import TimerWithButton from './components/TimerWithButton';
import PrimeNumbers from './components/PrimeNumbers';
import TrafficLight from './components/TrafficLight';
import Revert from './components/Revert';

function App() {
  return (
    <div>
      <h1>React Lab 10</h1>
      <Timer />
      <TimerWithButton />
      <PrimeNumbers />
      <TrafficLight />
      <Revert s="привет!" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
