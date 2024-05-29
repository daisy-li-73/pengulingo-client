/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import useStore from '../store';
import PageTopBar from './PageTopBar';
// import images
import replayicon from '../img/replayicon.png';
import exiticon from '../img/exiticon.png';
import spotlight from '../img/spotlight.png';
import crown from '../img/winnercrown.png';
import first from '../img/1st.png';
import second from '../img/2nd.png';
import third from '../img/3rd.png';
import fourth from '../img/4th.png';
import bluepengu from '../img/bluepengu.png';
import redpengu from '../img/redpengu.png';
import yellowpengu from '../img/yellowpengu.png';
import greenpengu from '../img/greenpengu.png';

const rankingNumberOrder = [first, second, third, fourth];
const penguIconOrder = [redpengu, bluepengu, yellowpengu, greenpengu];
const barColorOrder = ['#DE1E11', '#11A1DE', '#DADE11', '#11DE32'];

function GroceryEndScreen() {
  const { roomID } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { playerName, isAdmin } = location.state || {
    playerName: '',
    isAdmin: false,
  };
  console.log('reached end screen:', playerName, isAdmin, roomID);
  const getState = useStore(({ gameSlice }) => gameSlice.getState);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      try {
        console.log('trying to get');
        await getState(roomID);
      } catch (error) {
        console.log('caught no game');
        navigate('/');
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  });

  const gameInfo = useStore(({ gameSlice }) => gameSlice.current);
  console.log('game end screen:', gameInfo);
  console.log('game status:', gameInfo.status);

  if (!gameInfo || gameInfo?.status === 'QUIT') {
    navigate('/');
  }
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
        <button type="button" id="replay" onClick={onResetClick}>
          Replay
          <img src={replayicon} className="mini-icon" />
        </button>
        <button type="button" onClick={onDeleteClick}>
          Quit
          <img src={exiticon} className="mini-icon" />
        </button>
      </div>
    );
  };

  // change for each unique color
  const playerRankBar = (name, position) => {
    const barheight = (5 - (position + 1)) * 60 + 130;
    return (
      <div className="player-rank-bar">
        <img src={penguIconOrder[position]} />
        <img
          className="ranking-number-img"
          src={rankingNumberOrder[position]}
          style={{
            '--bar-height': `${barheight - 80}px`,
          }}
        />
        <span
          className="ranking-bar-vertical"
          style={{
            '--bar-height': `${barheight}px`,
            '--bar-color': `${barColorOrder[position]}`,
          }}
        />
      </div>
    );
  };
  const winnerRankBar = (name, position) => {
    const barheight = (5 - (position + 1)) * 60 + 150;
    return (
      <div className="player-rank-bar" id="winner">
        <img src={spotlight} className="spotlightimg" />
        <div className="winner-icon">
          <img src={crown} className="mini-icon" />
          <div>
            <span className="winner-outline" />
            <img src={penguIconOrder[position]} id="winner" />
          </div>
        </div>
        <img
          className="ranking-number-img"
          src={rankingNumberOrder[position]}
          style={{
            '--bar-height': `${barheight - 80}px`,
          }}
        />
        <span
          className="ranking-bar-vertical"
          style={{
            '--bar-height': `${barheight}px`,
            '--bar-color': `${barColorOrder[position]}`,
          }}
        />
      </div>
    );
  };

  return (
    <div className="grocery-game-endscreen">
      <PageTopBar />
      <h1>{gameInfo.ranking[0]} Wins!</h1>
      <div className="all-ranking-bars">
        {playerRankBar(gameInfo.ranking[3], 3)}
        {playerRankBar(gameInfo.ranking[2], 2)}
        {winnerRankBar(gameInfo.ranking[0], 0)}
        {playerRankBar(gameInfo.ranking[1], 1)}
      </div>
      {/* {gameInfo.ranking.map((name, rank) => (
        <p>
          {name} : {rank}
        </p>
      ))} */}
      {isAdmin && adminButtons()}
    </div>
  );
}

export default GroceryEndScreen;
