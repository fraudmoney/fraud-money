import React, { useState } from 'react';

interface InteractiveMysteryBoxProps {
  onActivate?: () => void;
  content?: string;
  size?: 'small' | 'medium' | 'large';
  title?: string;
}

const defaultFraudMessages = [
  "why did the bitcoin cross the blockchain? to get to the other fraud!",
  "breaking: local man discovers all money is made up, more at never because its all fraud",
  "step 1: create coin. step 2: tell people its revolutionary. step 3: profit. step 4: rug pull. mario style!",
  "doctor: you have acute fraud syndrome. patient: is that bad? doctor: no its actually pretty good fraud",
  "what do you call a honest cryptocurrency? a contradiction in terms like jumbo shrimp or honest politician",
  "knock knock. whos there? your portfolio. your portfolio who? exactly you forgot because it worthless now",
  "how many crypto bros does it take to change a lightbulb? none they just hold it and wait for the world to revolve around them",
  "i told my wife i invested in fraud money. she said at least youre honest about losing our savings",
  "why dont crypto scammers ever retire? because they always need just one more rug pull for the road",
  "what did mario say when he found out about cryptocurrency? mama mia thats a lot of fraud coins!",
  "crypto bro: this time its different. narrator: it was not different",
  "my portfolio is like mario lives. started with 3 now im at zero",
  "bought the dip 47 times. turns out it was the mariana trench of dips",
  "hodl stands for hold on for dear life. also hold on for dear liquidity",
  "to the moon they said. turns out moon was made of swiss cheese and full of holes",
  "diamond hands more like cubic zirconia hands fake shiny but worthless",
  "not financial advice just emotional damage advice",
  "when lambo? when you stop asking when lambo thats when",
  "i dont always lose money but when i do its in the most creative way possible",
  "red candles make me see red. green candles make me see things that arent there",
  "bear market turned me into actual bear. now i hibernate until bull run",
  "my seed phrase is tattooed on my heart. too bad my heart is broken",
  "whale watching is fun until the whale splashes and drowns your portfolio",
  "decentralized finance centralized all my money into someone elses pocket",
  "smart contracts are like mario pipes. you go in with money come out confused",
  "gas fees so high i need a second mortgage to send 5 dollars",
  "staking rewards are like bowser promises. looks good until you realize its a trap",
  "paper hands vs diamond hands. i got tissue paper hands dissolve instantly",
  "chart analysis is just astrology for men who think they understand math",
  "bought high sold low. its not much but its honest work",
  "my trading strategy is advanced. i call it the kamikaze method",
  "crypto is just mario kart but instead of banana peels you slip on your own greed",
  "yield farming more like yield burning. my crops always catch fire somehow",
  "liquidity pools are like swimming pools. looks fun until you realize its full of sharks",
  "defi summer turned into defi nuclear winter. now we all glow in the dark",
  "nfts are like mario question blocks. you pay money and get disappointed",
  "satoshi nakamoto is like princess peach. probably doesnt exist but we keep believing",
  "blockchain technology is amazing. too bad nobody uses it for anything useful",
  "crypto twitter is like bowser castle. full of traps and everyone trying to kill you",
  "web3 is just web2 but with extra steps and more ways to lose money",
  "dao stands for definitely always oligarchy. democracy sold separately",
  "the only thing that moons harder than my coins is my therapy bills",
  "im not addicted to crypto trading. i can quit anytime the market opens",
  "my risk tolerance is like mario invincibility star. temporary and dangerous",
  "cold storage is like ice level in mario. everything moves slower including profits",
  "hot wallet more like lava level. everything burns including your portfolio",
  "consensus mechanism is just democracy but for people who hate democracy",
  "proof of work more like proof of how hard it is to make money honestly",
  "proof of stake more like proof you got steaks while others got ramen noodles",
  "layer 2 solutions are like mario warp zones. skip the hard part lose money faster",
  "cross chain bridges are like rainbow road in mario kart. beautiful but you gonna fall off",
  "validator nodes are like toads telling you princess in another castle. always disappointing",
  "flash loans are like star power. temporary invincibility followed by spectacular failure",
  "wrapped tokens are like wrapped presents. exciting until you open them",
  "governance tokens let you vote on how to lose money democratically. very progressive",
  "tokenomics is just economics but with more token and less sense",
  "utility tokens have utility like koopa shells have transportation value",
  "meme coins are honest about being memes. everything else lying about being serious"
];

const InteractiveMysteryBox: React.FC<InteractiveMysteryBoxProps> = ({ 
  onActivate, 
  content,
  size = 'medium',
  title = 'MYSTERY'
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [message, setMessage] = useState('');

  const sizeClasses = {
    small: 'w-32 h-40',
    medium: 'w-48 h-64',
    large: 'w-56 h-72'
  };

  const handleClick = () => {
    if (!isFlipped) {
      const displayMessage = content || defaultFraudMessages[Math.floor(Math.random() * defaultFraudMessages.length)];
      setMessage(displayMessage);
      setIsFlipped(true);
      
      if (onActivate) {
        onActivate();
      }
    } else {
      setIsFlipped(false);
      setMessage('');
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <div 
        className={`
          flip-card cursor-pointer transition-all duration-300 hover:scale-105
          ${sizeClasses[size]}
        `}
        onClick={handleClick}
        style={{ perspective: '1000px' }}
      >
        <div 
          className={`
            flip-card-inner w-full h-full relative transition-transform duration-700
            ${isFlipped ? 'rotate-y-180' : ''}
          `}
          style={{
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Front Face */}
          <div 
            className="flip-card-face flip-card-front absolute w-full h-full"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(0deg)'
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-700 border-4 border-amber-800 rounded-lg flex flex-col items-center justify-center shadow-lg">
              <div className="text-4xl mb-2">?</div>
              <div className="text-white font-mario text-xs text-center px-2">{title}</div>
            </div>
          </div>

          {/* Back Face */}
          <div 
            className="flip-card-face flip-card-back absolute w-full h-full"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="w-full h-full bg-white border-4 border-gray-300 rounded-lg flex flex-col items-center justify-center shadow-lg p-4">
              <div className="text-black font-mario text-xs text-center leading-relaxed">
                {message}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-white font-mario text-xs mt-2 text-center">{title}</p>
    </div>
  );
};

export default InteractiveMysteryBox;