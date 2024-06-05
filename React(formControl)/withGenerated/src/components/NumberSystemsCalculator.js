import React, { useState } from 'react';

function NumberSystemsCalculator() {
  const [number, setNumber] = useState('');
  const [system, setSystem] = useState('10');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSystemChange = (e) => {
    setSystem(e.target.value);
  };

  const convertNumber = () => {
    setResult(parseInt(number, system).toString());
  };

  return (
    <div>
      <input type="text" value={number} onChange={handleChange} />
      <select value={system} onChange={handleSystemChange}>
        <option value="10">10</option>
        <option value="2">2</option>
        <option value="8">8</option>
        <option value="16">16</option>
      </select>
      <button onClick={convertNumber}>Convert</button>
      {result !== '' && <div>{`Converted number: ${result}`}</div>}
    </div>
  );
}

export default NumberSystemsCalculator;
