/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTopBar from '../PageTopBar';
import backgroundimg from './choose-game-images/background.png';
import gogogroceriesselected from './choose-game-images/Go-Groceries-Selected.png';
import directionsunselected from './choose-game-images/Directions-Unselected.png';
import orderlychaosunselected from './choose-game-images/Orderly-Chaos-Unselected.png';
import backbutton from '../../img/backbutton.png';
import redplayer from './choose-game-images/red-player.png';
import yellowplayer from './choose-game-images/yellow-player.png';
import blueplayer from './choose-game-images/blue-player.png';
import greenplayer from './choose-game-images/green-player.png';
import penguhappy from './choose-game-images/Pengu Happy.png';
import selectgame from './choose-game-images/select-game.png';
import groceriesdescription from './choose-game-images/groceries-description.png';

function ChooseGame() {
  const [activeGame, setActiveGame] = useState(null);
  const navigate = useNavigate();

  const handleGameSelect = (game) => {
    setActiveGame(game);
    console.log(game);
  };

  return (
    <div className="choose-game">
      <PageTopBar />
      <div className="background-choose-game">
        <div className="games">
          <img
            src={gogogroceriesselected}
            className="game-image"
            onClick={() => handleGameSelect('Go-Groceries')}
          />
          <img
            src={directionsunselected}
            className="game-image"
            id="unavail"
            onClick={() => handleGameSelect('Directions')}
          />
          <img
            src={orderlychaosunselected}
            className="game-image"
            id="unavail"
            onClick={() => handleGameSelect('Orderly-Chaos')}
          />
        </div>
        <div className="players">
          <img src={redplayer} className="red-player" />
          <img src={blueplayer} className="blue-player" />
          <img src={yellowplayer} className="yellow-player" />
          <img src={greenplayer} className="green-player" />
        </div>
        <img src={penguhappy} className="pengu-img" />
        <img src={selectgame} className="select-game" />
        <img src={groceriesdescription} className="groceries-description" />

        <button
          type="button"
          className="back-button"
          onClick={() => {
            navigate('/');
          }}
        >
          <img src={backbutton} alt="back loading icon" />
        </button>
      </div>
    </div>
  );
}

export default ChooseGame;
