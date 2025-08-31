import React, { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [glitchId] = useState(`glitch-${Math.random().toString(36).substring(7)}`);
  
  useEffect(() => {
    const style = document.createElement('style');
    const intensity = Math.random() * 0.3 + 0.1;
    
    style.textContent = `
      .${glitchId} {
        position: relative;
        display: inline-block;
      }
      
      .${glitchId}::before,
      .${glitchId}::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
      }
      
      .${glitchId}::before {
        color: #ffd700;
        transform: translate(${Math.random() * 2 - 1}px, ${Math.random() * 2 - 1}px);
        opacity: ${intensity};
      }
      
      .${glitchId}::after {
        color: #ffdf00;
        transform: translate(${Math.random() * 3 - 1.5}px, ${Math.random() * 3 - 1.5}px);
        opacity: ${intensity * 0.7};
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [glitchId]);
  
  return (
    <span 
      className={`${glitchId} ${className}`}
      data-text={text}
    >
      {text}
    </span>
  );
};

export default GlitchText;