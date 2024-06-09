import React, { useState, useEffect } from 'react';

function PrimeNumbers() {
  const [primes, setPrimes] = useState([]);

  useEffect(() => {
    const isPrime = (num) => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    };

    const interval = setInterval(() => {
      let nextPrime = primes.length === 0 ? 2 : primes[primes.length - 1] + 1;
      while (!isPrime(nextPrime)) {
        nextPrime++;
      }
      setPrimes((prevPrimes) => [...prevPrimes, nextPrime]);
    }, 1000);

    return () => clearInterval(interval);
  }, [primes]);

  return <div>{primes.join(', ')}</div>;
}

export default PrimeNumbers;
