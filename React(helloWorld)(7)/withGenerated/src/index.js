import React from 'react';
import ReactDOM from 'react-dom';
import Square from './components/Square';
import OnlyEven from './components/OnlyEven';
import Temperature from './components/Temperature';
import ToggleBackground from './components/ToggleBackground';

function App() {
  return (
    <div>
      <h1>React Tasks</h1>
      <h2>Square Component</h2>
      <Square n={3} />
      <h2>OnlyEven Component</h2>
      <OnlyEven arr={[14, 5, 6, 12, 21, 2]} />
      <h2>Temperature Component</h2>
      <Temperature t={451} />
      <h2>ToggleBackground Component</h2>
      <ToggleBackground />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
