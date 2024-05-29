/* eslint-disable linebreak-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
import React from 'react';

const ProgressBar = ({ playerProgress }) => {
  const renderPlayerIcons = () => {
    const players = ['Blue', 'Red', 'Yellow', 'Green'];

    return players.map((color, index) => (
      <img
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        src={`images/${color}PenguIcon.png`}
        className={`pengu-icon ${color.toLowerCase()}-pengu`}
        style={{ right: `${playerProgress[index] * 20}%` }} // Assuming each player moves 20% of the bar width for each unit of progress
        alt={`${color} Pengu`}
      />
    ));
  };

  return (
    <div className="progress-container">
      {renderPlayerIcons()}
      <img src="images/Bar.png" className="progress-bar" alt="Progress Bar" />
    </div>
  );
};

export default ProgressBar;
