/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PageTopBar from '../PageTopBar';
import penguLoadingScreen from './images/pengu-loading-screen.png';
import balloonGreen from './images/balloon-green.png';
import balloonPink from './images/balloon-pink.png';
import balloonYellow from './images/balloon-yellow.png';
import balloonRed from './images/balloon-red.png';
import globe from './images/globe.png';
import joingamepng from './images/join-game.png';
import joingamehoverpng from './images/join-game-hover.png';
import hostgamepng from './images/host-game.png';
import hostgamehoverpng from './images/host-game-hover.png';
import displaytextpng from './images/display-text.png';
import french from './images/French.png';
import chinese from './images/Chinese.png';
import italian from './images/Italian.png';
import spanish from './images/Spanish.png';

function LandingScreen() {
  const [language, setLanguage] = useState('French');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className="landing-page">
      <PageTopBar />
      <div className="image-container">
        <div className="pengu-container">
          <img src={penguLoadingScreen} className="pengu" />
          <div className="balloons">
            <img src={balloonGreen} className="balloon-green" />
            <img src={balloonPink} className="balloon-pink" />
            <img src={balloonYellow} className="balloon-yellow" />
            <img src={balloonRed} className="balloon-red" />
          </div>
        </div>
      </div>
      <div className="globe-container">
        <img src={globe} alt="globe" />
      </div>
      <div className="join-game">
        <NavLink to="/joingame"><img src={joingamepng} alt="Join Game" className="join-game-img" /></NavLink>
        <NavLink to="/joingame"><img src={joingamehoverpng} alt="Join Hover" className="join-game-hover" /></NavLink>
      </div>
      <div className="host-game">
        <NavLink to="/creategame"><img src={hostgamepng} alt="Host Game" className="host-game-img" /></NavLink>
        <NavLink to="/creategame"><img src={hostgamehoverpng} alt="Host Hover" className="host-game-hover" /></NavLink>
      </div>
      <div className="text">
        <img src={displaytextpng} alt="display-text" />
      </div>
      <div className="language-selector">
        <button className={language === 'French' ? 'selected' : ''} onClick={() => handleLanguageChange('French')}><img src={french} alt="French" /></button>
        <button className={language === 'Chinese' ? 'selected' : ''} onClick={() => handleLanguageChange('Chinese')}><img src={chinese} alt="Chinese" /></button>
        <button className={language === 'Italian' ? 'selected' : ''} onClick={() => handleLanguageChange('Italian')}><img src={italian} alt="Italian" /></button>
        <button className={language === 'Spanish' ? 'selected' : ''} onClick={() => handleLanguageChange('Spanish')}><img src={spanish} alt="Spanish" /></button>
      </div>
    </div>
  );
}

export default LandingScreen;
