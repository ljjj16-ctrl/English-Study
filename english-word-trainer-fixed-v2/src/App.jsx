
import React from 'react';
import './App.css';

const words = [
  { word: 'abandon', meaning: 'to give up completely' },
  { word: 'keen', meaning: 'sharp or eager' },
  { word: 'benevolent', meaning: 'well meaning and kindly' },
];

function App() {
  return (
    <div className="app">
      <h1>📘 English Word Trainer</h1>
      <ul>
        {words.map((item, index) => (
          <li key={index}>
            <strong>{item.word}</strong>: {item.meaning}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
