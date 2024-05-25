import React, { useState } from 'react';
import pengu from '../img/pengu_happy.png';
import crownicon from '../img/crown.png';
import loadingcircle from '../img/loading_circle.png';
import smallloadingicon from '../img/smallloadingicon.png';

function CreateGame(props) {
  const [loading, setLoading] = useState(true);
  const submitButton = () => {
    return (
      <div>
        {loading ? (
          <button type="button" className="loadingbutton">
            <img src={smallloadingicon} alt="small loading icon" />
          </button>
        ) : (
          <button type="button" className="submitbutton">
            Create!
          </button>
        )}
      </div>
    );
  };
  const handleNameInput = (e) => {
    if (e.target.value.length >= 3) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  };
  return (
    <div className="create-game">
      <div className="top-bar">
        <p>pengulingo</p>
      </div>
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
          <button type="button" className="back-button">
            back
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
