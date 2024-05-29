import React from 'react';
import Square from './components/Square';
import OnlyEven from './components/OnlyEven';
import Temperature from './components/Temperature';
import ToggleBackground from './components/ToggleBackground';

const App = () => {
  return (
    <div>
      <h1>Lab 9 - React Components</h1>
      <h2>Task 1: Square of a number</h2>
      <Square n={3} />
      
      <h2>Task 2: Only Even Numbers</h2>
      <OnlyEven arr={[14, 5, 6, 12, 21, 2]} />
      
      <h2>Task 3: Temperature Display</h2>
      <Temperature t={451} />
      <Temperature t={-5} />
      
      <h2>Task 4: Toggle Background Color</h2>
      <ToggleBackground />
    </div>
  );
};

export default App;
