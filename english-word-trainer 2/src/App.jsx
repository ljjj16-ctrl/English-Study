import React, { useState, useEffect } from 'react';
import './App.css';

const words = [
  { word: 'abandon', meaning: 'to leave completely and finally' },
  { word: 'benevolent', meaning: 'well meaning and kindly' },
  { word: 'candid', meaning: 'truthful and straightforward' },
  { word: 'diligent', meaning: 'showing care in doing one's work' },
  { word: 'eloquent', meaning: 'fluent or persuasive in speaking or writing' }
];

function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const today = new Date().toDateString();
    const idx = today.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0) % words.length;
    setIndex(idx);
  }, []);

  const { word, meaning } = words[index];

  return (
    <div className="card">
      <h1>{word}</h1>
      <p>{meaning}</p>
    </div>
  );
}

export default App;