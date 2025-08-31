import React, { useEffect, useState } from 'react';

interface LetterState {
  char: string;
  type: 'normal' | 'gold' | 'mystery';
}

interface LetterGlitchTextProps {
  text: string;
  className?: string;
}

const LetterGlitchText: React.FC<LetterGlitchTextProps> = ({ text, className = '' }) => {
  const [letterStates, setLetterStates] = useState<LetterState[]>([]);

  useEffect(() => {
    const letters = text.split('');
    const initialStates = letters.map(char => ({
      char,
      type: 'normal' as const
    }));
    setLetterStates(initialStates);

    const glitchInterval = setInterval(() => {
      setLetterStates(prevStates => 
        prevStates.map((letterState, index) => {
          const char = text[index]; // Always use the original character
          if (char === ' ') return { char: ' ', type: 'normal' };
          
          const rand = Math.random();
          if (rand < 0.02) {
            return { char: '?', type: 'mystery' }; // 2% chance mystery box
          } else if (rand < 0.06) {
            return { char, type: 'gold' }; // 4% chance gold letter
          } else {
            return { char, type: 'normal' }; // 94% chance normal letter
          }
        })
      );
    }, 400); // Slower interval for better readability

    return () => clearInterval(glitchInterval);
  }, [text]);

  return (
    <span className={className}>
      {letterStates.map((letterState, index) => {
        return (
          <span
            key={index}
            className={`
              inline-block transition-all duration-300
              ${letterState.type === 'mystery' ? 'mystery-letter' : ''}
              ${letterState.type === 'gold' ? 'gold-letter' : ''}
              ${letterState.type === 'normal' ? 'normal-letter' : ''}
            `}
            style={{
              animationDelay: `${index * 50}ms`
            }}
          >
            {letterState.char}
          </span>
        );
      })}
    </span>
  );
};

export default LetterGlitchText;