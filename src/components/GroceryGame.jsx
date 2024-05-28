/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import data from '../data.json';
import PageTopBar from './PageTopBar';
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
  const { isAdmin, playerNumber } = location.state || {
    isAdmin: false,
    playerNumber: 0,
  };
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [currentCorrect, setCurrentCorrect] = useState(0); // -1:incorrect, 0: nothing, 1:correct
  const [showModal, setShowModal] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);

  const handleAnswerClick = (outcome) => {
    console.log('outcome', outcome);
    if (outcome === 'correct') {
      setCorrectCount(correctCount + 1);
      setCurrentCorrect(1);
      console.log('added correct', correctCount);
    } else {
      setCurrentCorrect(-1);
    }
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      if (currentQuestionIndex < data.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentCorrect(0);
      } else {
        setReachedEnd(true);
      }
    }, 3000);
  };
  // find a way to update scores in live time - setCorrectCount only really updates after the handleAnswerClick

  const uponEnd = () => {
    // send final score
    console.log('final score:', correctCount);
    return (
      <div>
        <h1>Bravo! Attendez patiemment que vos amis finissent...</h1>
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
      <img
        className="pengu-shopping-bg"
        src={pengushopping}
        alt="pengu shopping"
      />
    </div>
  );
}

export default GroceryGame;
