import React, { useState, useEffect } from 'react';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

const PrimeNumbers = () => {
  const [primes, setPrimes] = useState([]);
  const [lastPrime, setLastPrime] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let nextPrime = lastPrime + 1;
      while (!isPrime(nextPrime)) {
        nextPrime++;
      }
      setPrimes(prevPrimes => [...prevPrimes, nextPrime]);
      setLastPrime(nextPrime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [lastPrime]);

  return <div>Prime Numbers: {primes.join(', ')}</div>;
};

export default PrimeNumbers;
