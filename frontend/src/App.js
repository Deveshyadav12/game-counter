import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [bonusPoints, setBonusPoints] = useState(0);
  const [prizesWon, setPrizesWon] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/user').then(response => {
      setCounter(response.data.counter);
      setBonusPoints(response.data.bonusPoints);
      setPrizesWon(response.data.prizesWon);
    });
  }, []);

  const handleClick = () => {
    axios.post('http://localhost:5000/update').then(response => {
      setCounter(response.data.counter);
      setBonusPoints(response.data.bonusPoints);
      setPrizesWon(response.data.prizesWon);
      setMessage(response.data.message);
    });
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Counter: {counter}</h1>
      <h2>Bonus Points: {bonusPoints}</h2>
      <h2>Prizes Won: {prizesWon}</h2>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '20px' }}>Click Me</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;
