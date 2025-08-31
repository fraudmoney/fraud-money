import React from 'react';
import LetterGlitchText from './LetterGlitchText';
import InteractiveMysteryBox from './InteractiveMysteryBox';

const MainContent: React.FC = () => {
  const spawnExtraCoins = () => {
    // Create temporary coins that fall
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const coin = document.createElement('div');
        coin.className = 'fixed coin-fall z-50 pointer-events-none';
        coin.style.left = `${Math.random() * 100}%`;
        coin.style.animationDuration = '3s';
        coin.innerHTML = '<div class="mario-coin mario-coin-front"><div class="coin-inner">$</div></div>';
        
        document.body.appendChild(coin);
        
        // Remove after animation
        setTimeout(() => {
          if (coin.parentNode) {
            coin.parentNode.removeChild(coin);
          }
        }, 3000);
      }, i * 200);
    }
  };

  return (
    <main className="relative z-10">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center max-w-4xl mx-auto">
          <LetterGlitchText 
            text="FRAUD MONEY" 
            className="text-4xl md:text-6xl lg:text-7xl font-mario text-white mb-6"
          />
          <p className="text-base md:text-lg font-mario text-white mb-8">
            the meme coin that keeps it real about being fake
          </p>
          
          <div className="flex justify-center space-x-4">
            <a 
              href="https://github.com/fraudmoney/fraud-money"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mario text-white text-xs md:text-sm px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black transition-colors border-2 border-yellow-600"
            >
              GITHUB REPO
            </a>
            <button className="font-mario text-white text-xs md:text-sm px-6 py-3 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors">
              JOIN THE FRAUD
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl md:text-2xl font-mario text-white mb-8 text-left">
                  <LetterGlitchText text="WHAT IS FRAUD MONEY" />
                </h2>
                <div className="text-white font-mario text-xs md:text-sm leading-relaxed text-left space-y-6">
                  <p>listen up. every coin out there is basically fraud dressed up in fancy words. bitcoin ethereum dogecoin they all just made up money that people decided has value like mario coins.</p>
                  
                  <p>but here the thing we honest about it. fraud money dont lie to you. we tell you straight up that this whole thing is one big game where numbers go up and down like mario jumping on platforms.</p>
                  
                  <p>you give us your dollars which are also fraud money btw and we give you fraud coins. maybe they worth more later maybe they worth nothing. nobody knows and anybody who says they do is lying.</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl md:text-2xl font-mario text-white mb-8 text-right">
                  <LetterGlitchText text="WHY FRAUD THO" />
                </h2>
                <div className="text-white font-mario text-xs md:text-sm leading-relaxed text-right space-y-6">
                  <p>because money is all fraud anyway. your bank account just numbers on a computer. cash paper with old dead guys pictures. gold shiny rocks that mario collects.</p>
                  
                  <p>we just cutting out the middle man and being straight with you about it like mario going straight to bowser castle instead of pretending the princess aint gonna get kidnapped again.</p>
                  
                  <p>plus mario coins are way cooler than boring old dollars and they make that satisfying ding sound when you collect them.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-8 border-t border-yellow-600">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-mario text-white mb-12 text-center">
            <LetterGlitchText text="THE FRAUD ECONOMY" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center bg-gray-900 bg-opacity-50 p-6 md:p-8 rounded-lg border border-yellow-600">
              <h3 className="text-sm md:text-lg font-mario text-white mb-4">GET FRAUD MONEY</h3>
              <p className="text-white font-mario text-xs leading-relaxed">you got dollars fraud money from government like coins from question blocks</p>
            </div>
            <div className="text-center bg-gray-900 bg-opacity-50 p-6 md:p-8 rounded-lg border border-yellow-600">
              <h3 className="text-sm md:text-lg font-mario text-white mb-4">TRADE FRAUD</h3>
              <p className="text-white font-mario text-xs leading-relaxed">you trade fraud money for different fraud money our fraud money like trading coins for power ups</p>
            </div>
            <div className="text-center bg-gray-900 bg-opacity-50 p-6 md:p-8 rounded-lg border border-yellow-600">
              <h3 className="text-sm md:text-lg font-mario text-white mb-4">GO CRAZY</h3>
              <p className="text-white font-mario text-xs leading-relaxed">numbers go crazy like mario on star power you either win or game over but you had fun playing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-8 border-t border-yellow-600">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl md:text-2xl font-mario text-white mb-8 text-left">THE FRAUD FAMILY</h2>
                <div className="text-white font-mario text-xs md:text-sm leading-relaxed text-left space-y-6 bg-gray-900 bg-opacity-30 p-6 rounded-lg border border-yellow-600">
                  <p>when you buy fraud money you joining a family of people who understand that this whole thing is just a big game like super mario bros where we all trying to collect coins and avoid getting hit by goombas.</p>
                  
                  <p>we dont take ourselves too serious. we just here to have fun make some memes and maybe collect some coins while we jumping around the blockchain.</p>
                  
                  <p>no toxic culture. no cult vibes. just honest fraud people doing honest fraud things together.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl md:text-2xl font-mario text-white mb-8 text-right">FRAUD TECH</h2>
                <div className="text-white font-mario text-xs md:text-sm leading-relaxed text-right space-y-6 bg-gray-900 bg-opacity-30 p-6 rounded-lg border border-yellow-600">
                  <p>built on blockchain technology which is also fraud but fancy fraud that works somehow like how mario pipes transport you magically to different worlds.</p>
                  
                  <p>smart contracts that are actually pretty dumb but they do what they supposed to do like goombas walking straight into walls but at least they consistent about it.</p>
                  
                  <p>totally decentralized which means nobody really in charge like how the mushroom kingdom somehow runs itself while mario off jumping on turtles all day.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Mystery Section */}
      <section className="py-20 px-8 border-t border-yellow-600">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-mario text-white mb-12 text-center">
            <LetterGlitchText text="CLICK THE FRAUD BOXES" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-yellow-600">
              <InteractiveMysteryBox 
                size="medium"
                title="CRYPTO JOKES"
                onActivate={spawnExtraCoins}
              />
            </div>
            <div className="text-center bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-yellow-600">
              <InteractiveMysteryBox 
                size="medium"
                title="FRAUD NEWS"
                onActivate={spawnExtraCoins}
              />
            </div>
            <div className="text-center bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-yellow-600">
              <InteractiveMysteryBox 
                size="medium"
                title="FRAUD GUIDE"
                onActivate={spawnExtraCoins}
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-white font-mario text-xs opacity-75">
              click the fraud cards for wisdom and extra coins
            </p>
          </div>
        </div>
      </section>

      {/* Enemy Types Section */}
      <section className="py-20 px-8 border-t border-yellow-600">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-mario text-white mb-12 text-center">
            <LetterGlitchText text="FRAUD ENEMIES IN THE WILD" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-yellow-600">
              <div className="text-center mb-4">
                <div className="w-16 h-12 mx-auto bg-gradient-to-b from-amber-600 to-amber-800 border-4 border-amber-900 rounded-full flex items-center justify-center">
                  <span className="text-black font-mario text-xs">GOOMBA</span>
                </div>
              </div>
              <h3 className="text-sm font-mario text-white mb-4 text-center">PAPER HANDS GOOMBA</h3>
              <p className="text-white font-mario text-xs leading-relaxed text-center">walks straight into your portfolio and sells everything at the first sign of a dip just like goombas walk straight into mario</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-yellow-600">
              <div className="text-center mb-4">
                <div className="w-16 h-14 mx-auto bg-gradient-to-b from-green-600 to-green-800 border-4 border-green-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-mario text-xs">KOOPA</span>
                </div>
              </div>
              <h3 className="text-sm font-mario text-white mb-4 text-center">SHELL GAME KOOPA</h3>
              <p className="text-white font-mario text-xs leading-relaxed text-center">hides inside its shell when market crashes then comes back out to rug pull you when you least expect it</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-yellow-600">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-b from-red-600 to-red-800 border-4 border-red-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-mario text-xs">BOWSER</span>
                </div>
              </div>
              <h3 className="text-sm font-mario text-white mb-4 text-center">RUG PULL BOWSER</h3>
              <p className="text-white font-mario text-xs leading-relaxed text-center">the big bad boss who kidnaps your money and holds it hostage in another castle that doesnt exist</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-yellow-600">
              <div className="text-center mb-4">
                <div className="w-16 h-8 mx-auto bg-gradient-to-r from-gray-600 to-gray-800 border-4 border-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-mario text-xs">PIRANHA</span>
                </div>
              </div>
              <h3 className="text-sm font-mario text-white mb-4 text-center">WHALE PIRANHA PLANT</h3>
              <p className="text-white font-mario text-xs leading-relaxed text-center">big whale that eats all the small fish in the fraud pond and controls the market like piranha plants control the pipes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Princess Rescue Mission Section */}
      <section className="py-20 px-8 border-t border-yellow-600">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-mario text-white mb-12 text-center">
            <LetterGlitchText text="THE PRINCESS RESCUE MISSION" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-yellow-600">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-b from-pink-500 to-pink-700 border-4 border-pink-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-mario text-xs">PEACH</span>
                </div>
              </div>
              <h3 className="text-sm font-mario text-white mb-4 text-center">PRINCESS PORTFOLIO</h3>
              <p className="text-white font-mario text-xs leading-relaxed text-center">your portfolio is like princess peach always getting kidnapped by market crashes and you gotta rescue it from bowsers castle but its never really safe</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-yellow-600">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-b from-gray-600 to-gray-800 border-4 border-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-mario text-xs">CASTLE</span>
                </div>
              </div>
              <h3 className="text-sm font-mario text-white mb-4 text-center">WRONG CASTLE SYNDROME</h3>
              <p className="text-white font-mario text-xs leading-relaxed text-center">you think you found the right investment but toad tells you your gains are in another castle and you gotta start the whole journey over again</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-yellow-600">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-b from-yellow-500 to-yellow-700 border-4 border-yellow-800 rounded-full flex items-center justify-center">
                  <span className="text-black font-mario text-xs">CAKE</span>
                </div>
              </div>
              <h3 className="text-sm font-mario text-white mb-4 text-center">THE CAKE REWARD</h3>
              <p className="text-white font-mario text-xs leading-relaxed text-center">after jumping through hoops and fighting enemies you finally rescue your portfolio and peach bakes you a cake that tastes like financial regret</p>
            </div>
          </div>
        </div>
      </section>

      {/* Level Completion Section */}
      <section className="py-20 px-8 border-t border-yellow-600">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-mario text-white mb-12 text-center">
            <LetterGlitchText text="LEVEL COMPLETION REWARDS" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-yellow-600">
              <div className="text-center mb-6">
                <div className="w-24 h-16 mx-auto bg-yellow-500 border-4 border-yellow-700 rounded-lg flex items-center justify-center">
                  <span className="text-black font-mario text-sm">FLAG</span>
                </div>
              </div>
              <h3 className="text-lg font-mario text-white mb-6 text-center">LEVEL COMPLETE</h3>
              <div className="text-white font-mario text-xs leading-relaxed space-y-4">
                <p>when mario reaches the flag pole he gets points based on how high he grabbed it. when you reach profit you get dopamine based on how high the number go.</p>
                
                <p>mario victory music plays when level complete. your victory music is the sound of your phone buzzing with portfolio notifications that you too scared to check.</p>
                
                <p>mario moves to next level automatically. you gotta manually click buy on the next shitcoin because you never learn from previous levels.</p>
              </div>
              <div className="mt-6 text-center">
                <div className="inline-block bg-yellow-500 px-4 py-2 rounded border-2 border-yellow-700">
                  <span className="text-black font-mario text-xs">FRAUD POINTS: 69,420</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-yellow-600">
              <div className="text-center mb-6">
                <div className="w-24 h-16 mx-auto bg-red-600 border-4 border-red-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-mario text-sm">GAME OVER</span>
                </div>
              </div>
              <h3 className="text-lg font-mario text-white mb-6 text-center">GAME OVER SCREEN</h3>
              <div className="text-white font-mario text-xs leading-relaxed space-y-4">
                <p>mario game over screen gives you option to continue or quit. crypto game over screen just shows your portfolio balance approaching zero with no continue option.</p>
                
                <p>mario can use extra lives to keep playing. you can use credit cards to keep trading but thats just borrowing lives from future you who gonna be very angry.</p>
                
                <p>mario learns from mistakes and gets better at avoiding goombas. crypto traders just find new and creative ways to walk into the same financial goombas over and over.</p>
              </div>
              <div className="mt-6 text-center">
                <div className="inline-block bg-red-600 px-4 py-2 rounded border-2 border-red-800">
                  <span className="text-white font-mario text-xs">CONTINUE? 9... 8... 7...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Power-ups Section */}
      <section className="py-20 px-8 border-t border-yellow-600">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-mario text-white mb-12 text-center">
            <LetterGlitchText text="FRAUD POWER-UPS" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-yellow-600">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-600 border-4 border-red-800 rounded flex items-center justify-center">
                <span className="text-white font-mario text-xs">1UP</span>
              </div>
              <h3 className="text-sm font-mario text-white mb-4">EXTRA LIFE</h3>
              <p className="text-white font-mario text-xs leading-relaxed">when you lose all your money in a rug pull you get one extra chance to lose it again just like mario</p>
            </div>
            <div className="text-center bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-yellow-600">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 border-4 border-yellow-700 rounded flex items-center justify-center">
                <span className="text-black font-mario text-xs">STAR</span>
              </div>
              <h3 className="text-sm font-mario text-white mb-4">INVINCIBILITY</h3>
              <p className="text-white font-mario text-xs leading-relaxed">makes you think you cant lose money for exactly 10 seconds then reality hits harder than a goomba</p>
            </div>
            <div className="text-center bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-yellow-600">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-600 border-4 border-green-800 rounded flex items-center justify-center">
                <span className="text-white font-mario text-xs">FIRE</span>
              </div>
              <h3 className="text-sm font-mario text-white mb-4">FIRE FLOWER</h3>
              <p className="text-white font-mario text-xs leading-relaxed">lets you throw fireballs at other peoples portfolios while yours also burns down its mutual destruction</p>
            </div>
            <div className="text-center bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-yellow-600">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 border-4 border-blue-800 rounded flex items-center justify-center">
                <span className="text-white font-mario text-xs">ICE</span>
              </div>
              <h3 className="text-sm font-mario text-white mb-4">ICE FLOWER</h3>
              <p className="text-white font-mario text-xs leading-relaxed">freezes the market so nobody can sell while you quietly dump your bags like bowser in an ice level</p>
            </div>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-20 px-8 border-t border-yellow-600">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-mario text-white mb-12 text-center">
            <LetterGlitchText text="FRAUD WORLDS MAP" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-yellow-600">
              <div className="text-center mb-4">
                <div className="w-12 h-12 mx-auto bg-green-600 border-4 border-green-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-mario text-xs">1-1</span>
                </div>
              </div>
              <h3 className="text-sm font-mario text-white mb-4 text-center">NOOB HILLS</h3>
              <p className="text-white font-mario text-xs leading-relaxed text-center">easy level where you learn basic fraud techniques like buying high and selling low</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-yellow-600">
              <div className="text-center mb-4">
                <div className="w-12 h-12 mx-auto bg-blue-600 border-4 border-blue-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-mario text-xs">2-1</span>
                </div>
              </div>
              <h3 className="text-sm font-mario text-white mb-4 text-center">UNDERWATER DEPTHS</h3>
              <p className="text-white font-mario text-xs leading-relaxed text-center">where your portfolio goes to drown and you learn to hold your breath while watching numbers sink</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-yellow-600">
              <div className="text-center mb-4">
                <div className="w-12 h-12 mx-auto bg-orange-600 border-4 border-orange-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-mario text-xs">3-1</span>
                </div>
              </div>
              <h3 className="text-sm font-mario text-white mb-4 text-center">LAVA CASTLE</h3>
              <p className="text-white font-mario text-xs leading-relaxed text-center">advanced fraud level where everything burns including your savings and your relationships</p>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-yellow-600">
              <div className="text-center mb-4">
                <div className="w-12 h-12 mx-auto bg-purple-600 border-4 border-purple-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-mario text-xs">8-4</span>
                </div>
              </div>
              <h3 className="text-sm font-mario text-white mb-4 text-center">BOWSER CASTLE</h3>
              <p className="text-white font-mario text-xs leading-relaxed text-center">final boss level where you face the ultimate fraud the traditional banking system</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lives and Coins Section */}
      <section className="py-20 px-8 border-t border-yellow-600">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl md:text-2xl font-mario text-white mb-8 text-left">
                  <LetterGlitchText text="LIVES SYSTEM" />
                </h2>
                <div className="text-white font-mario text-xs md:text-sm leading-relaxed text-left space-y-6">
                  <p>in mario you start with 3 lives. in fraud money you start with your entire life savings which is basically the same thing but more stressful.</p>
                  
                  <p>when mario touches a goomba he loses a life. when you touch a shitcoin you lose your shirt. same energy different consequences.</p>
                  
                  <p>game over screen in mario says try again. game over screen in crypto just shows your wife filing divorce papers.</p>
                  
                  <div className="flex items-center space-x-4 mt-6">
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-red-600 border-2 border-red-800 rounded-full flex items-center justify-center">
                        <span className="text-white font-mario text-xs">♥</span>
                      </div>
                      <div className="w-8 h-8 bg-red-600 border-2 border-red-800 rounded-full flex items-center justify-center">
                        <span className="text-white font-mario text-xs">♥</span>
                      </div>
                      <div className="w-8 h-8 bg-gray-600 border-2 border-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-gray-400 font-mario text-xs">♥</span>
                      </div>
                    </div>
                    <span className="text-white font-mario text-xs">2 LIVES REMAINING</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl md:text-2xl font-mario text-white mb-8 text-right">
                  <LetterGlitchText text="COIN ECONOMY" />
                </h2>
                <div className="text-white font-mario text-xs md:text-sm leading-relaxed text-right space-y-6">
                  <p>mario collects coins to get extra lives. you collect fraud coins to get extra cries when they become worthless overnight.</p>
                  
                  <p>every 100 coins mario gets a 1up. every 100 fraud coins you get one step closer to understanding that numbers on screen dont equal real value.</p>
                  
                  <p>but hey at least fraud coins make that satisfying ding sound when you collect them just like mario coins except the ding is your bank account notifications.</p>
                  
                  <div className="flex justify-end items-center space-x-4 mt-6">
                    <span className="text-white font-mario text-xs">FRAUD SCORE: 999,999</span>
                    <div className="flex space-x-1">
                      <div className="mario-coin">
                        <div className="coin-inner">$</div>
                      </div>
                      <div className="mario-coin">
                        <div className="coin-inner">$</div>
                      </div>
                      <div className="mario-coin">
                        <div className="coin-inner">$</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipe Warp Zone Section */}
      <section className="py-20 px-8 border-t border-yellow-600">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-mario text-white mb-12 text-center">
            <LetterGlitchText text="WARP ZONE TO DIFFERENT FRAUDS" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-yellow-600">
              <div className="w-20 h-32 mx-auto mb-6 bg-green-600 border-4 border-green-800 rounded-t-full flex items-end justify-center pb-4">
                <span className="text-white font-mario text-xs">DEFI</span>
              </div>
              <h3 className="text-sm font-mario text-white mb-4">PIPE TO DEFI WORLD</h3>
              <p className="text-white font-mario text-xs leading-relaxed">jump down this pipe to enter decentralized finance where you can lose money in more creative ways than traditional finance ever imagined</p>
            </div>
            <div className="text-center bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-yellow-600">
              <div className="w-20 h-32 mx-auto mb-6 bg-blue-600 border-4 border-blue-800 rounded-t-full flex items-end justify-center pb-4">
                <span className="text-white font-mario text-xs">NFT</span>
              </div>
              <h3 className="text-sm font-mario text-white mb-4">PIPE TO NFT WORLD</h3>
              <p className="text-white font-mario text-xs leading-relaxed">transport to the non-fungible dimension where you pay thousands for pictures of apes like paying for mario paintings in peach castle</p>
            </div>
            <div className="text-center bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-yellow-600">
              <div className="w-20 h-32 mx-auto mb-6 bg-purple-600 border-4 border-purple-800 rounded-t-full flex items-end justify-center pb-4">
                <span className="text-white font-mario text-xs">DAO</span>
              </div>
              <h3 className="text-sm font-mario text-white mb-4">PIPE TO DAO WORLD</h3>
              <p className="text-white font-mario text-xs leading-relaxed">enter the governance realm where everyone votes on how to lose money democratically like mushroom kingdom parliament but more chaotic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Boss Battle Section */}
      <section className="py-20 px-8 border-t border-yellow-600">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-mario text-white mb-12 text-center">
            <LetterGlitchText text="FINAL BOSS BATTLE" />
          </h2>
          <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-yellow-600">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-center mb-8">
                  <div className="w-32 h-24 mx-auto bg-gradient-to-b from-gray-700 to-gray-900 border-4 border-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-500 font-mario text-sm">BANK</span>
                  </div>
                  <p className="text-white font-mario text-xs mt-4">TRADITIONAL FINANCE BOSS</p>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-lg font-mario text-white text-center lg:text-left">VS THE BIG BAD BANK</h3>
                <div className="text-white font-mario text-xs leading-relaxed space-y-4">
                  <p>the final boss of fraud money is traditional banking system. its been running the fraud game for centuries way before crypto was even a twinkle in satoshis eye.</p>
                  
                  <p>banks charge you money to hold your money then lend your money to other people for more money while telling you money has no intrinsic value. ultimate fraud boss level stuff.</p>
                  
                  <p>but just like bowser in every mario game the bank boss always comes back stronger in the sequel. you beat credit cards they invent student loans. you beat mortgages they invent crypto lending.</p>
                  
                  <p>fraud money at least honest about being fraud. banks wear suits and pretend they helping you while pickpocketing your future like goombas in business attire.</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center space-x-2 bg-red-600 px-4 py-2 rounded border-2 border-red-800">
                    <span className="text-white font-mario text-xs">BOSS HP:</span>
                    <div className="flex space-x-1">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-red-400 border border-red-600"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Castle Section */}
      <section className="py-20 px-8 border-t border-yellow-600">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center bg-gray-900 bg-opacity-50 p-12 rounded-lg border border-yellow-600">
            <div className="mb-8">
              <div className="w-64 h-48 mx-auto relative">
                {/* Castle Base */}
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-gray-600 to-gray-800 border-4 border-gray-700">
                  {/* Castle Towers */}
                  <div className="absolute -top-6 left-4 w-12 h-20 bg-gradient-to-b from-gray-500 to-gray-700 border-3 border-gray-600">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 border-2 border-red-800"></div>
                  </div>
                  <div className="absolute -top-6 right-4 w-12 h-20 bg-gradient-to-b from-gray-500 to-gray-700 border-3 border-gray-600">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 border-2 border-red-800"></div>
                  </div>
                  
                  {/* Main Tower */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-28 bg-gradient-to-b from-gray-500 to-gray-700 border-4 border-gray-600">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 border-2 border-red-800"></div>
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-black border-2 border-gray-400"></div>
                  </div>
                  
                  {/* Castle Gate */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-black border-3 border-yellow-600 rounded-t-lg flex items-center justify-center">
                    <span className="text-yellow-500 font-mario text-sm">FRAUD</span>
                  </div>
                  
                  {/* Windows */}
                  <div className="absolute top-8 left-8 w-4 h-4 bg-black border-2 border-gray-400"></div>
                  <div className="absolute top-8 right-8 w-4 h-4 bg-black border-2 border-gray-400"></div>
                </div>
                
                {/* Flag */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 translate-x-8">
                  <div className="w-1 h-16 bg-yellow-600 border border-yellow-700"></div>
                  <div className="absolute top-0 left-1 w-12 h-8 bg-red-600 border-2 border-red-800 flex items-center justify-center">
                    <span className="text-black font-mario text-xs">FRAUD</span>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-mario text-white mb-8">
              <LetterGlitchText text="WELCOME TO FRAUD CASTLE" />
            </h2>
            <p className="text-white font-mario text-sm leading-relaxed max-w-3xl mx-auto">
              thank you mario but your princess is in another castle. and your money is in another wallet. and your wallet is in another dimension. but hey at least you had fun jumping on turtles and collecting worthless digital coins along the way.
            </p>
          </div>
        </div>
      </section>

      {/* Final Truth Section */}
      <section className="py-20 px-8 border-t border-yellow-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-mario text-white mb-12">
            <LetterGlitchText text="MESSAGE FROM THE DEV" />
          </h2>
          <div className="text-white font-mario text-xs md:text-sm leading-relaxed space-y-6 bg-gray-900 bg-opacity-30 p-8 rounded-lg border border-yellow-600">
            <p>yo its me the dev. i made this whole thing while procrastinating on my real job. took me like 3 weeks and 47 energy drinks.</p>
            
            <p>everyone keeps asking why i called it fraud money. because at least im honest about it being fraud unlike every other coin that pretends to cure cancer or whatever.</p>
            
            <p>mario theme happened because crypto trading is basically just jumping on platforms trying not to fall into lava pits. seemed obvious.</p>
            
            <p className="text-yellow-400 text-base font-bold">anyway hope you have fun losing money responsibly. at least you cant say i didnt warn you.</p>
          </div>
        </div>
      </section>

      {/* Final Truth Section */}
      <section className="py-20 px-8 border-t border-yellow-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-mario text-white mb-12">
            <LetterGlitchText text="THE TRUTH ABOUT FRAUD" />
          </h2>
          <div className="text-white font-mario text-xs md:text-sm leading-relaxed space-y-8 bg-gray-900 bg-opacity-30 p-8 rounded-lg border border-yellow-600">
            <p>look we not gonna lie to you and say this coin gonna make you millionaire. maybe it will maybe it wont. thats the fraud game for you.</p>
            
            <p>what we can promise is that you gonna have fun meet some cool fraud people and at least you wont feel tricked when things go weird because you knew this was all fraudulent from the start.</p>
            
            <p className="text-yellow-400 text-base font-bold">welcome to the fraud family. lets make some fraud magic happen.</p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default MainContent;