import React from 'react';
import ReactDOM from 'react-dom';
import SelectCity from './components/SelectCity';
import Calculator from './components/Calculator';
import NumberSystemsCalculator from './components/NumberSystemsCalculator';
import BirthdayTimer from './components/BirthdayTimer';
import NumberList from './components/NumberList';

function App() {
  return (
    <div>
      <h1>React Forms & Validation Lab</h1>
      <SelectCity />
      <Calculator />
      <NumberSystemsCalculator />
      <BirthdayTimer />
      <NumberList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
