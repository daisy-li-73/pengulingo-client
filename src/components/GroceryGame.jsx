/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import data from '../data.json';
import useStore from '../store';

import PageTopBar from './PageTopBar';
import ProgressBar from './progress-bar/progress-bar';

import pengushopping from '../img/pengu_shopping.png';
import broccoli from '../img/broccoli.png';
import baguette from '../img/baguette.png';
import coffeebeans from '../img/coffeebeans.png';
import strawberry from '../img/strawberry.png';
import carrot from '../img/carrot.png';
import celery from '../img/celery.png';
import cow from '../img/cow.png';
import lobster from '../img/lobster.png';
import tomato from '../img/tomato.png';
import wheat from '../img/wheat.png';
import unchecked from '../img/unchecked.png';
import correctBg from '../img/foodcorrectbg.png';
import incorrectBg from '../img/foodincorrectbg.png';
import speechbubble from '../img/speechbubble.png';
import checked from '../img/checked.png';
import wrong from '../img/wrong.png';
import smallloadingicon from '../img/smallloadingicon.png';
import loadingbuttonbg from '../img/loadingbuttonbg_green.png';

const images = {
  broccoli,
  baguette,
  coffeebeans,
  strawberry,
  carrot,
  celery,
  cow,
  lobster,
  wheat,
  tomato,
};

function GroceryGame(props) {
  const { roomID } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const submitAnswer = useStore(({ gameSlice }) => gameSlice.submitAnswer);
  const { playerName, isAdmin, playerNumber } = location.state || {
    playerName: '',
    isAdmin: false,
    playerNumber: -1,
  };
  console.log('reached game', playerName);
  const getState = useStore(({ gameSlice }) => gameSlice.getState);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getState(roomID);
    }, 500);
    return () => clearTimeout(timeoutId);
  });
  const gameInfo = useStore(({ gameSlice }) => gameSlice.current);
  console.log('in grocery game:', gameInfo);
  const [pointsArray, setPointsArray] = useState([]);

  useEffect(() => {
    if (gameInfo && gameInfo.players) {
      const newPointsArray = gameInfo.players.map((player) => player.points);
      setPointsArray(newPointsArray);
    }
  }, [gameInfo]);

  console.log('points array:', pointsArray);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [currentCorrect, setCurrentCorrect] = useState(0); // -1:incorrect, 0: nothing, 1:correct
  const [showModal, setShowModal] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);

  const handleAnswerClick = async (outcome) => {
    console.log('outcome', outcome);
    if (outcome === 'correct') {
      setCorrectCount(correctCount + 1);
      setCurrentCorrect(1);
      setShowModal(true);
      console.log('sending correct answer:', roomID, playerName);
      await submitAnswer(roomID, { playerName, correct: true });
    } else {
      setCorrectCount(0);
      setCurrentCorrect(-1);
      setShowModal(true);
      console.log('sending incorrect answer:', roomID, playerName);
      await submitAnswer(roomID, { playerName, correct: false });
    }
    setTimeout(() => {
      if (outcome === 'correct') {
        if (currentQuestionIndex < data.questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setReachedEnd(true);
        }
      } else {
        setCurrentQuestionIndex(0);
      }
      setCurrentCorrect(0);
      setShowModal(false);
    }, 500);
  };
  if (gameInfo?.status === 'GAME_OVER') {
    navigate(`/room/${roomID}/1/end`, {
      state: { playerName, isAdmin, playerNumber },
    });
  }
  const uponEnd = () => {
    return (
      <div className="gamefinished-screen">
        <div className="game-finished-waitingscreen">
          <p>Bravo! Attendez patiemment que vos amis finissent...</p>
        </div>
        <div className="loading-icon-image">
          <img
            src={smallloadingicon}
            className="loading-icon-image-icon"
            alt="small loading icon"
          />
          <img
            src={loadingbuttonbg}
            className="loading-icon-image-bg"
            alt="small loading icon"
          />
        </div>
      </div>
    );
  };

  const currentQuestion = data.questions[currentQuestionIndex];
  const questionStatus = () => {
    if (currentCorrect === -1) {
      return wrong;
    } else if (currentCorrect === 0) {
      return unchecked;
    } else {
      return checked;
    }
  };

  return (
    <div className="grocery-game-page">
      <PageTopBar language />
      {!reachedEnd && (
        <div className="grocery-questions">
          <div className="grocery-question-text">
            <img src={questionStatus()} />
            <p>Je cherche</p>
            <p className="grocery-question-textdeco">
              {currentQuestion.question}.
            </p>
          </div>
          {!showModal ? (
            <div className="grocery-question-buttons">
              {currentQuestion.answers.map((answer) => (
                <button onClick={() => handleAnswerClick(answer.outcome)}>
                  <img src={images[answer.img_key]} alt={answer.text} />
                </button>
              ))}
            </div>
          ) : (
            <div className="grocery-correct-modal">
              <div className="grocery-question-buttons">
                {currentQuestion.answers.map((answer) => (
                  <button
                    className="deco"
                    style={{
                      backgroundImage: `url(${
                        answer.outcome === 'correct' ? correctBg : incorrectBg
                      })`,
                      cursor: 'wait',
                    }}
                  >
                    <img src={images[answer.img_key]} alt={answer.text} />
                  </button>
                ))}
              </div>
              <div className="grocery-correct-modal-textbg">
                <p className="speechbubble-text">
                  {currentCorrect === 1
                    ? data.outcomes.correct.text
                    : data.outcomes.incorrect.text}
                </p>
                <img src={speechbubble} className="speechbubble-image" />
              </div>
            </div>
          )}
        </div>
      )}
      {reachedEnd && uponEnd()}
      <ProgressBar playerProgress={pointsArray} />
      <img
        className="pengu-shopping-bg"
        src={pengushopping}
        alt="pengu shopping"
      />
    </div>
  );
}

export default GroceryGame;
