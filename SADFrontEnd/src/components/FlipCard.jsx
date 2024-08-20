import React, { useState, useEffect } from 'react';
import Wrapper from '../assets/styles/FlipCard';

const motivationalQuotes = [
  "🌟 Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs",
  "🚀 The only way to do great work is to love what you do. - Steve Jobs",
  "⏰ Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "🌈 Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "⏳ Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  // ... add more quotes as needed
];

const SwapEmoji = ({ onClick }) => {
  const handleSwapClick = () => {
    onClick();
  };

  return (
    <div className="swap-emoji" onClick={handleSwapClick}>
      🔄
    </div>
  );
};

const FlipCard = () => {
  const [motivationalQuote, setMotivationalQuote] = useState('');

  useEffect(() => {
    // Select a random motivational quote on initial render
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    setMotivationalQuote(motivationalQuotes[randomIndex]);
  }, []);

  const [isChanging, setIsChanging] = useState(false);

  const handleCardClick = () => {
    // Select a new random motivational quote when the card is clicked (flipped back)
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    setMotivationalQuote(motivationalQuotes[randomIndex]);
    setIsChanging(true);
  };

  return (
    <Wrapper>
      <div className="flip-card" onClick={handleCardClick}>
        <div className="flip-card-inner">
          {/* Front of the card with information */}
          <div className="flip-card-front">
            <h1><b>Hey, keep yourself motivated :</b></h1>
            <p className='cursor'>Bring cursor here to  !</p>
          </div>

          {/* Back of the card with an image and motivational quote */}
          <div className="flip-card-back">
            <SwapEmoji onClick={() => setIsChanging(true)} />
            <div className="motivational-quote">
              <h4><b>{motivationalQuote}</b></h4>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FlipCard;
