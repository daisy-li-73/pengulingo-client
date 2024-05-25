import React, { useState, useEffect } from 'react';
import NavLink from 'react-router-dom';

function LoadingScreen() {
    const [language, setLanguage] = useState('French');

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    }

    return (
        <div>
            <div class="header-container">
                <div class="logo-container">
                    <NavLink to="/"><img src="images/pengulingo.png" alt="logo"></img></NavLink>
                </div>
                <div class="log-in-container">
                    <NavLink to="/"><img src="images/log-in.png" alt="log-in"></img></NavLink>
                </div>
            </div>
            <div class="image-container">
                <div class="pengu-container">
                    <img src="images/pengu-loading-screen.png" class="pengu"></img>
                    <div class="balloons">
                        <img src="images/balloon-green.png" class="balloon-green"></img>
                        <img src="images/balloon-pink.png" class="balloon-pink"></img>
                        <img src="images/balloon-yellow.png" class="balloon-yellow"></img>
                        <img src="images/balloon-red.png" class="balloon-red"></img>
                    </div>
                </div>
            </div>
            <div class="globe-container">
                <img src="images/globe.png" alt="globe"></img>
            </div>
            <div class="join-game">
                <NavLink to="/join"><img src="images/join-game.png" alt="Join Game" class="join-game-img" /></NavLink>
                <NavLink to="/join"><img src="images/join-game-hover.png" alt="Join Hover" class="join-game-hover" /></NavLink>
            </div>
            <div class="host-game">
                <NavLink to="/host"><img src="images/host-game.png" alt="Host Game" class="host-game-img" /></NavLink>
                <NavLink to="/host"><img src="images/host-game-hover.png" alt="Host Hover" class="host-game-hover" /></NavLink>
            </div>
            <div class="text">
                <img src="images/display-text.png" alt="display-text"></img>
            </div>
            <div class="language-selector">
                <button className={language === 'French' ? 'selected' : ''} onClick={() => handleLanguageChange('French')}><img src="images/French.png" alt="French" /></button>
                <button className={language === 'Chinese' ? 'selected' : ''} onClick={() => handleLanguageChange('Chinese')}><img src="images/Chinese.png" alt="Chinese" /></button>
                <button className={language === 'Italian' ? 'selected' : ''} onClick={() => handleLanguageChange('Italian')}><img src="images/Italian.png" alt="Italian" /></button>
                <button className={language === 'Spanish' ? 'selected' : ''} onClick={() => handleLanguageChange('Spanish')}><img src="images/Spanish.png" alt="Spanish" /></button>
            </div>
        </div>
    )
}

export default LoadingScreen;
