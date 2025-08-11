import React, { useState, useEffect } from "react";
import "../App.css"; // keep your CSS

function TypingEffect() {
  const texts = [
    "Welcome to StarX",
    "Innovating the Future",
    "Join the Revolution",
    "Empowering Developers",
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const speed = isDeleting ? 50 : 200;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (charIndex < currentText.length) {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // pause before deleting
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting backwards
        if (charIndex > 0) {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return <h1 className="typing-text">{displayText}<span className="cursor">|</span></h1>;
}

export default TypingEffect;
