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
import useStore from '../store';

function CreateGame(props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [creator, setCreator] = useState();
  const createRoom = useStore(({ gameSlice }) => gameSlice.createRoom);
  const numQuestions = 5;

  const onCreateGameClick = async () => {
    try {
      const response = await createRoom({
        creator, numQuestions,
      });
      navigate(`/room/${response.data._id}`);
    } catch (error) {
      console.log('Error creating room:', error);
    }
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
    setCreator(e.target.value);
    if (e.target.value.length >= 3) {
      setLoading(false);
      e.target.classList.add('not-empty');
    } else {
      e.target.classList.remove('not-empty');
      setLoading(true);
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
