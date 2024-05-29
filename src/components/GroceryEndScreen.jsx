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
  const submitAnswer = useStore(({ gameSlice }) => gameSlice.submitAnswer);
  const getState = useStore(({ gameSlice }) => gameSlice.getState);
  useEffect(() => {
    getState(roomID);
  });
  const gameInfo = useStore(({ gameSlice }) => gameSlice.current);
  console.log('in game end screen', gameInfo);

  const [roomDeleted, setRoomDeleted] = useState(false);
  if (gameInfo?.status === 'OPEN') {
    navigate(`/room/${roomID}/1`, {
      state: { playerName, isAdmin },
    });
  }
  if (roomDeleted) {
    navigate('/');
  }
  const changeGameStatus = useStore(
    ({ gameSlice }) => gameSlice.changeGameStatus,
  );
  const onResetClick = async () => {
    await changeGameStatus(roomID, 'OPEN');
  };
  const onDeleteClick = async () => {
    await changeGameStatus(roomID, 'QUIT');
    setRoomDeleted(true);
  };
  const adminButtons = () => {
    <div className="endscreen-buttons">
      <button type="button" onClick={onResetClick}>Restart</button>
      <button type="button" onClick={onDeleteClick}>Delete</button>
    </div>;
  };

  return (
    <div className="grocery-game-endscreen">
      {gameInfo.players.map((name, rank) => (
        <p>
          {name} : {rank}
        </p>
      ))}
      {isAdmin && adminButtons()}
    </div>
  );
}

export default GroceryEndScreen;
