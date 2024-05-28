import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTopBar from './PageTopBar';
import pengu from '../img/pengu_happy.png';
import crownicon from '../img/crown.png';
import loadingcircle from '../img/loading_circle.png';
import smallloadingicon from '../img/smallloadingicon.png';
import loadingbuttonbg from '../img/loadingbuttonbg.png';
import backbutton from '../img/backbutton.png';
import createbuttonbg from '../img/createbuttonbg.png';

function CreateGame(props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  // const [playerName, setPlayerName] = useState();
  const [setPlayerName] = useState();
  const onCreateGameClick = () => {
    // send player name to backend
    // receive roomID from backend
    // navigate to room/roomID
  };
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
            onClick={onCreateGameClick}
          >
            <p className="create-button-text">Create!</p>
            <img src={createbuttonbg} alt="create button bg" />
          </button>
        )}
      </div>
    );
  };
  const handleNameInput = (e) => {
    if (e.target.value.length >= 3) {
      setLoading(false);
      e.target.classList.add('not-empty');
    } else {
      e.target.classList.remove('not-empty');
      setLoading(true);
      setPlayerName(e.target.value);
    }
  };
  return (
    <div className="create-game">
      <PageTopBar />
      <div className="foreground">
        <img src={pengu} alt="pengu logo" className="pengu-logo" />
        <img src={crownicon} alt="crown" className="little-icon" />
        <input
          className="enter-name"
          type="text"
          placeholder="Your name"
          onInput={handleNameInput}
        />
        <div className="buttons-div">
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

export default CreateGame;
