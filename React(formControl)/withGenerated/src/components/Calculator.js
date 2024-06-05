import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  const handleNumChange = (e, num) => {
    if (num === 1) setNum1(e.target.value);
    else if (num === 2) setNum2(e.target.value);
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const handleCalculate = () => {
    if (num1 !== '' && num2 !== '') {
      switch (operation) {
        case '+':
          setResult(Number(num1) + Number(num2));
          break;
        case '-':
          setResult(Number(num1) - Number(num2));
          break;
        case '*':
          setResult(Number(num1) * Number(num2));
          break;
        case '/':
          setResult(Number(num1) / Number(num2));
          break;
        default:
          setResult('');
      }
    }
  };

  return (
    <div>
      <input type="number" value={num1} onChange={(e) => handleNumChange(e, 1)} />
      <select value={operation} onChange={handleOperationChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={num2} onChange={(e) => handleNumChange(e, 2)} />
      <button onClick={handleCalculate}>=</button>
      {result !== '' && <div>{`${num1} ${operation} ${num2} = ${result}`}</div>}
    </div>
  );
}

export default Calculator;
