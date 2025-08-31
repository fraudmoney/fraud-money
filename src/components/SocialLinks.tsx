import React from 'react';

const SocialLinks: React.FC = () => {
  return (
    <div className="container mx-auto px-8 py-12 max-w-6xl">
      <div className="flex justify-center space-x-8">
        <a 
          href="https://x.com/fraudmoneyonx" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-mario text-white text-sm px-6 py-3 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors"
        >
          TWITTER @fraudmoneyonx
        </a>
        <a 
          href="https://github.com/fraudmoney/fraud-money" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-mario text-white text-sm px-6 py-3 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors"
        >
          GITHUB @fraudmoney
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;