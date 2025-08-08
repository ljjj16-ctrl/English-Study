import React, { useState } from 'react';

function App() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [translation, setTranslation] = useState('');

  const handleSearch = async () => {
    // 英文释义
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await res.json();
      const meaning = data[0]?.meanings[0]?.definitions[0]?.definition || 'No definition found';
      setDefinition(meaning);
    } catch (error) {
      setDefinition('Error fetching definition.');
    }

    // 中文翻译
    try {
      const res = await fetch('https://libretranslate.de/translate', {
        method: 'POST',
        body: JSON.stringify({
          q: word,
          source: 'en',
          target: 'zh',
          format: 'text',
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      setTranslation(data.translatedText);
    } catch (error) {
      setTranslation('Error fetching translation.');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>单词查询系统</h1>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="输入英文单词"
      />
      <button onClick={handleSearch}>查询</button>

      {definition && (
        <div>
          <h2>英文解释：</h2>
          <p>{definition}</p>
        </div>
      )}

      {translation && (
        <div>
          <h2>中文翻译：</h2>
          <p>{translation}</p>
        </div>
      )}
    </div>
  );
}

export default App;
