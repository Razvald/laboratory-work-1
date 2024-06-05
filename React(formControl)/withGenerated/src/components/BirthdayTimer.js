import React, { useState, useEffect } from 'react';

function BirthdayTimer() {
  const [birthDate, setBirthDate] = useState('');
  const [secondsAlive, setSecondsAlive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (birthDate !== '') {
        const birthTimestamp = new Date(birthDate).getTime();
        const currentTimestamp = new Date().getTime();
        const seconds = Math.floor((currentTimestamp - birthTimestamp) / 1000);
        setSecondsAlive(seconds);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [birthDate]);

  const handleChange = (e) => {
    setBirthDate(e.target.value);
  };
  return (
    <div>
      <input type="text" placeholder="ДД.ММ.ГГГГ" value={birthDate} onChange={handleChange} />
      <div>{`Вы прожили: ${secondsAlive} секунд.`}</div>
    </div>
  );
}

export default BirthdayTimer;
