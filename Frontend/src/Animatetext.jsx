import React, { useEffect, useState } from 'react';

const TypingAnimation = ({ texts, speed }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const currentText = texts[textIndex];

    if (charIndex < currentText.length) {
      const typingInterval = setInterval(() => {
        setDisplayedText(prevText => prevText + currentText[charIndex]);
        setCharIndex(charIndex + 1);
      }, speed);

      return () => {
        clearInterval(typingInterval);
      };
    } else {
      // Animation for the current text is complete
      setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setTextIndex((textIndex + 1) % texts.length); // Loop through texts
      }, 2000); // Wait for 1 second before moving to the next text
    }
  }, [charIndex, textIndex, texts, speed]);

  return <div style={{ fontSize: '24px', textAlign: 'center' }}>{displayedText}</div>;
};

export default function Animatetext() {
  const textArray = ["I assist You Through out your learning", "Another text to type", "One more example text"];
  return (
    <div>
      <TypingAnimation texts={textArray} speed={100} />
    </div>
  );
}
