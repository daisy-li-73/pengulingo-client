/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react';
import bluepengu from '../../img/bluepengu.png';
import redpengu from '../../img/redpengu.png';
import yellowpengu from '../../img/yellowpengu.png';
import greenpengu from '../../img/greenpengu.png';
import racebar from '../../img/racebar.png';

const penguIconOrder = [redpengu, bluepengu, yellowpengu, greenpengu];
const barColorOrder = ['#DE1E11', '#11A1DE', '#DADE11', '#11DE32'];
const playerColors = ['Red', 'Blue', 'Yellow', 'Green'];

function ProgressBar(props) {
  const playerProgress = props.playerProgress || [0, 3, 3, 5];
  const renderPlayerIcons = () => {
    return playerProgress.map((progress, playerNumber) => (
      <img
        src={penguIconOrder[playerNumber]}
        className="pengu-icon"
        style={{
          right: `${playerProgress[playerNumber] * 18 + playerNumber}%`,
        }}
      />
    ));
  };

  return (
    <div className="progress-container">
      <div className="pengu-racing-icons"> {renderPlayerIcons()}</div>
      <img src={racebar} className="progress-bar" alt="Progress Bar" />
    </div>
  );
}

export default ProgressBar;
