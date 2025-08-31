import React from 'react';

const GoldCoinsBackground: React.FC = () => {
  return (
    <>
      {/* Background Coins */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`bg-coin-${i}`}
            className="absolute coin-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            <div className="mario-coin">
              <div className="coin-inner">$</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Foreground Coins */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`fg-coin-${i}`}
            className="absolute coin-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 6}s`,
            }}
          >
            <div className="mario-coin mario-coin-front">
              <div className="coin-inner">$</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GoldCoinsBackground;