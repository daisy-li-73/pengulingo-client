import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import PageTopBar from './PageTopBar';
import pengu from '../img/pengu_happy.png';
import loadingcircle from '../img/light_big_loading_circle.png';
import smallloadingicon from '../img/smallloadingicon.png';
import backbutton from '../img/backbutton.png';
import loadingbuttonbg from '../img/loadingbuttonbg.png'; // change this
import createbuttonbg from '../img/createbuttonbg.png'; // change this

function JoinGame(props) {
  const navigate = useNavigate();
  const [loading] = useState(true);
  const submitButton = () => {
    return (
      <div>
        {loading ? (
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
        ) : (
          <button
            type="button"
            className="createbutton"
            // onClick={onCreateGameClick}
          >
            <p className="create-button-text">Create!</p>
            <img src={createbuttonbg} alt="create button bg" />
          </button>
        )}
      </div>
    );
  };
  return (
    <div className="join-game-page">
      <PageTopBar />
      <div className="foreground">
        <img src={pengu} alt="pengu logo" className="pengu-logo" />
        <input
          className="enter-name"
          type="text"
          placeholder="Game code"
        //   onInput={handleNameInput}
        />
        <input
          className="enter-name"
          type="text"
          placeholder="Your name"
        //   onInput={handleNameInput}
        />
        <div className="buttons-div">
          {/* change this color */}
          <button
            type="button"
            className="back-button"
            onClick={() => {
              navigate('/');
            }}
          >
            <img src={backbutton} alt="back loading icon" />
          </button>
          {submitButton()}
        </div>
      </div>

      <div className="background">
        <div className="loading-circle-div">
          <img src={loadingcircle} alt="loading" className="big-loading" />
        </div>
      </div>
    </div>
  );
}

export default JoinGame;
