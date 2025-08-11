import React, { useState, useEffect } from 'react';
import './Typing.css';

export default function Typing() {
  const paragraphs = [
    "Once upon a time in a quiet village, there lived a curious boy who loved exploring the forests nearby. Every morning, he would wander off with a small backpack, filled with snacks and a notebook, ready to jot down anything new he discovered. His favorite spot was by the river, where he would watch the water flow and imagine stories about the creatures living beneath the surface.",
    
    "In the world of technology, change is the only constant. New programming languages, frameworks, and tools are created every year, making it important for developers to adapt quickly. While it can feel overwhelming at times, this constant evolution also opens doors to endless possibilities for innovation and creativity.",
    
    "Traveling teaches you more about life than any book ever could. Meeting people from different cultures, tasting unique cuisines, and hearing stories passed down for generations changes the way you see the world. The memories created during these journeys stay with you forever, shaping your perspective and inspiring your dreams."
  ];

  const [paragraph, setParagraph] = useState("");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  const getRandomParagraph = () => {
    let newParagraph;
    do {
      newParagraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    } while (newParagraph === paragraph); 
    return newParagraph;
  };

  useEffect(() => {
    setParagraph(getRandomParagraph());
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;

    if (startTime === null) {
      setStartTime(Date.now());
    }

    setUserInput(value);

    let correctChars = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] === paragraph[i]) {
        correctChars++;
      }
    }
    setAccuracy(((correctChars / value.length) * 100).toFixed(1));

    const timeElapsed = (Date.now() - startTime) / 1000 / 60;
    const wordsTyped = value.trim().split(/\s+/).length;
    if (timeElapsed > 0) {
      setWpm(Math.round(wordsTyped / timeElapsed));
    }

    if (value === paragraph) {
      setUserInput("");
      setStartTime(null);
      setWpm(0);
      setAccuracy(100);
      setParagraph(getRandomParagraph());
    }
  };

  const renderParagraph = () => {
    return paragraph.split("").map((char, index) => {
      let color;
      if (index < userInput.length) {
        color = char === userInput[index] ? "#4caf50" : "#ff4d4d"; 
      } else {
        color = "#bbb";
      }
      return (
        <span key={index} style={{ color }}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="typing-container">
      <h1 className="title">Typing Speed Test</h1>

      <div className="sentence-box">{renderParagraph()}</div>

      <textarea
        value={userInput}
        onChange={handleChange}
        placeholder="Start typing here..."
        className="typing-input"
      />

      <div className="stats">
        <div className="stat-card">
          <span className="stat-value">{wpm}</span>
          <span className="stat-label">WPM</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{isNaN(accuracy) ? 100 : accuracy}%</span>
          <span className="stat-label">Accuracy</span>
        </div>
      </div>
    </div>
  );
}
