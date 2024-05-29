/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import useStore from '../store';

function GroceryEndScreen() {
  const { roomID } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { playerName, isAdmin } = location.state || {
    playerName: '',
    isAdmin: false,
  };
  console.log('reached end screen:', playerName, isAdmin);
  const getState = useStore(({ gameSlice }) => gameSlice.getState);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getState(roomID);
    }, 1000);
    return () => clearTimeout(timeoutId);
  });
  const gameInfo = useStore(({ gameSlice }) => gameSlice.current);
  console.log('in game end screen', gameInfo);
  if (!gameInfo) {
    navigate('/');
  } // double check that this works
  if (gameInfo?.status === 'OPEN') {
    navigate(`/room/${roomID}/1`, {
      state: { playerName, isAdmin },
    });
  }
  const changeGameStatus = useStore(
    ({ gameSlice }) => gameSlice.changeGameStatus,
  );
  const onResetClick = async () => {
    await changeGameStatus(roomID, { status: 'OPEN' });
  }; // if is open, reset ranks on backend
  const onDeleteClick = async () => {
    await changeGameStatus(roomID, { status: 'QUIT' });
    navigate('/');
  };
  const adminButtons = () => {
    return (
      <div className="endscreen-buttons">
        <button type="button" onClick={onResetClick}>
          Restart
        </button>
        <button type="button" onClick={onDeleteClick}>
          Delete
        </button>
      </div>
    );
  };

  return (
    <div className="grocery-game-endscreen">
      {gameInfo.ranking.map((name, rank) => (
        <p>
          {name} : {rank}
        </p>
      ))}
      {isAdmin && adminButtons()}
    </div>
  );
}

export default GroceryEndScreen;
