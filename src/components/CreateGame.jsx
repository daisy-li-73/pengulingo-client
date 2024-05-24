import React, { useState } from 'react';
import pengu from '../img/pengu_happy.png';
import crownicon from '../img/crown.png';
import loadingcircle from '../img/loading_circle.png';

function CreateGame(props) {
  const [loading] = useState(false);
  const submitButton = () => {
    return (
      <div>
        {loading ? (
          <button type="button" className="submit">
            Create!
          </button>
        ) : (
          <button type="button" className="loadingbutton">
            ...
          </button>
        )}
      </div>
    );
  };
  return (
    <div className="create-game">
      <div className="top-bar">
        <p>pengulingo</p>
      </div>
      <div className="foreground">
        <img src={pengu} alt="pengu logo" className="pengu-logo" />
        <img src={crownicon} alt="crown" className="little-icon" />
        <input className="enter-name" type="text" placeholder="Your name" />
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
