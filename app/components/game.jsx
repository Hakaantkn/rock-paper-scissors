'use client';
import { useState, useEffect } from 'react';

export const Game = () => {
  const [secim, setSecim] = useState('');
  const [hasWinner, setHasWinner] = useState('');
  const [result, setResult] = useState('');
  const choices = ['taş', 'kağıt', 'makas'];

  const makeRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    setResult(choices[randomIndex]);
  };

  useEffect(() => {
    if (secim) {
      determineWinner();
    }
  }, [secim]);

  const determineWinner = () => {
    if (
      (secim === 'taş' && result === 'taş') ||
      (secim === 'kağıt' && result === 'kağıt') ||
      (secim === 'makas' && result === 'makas')
    ) {
      setHasWinner('berabere');
    } else if (
      (secim === 'taş' && result === 'makas') ||
      (secim === 'kağıt' && result === 'taş') ||
      (secim === 'makas' && result === 'kağıt')
    ) {
      setHasWinner('kazandın');
    } else {
      setHasWinner('kaybettin');
    }
  };

  const handleSecim = (chocie) => {
    setSecim(chocie);
    makeRandomChoice();
  };
  console.log(result);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginTop: '100px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {choices.map((buton) => (
          <button
            key={buton}
            style={{
              width: '80px',
              height: '40px',
              border: '2px inset gray',
              borderRadius: '8px',
            }}
            onClick={() => handleSecim(buton)}
          >
            {buton}
          </button>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30px',
          border: '2px inset white',
          borderRadius: '10px',
          width: '300px',
          height: '250px',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <span style={{ fontSize: '20px', color: 'green' }}>
          kullanıcı:{secim}
        </span>
        <span>----------------------------------------</span>
        <span style={{ fontSize: '20px', color: 'red' }}>sistem: {result}</span>
        <span>----------------------------------------</span>
        <span>{hasWinner}</span>
      </div>
    </div>
  );
};