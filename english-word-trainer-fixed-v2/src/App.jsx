// App.jsx
import React, { useState, useEffect } from "react";
import WordSearch from "./components/WordSearch";
import FlashcardList from "./components/FlashcardList";
import Quiz from "./components/Quiz";

export default function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [quizWords, setQuizWords] = useState([]);

  const addToFlashcards = (word) => {
    setFlashcards((prev) => {
      if (!prev.find((w) => w.word === word.word)) {
        return [...prev, word];
      }
      return prev;
    });
  };

  const startQuiz = () => {
    const shuffled = [...flashcards].sort(() => 0.5 - Math.random());
    setQuizWords(shuffled.slice(0, 5));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4">英语学习助手</h1>
      <WordSearch onAdd={addToFlashcards} />
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">我的生词卡</h2>
        <FlashcardList flashcards={flashcards} />
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">词汇测验</h2>
        <button onClick={startQuiz} className="bg-blue-500 text-white px-4 py-2 rounded">
          开始测验
        </button>
        <Quiz quizWords={quizWords} />
      </div>
    </div>
  );
}
