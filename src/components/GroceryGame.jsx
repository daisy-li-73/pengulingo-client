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
import unchecked from '../img/unchecked.png';
import correctBg from '../img/foodcorrectbg.png';
import incorrectBg from '../img/foodincorrectbg.png';

const images = {
  broccoli,
  baguette,
  coffeebeans,
  strawberry,
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
  const [currentCorrect, setCurrentCorrect] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);

  const handleAnswerClick = (outcome) => {
    console.log('outcome', outcome);
    if (outcome === 'correct') {
      setCorrectCount(correctCount + 1);
      setCurrentCorrect(true);
      console.log('added correct', correctCount);
    }
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      if (currentQuestionIndex < data.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentCorrect(false);
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

  return (
    <div className="grocery-game-page">
      <PageTopBar language />
      {!reachedEnd && (
        <div className="grocery-questions">
          <div className="grocery-question-text">
            <img src={unchecked} />
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
              <p>
                {currentCorrect
                  ? data.outcomes.correct.text
                  : data.outcomes.incorrect.text}
              </p>
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
