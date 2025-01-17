/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import PageTopBar from './PageTopBar';
import pengu from '../img/pengu_happy.png';
import loadingcircle from '../img/light_big_loading_circle.png';
import smallloadingicon from '../img/smallloadingicon.png';
import backbutton from '../img/backbutton.png';
import loadingbuttonbg from '../img/loadingbuttonbg_green.png'; // change this
import createbuttonbg from '../img/createbuttonbg_green.png'; // change this
import useStore from '../store';
import 'react-toastify/dist/ReactToastify.css';
import LoadingScreen from './loading-page/loading-screen';

function JoinGame(props) {
  const navigate = useNavigate();
  const [roomKey, setRoomKey] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingScreen, setLoadingScreen] = useState(false);
  const joinRoom = useStore(({ gameSlice }) => gameSlice.joinRoom);

  const onJoinGameClick = async () => {
    try {
      setLoadingScreen(true);
      const response = await joinRoom({
        roomKey,
        playerInfo: { name, host: false },
      });
      console.log(response);
      // navigate(`/room/${response.data._id}`, { state: { playerNumber: response.data.players.length - 1, isAdmin: false } });
      navigate(`/room/${response.data._id}`, {
        state: { playerName: name, isAdmin: false },
      });
    } catch (error) {
      setLoadingScreen(false);
      console.log('Error joining room:', error);
      toast.error('Error 404: Room is full or room doesn\'t exist!');
    }
  };

  const handleCodeInput = (e) => {
    const inputValue = e.target.value;
    const inputElement = e.target;
    // limit 4 characters, only allow submit when there are 4 characters
    const truncatedValue = inputValue.slice(0, 4);
    if (inputValue !== truncatedValue) {
      inputElement.value = truncatedValue;
    }
    const uppercaseCode = truncatedValue.replace(/[a-z]/g, (char) => char.toUpperCase());
    setRoomKey(uppercaseCode);
    // change border color if input is valid
    if (inputValue.length >= 4) {
      inputElement.classList.add('not-empty');
    } else {
      inputElement.classList.remove('not-empty');
    }
    // check whether to change loading
    if (truncatedValue.length === 4 && name.length >= 3) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  };
  const handleNameInput = (e) => {
    const inputValue = e.target.value;
    const inputElement = e.target;
    setName(inputValue);
    // change border color if input is valid
    if (inputValue.length >= 3) {
      inputElement.classList.add('not-empty');
    } else {
      inputElement.classList.remove('not-empty');
    }
    // check whether to change loading
    if (inputValue.length >= 3 && roomKey.length === 4) {
      setLoading(false);
    } else {
      setLoading(true);
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
            onClick={onJoinGameClick} // send to db, if can't find code, then send toast error and reset code field
          >
            <p className="create-button-text">Join!</p>
            <img src={createbuttonbg} alt="create button bg" />
          </button>
        )}
      </div>
    );
  };
  return loadingScreen ? (
    <LoadingScreen />
  ) : (
    <div className="join-game-page">
      <PageTopBar />
      <div className="foreground">
        <img src={pengu} alt="pengu logo" className="pengu-logo" />
        <input
          className="enter-name"
          type="text"
          placeholder="Game code"
          onInput={handleCodeInput}
          value={roomKey}
        />
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

export default JoinGame;
