/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PageTopBar from '../PageTopBar';
import './styles2.css';

function LandingScreen() {
  const [language, setLanguage] = useState('French');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div>
      <PageTopBar />
      <div className="image-container">
        <div className="pengu-container">
          <img src="src/components/landing-page/images/pengu-loading-screen.png" className="pengu" />
          <div className="balloons">
            <img src="src/components/landing-page/images/balloon-green.png" className="balloon-green" />
            <img src="src/components/landing-page/images/balloon-pink.png" className="balloon-pink" />
            <img src="src/components/landing-page/images/balloon-yellow.png" className="balloon-yellow" />
            <img src="src/components/landing-page/images/balloon-red.png" className="balloon-red" />
          </div>
        </div>
      </div>
      <div className="globe-container">
        <img src="src/components/landing-page/images/globe.png" alt="globe" />
      </div>
      <div className="join-game">
        <NavLink to="/joingame"><img src="src/components/landing-page/images/join-game.png" alt="Join Game" className="join-game-img" /></NavLink>
        <NavLink to="/joingame"><img src="src/components/landing-page/images/join-game-hover.png" alt="Join Hover" className="join-game-hover" /></NavLink>
      </div>
      <div className="host-game">
        <NavLink to="/creategame"><img src="src/components/landing-page/images/host-game.png" alt="Host Game" className="host-game-img" /></NavLink>
        <NavLink to="/creategame"><img src="src/components/landing-page/images/host-game-hover.png" alt="Host Hover" className="host-game-hover" /></NavLink>
      </div>
      <div className="text">
        <img src="src/components/landing-page/images/display-text.png" alt="display-text" />
      </div>
      <div className="language-selector">
        <button className={language === 'French' ? 'selected' : ''} onClick={() => handleLanguageChange('French')}><img src="src/components/landing-page/images/French.png" alt="French" /></button>
        <button className={language === 'Chinese' ? 'selected' : ''} onClick={() => handleLanguageChange('Chinese')}><img src="src/components/landing-page/images/Chinese.png" alt="Chinese" /></button>
        <button className={language === 'Italian' ? 'selected' : ''} onClick={() => handleLanguageChange('Italian')}><img src="src/components/landing-page/images/Italian.png" alt="Italian" /></button>
        <button className={language === 'Spanish' ? 'selected' : ''} onClick={() => handleLanguageChange('Spanish')}><img src="src/components/landing-page/images/Spanish.png" alt="Spanish" /></button>
      </div>
    </div>
  );
}

export default LandingScreen;
