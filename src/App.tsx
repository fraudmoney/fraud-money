import React from 'react';
import GoldCoinsBackground from './components/GoldCoinsBackground';
import MainContent from './components/MainContent';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <GoldCoinsBackground />
      <div className="relative z-10">
        <MainContent />
        <SocialLinks />
        <Footer />
      </div>
    </div>
  );
}

export default App;