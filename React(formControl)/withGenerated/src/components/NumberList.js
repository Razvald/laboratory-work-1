import React, { useState } from 'react';

function NumberList() {
  const [inputValue, setInputValue] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNumber = () => {
    if (inputValue !== '') {
      setNumbers([...numbers, inputValue]);
      setInputValue('');
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredNumbers =
    filter === 'even'
      ? numbers.filter((number) => parseInt(number) % 2 === 0)
      : filter === 'odd'
      ? numbers.filter((number) => parseInt(number) % 2 !== 0)
      : numbers;

  return (
    <div>
      <input type="number" value={inputValue} onChange={handleChange} />
      <button onClick={handleAddNumber}>+</button>
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">Все</option>
        <option value="even">Четные</option>
        <option value="odd">Нечетные</option>
      </select>
      <ul>
        {filteredNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default NumberList;
