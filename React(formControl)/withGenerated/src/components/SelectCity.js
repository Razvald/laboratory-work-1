import React, { useState } from 'react';

function SelectCity() {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="">Выберите город</option>
        <option value="Rio">Рио-де-Жанейро</option>
        <option value="Other">Другой город</option>
      </select>
      {selectedCity !== 'Rio' && <div>Нет, это не Рио-де-Жанейро!</div>}
    </div>
  );
}

export default SelectCity;
