/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable indent */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PageTopBar from '../PageTopBar';

function ChooseGame() {
    const [activeGame, setActiveGame] = useState(null);

    const handleGameSelect = (game) => {
        setActiveGame(game);
    };

    return (
      <div className="choose-game">
        <PageTopBar />
        <div className="background-choose-game">
          <img src="src/components/choose-game/choose-game-images/background.png" className="background-img" />
          <img src="src/components/choose-game/choose-game-images/Pink-Background.png" className="Pink-Background" />
        </div>
        <div className="games">
          <img src="src/components/choose-game/choose-game-images/Go-Groceries-Selected.png" className={`game-image ${activeGame === 'Go-Groceries' ? 'active' : ''}`} onClick={() => handleGameSelect('Go-Groceries')} />
          <img src="src/components/choose-game/choose-game-images/Directions-Unselected.png" className={`game-image ${activeGame === 'Go-Groceries' ? 'active' : ''}`} onClick={() => handleGameSelect('Directions')} />
          <img src="src/components/choose-game/choose-game-images/Orderly-Chaos-Unselected.png" className={`game-image ${activeGame === 'Go-Groceries' ? 'active' : ''}`} onClick={() => handleGameSelect('Orderly-Chaos')} />
        </div>
        <div className="players">
          <img src="src/components/choose-game/choose-game-images/red-player.png" className="red-player" />
          <img src="src/components/choose-game/choose-game-images/blue-player.png" className="blue-player" />
          <img src="src/components/choose-game/choose-game-images/yellow-player.png" className="yellow-player" />
          <img src="src/components/choose-game/choose-game-images/green-player.png" className="green-player" />
        </div>
        <div className="pengu">
          <img src="src/components/choose-game/choose-game-images/Pengu Happy.png" className="pengu-img" />
        </div>
        <img src="src/components/choose-game/choose-game-images/select-game.png" className="select-game" />
        <img src="src/components/choose-game/choose-game-images/groceries-description.png" className="groceries-description" />

        <NavLink to="/creategame"><img src="src/components/choose-game/choose-game-images/Group 49.png" alt="Back" className="back-button" /></NavLink>

      </div>
    );
}

export default ChooseGame;
