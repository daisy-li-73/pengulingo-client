/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PageTopBar from './PageTopBar';
import smallloadingicon from '../img/smallloadingicon.png';
import loadingcircle from '../img/loading_circle.png';
import pengu from '../img/pengu_happy.png';

// change props to usestore
function WaitingRoom(props) {
  const player1Name = props.player1Name || 'Selena';
  const player2Name = props.player2Name || '';
  const player3Name = props.player3Name || '';
  const player4Name = props.player4Name || '';
  const code = props.code || '5L4Y';
  //   const isAdmin = props.isAdmin || false;
  const playerBar = (color, colorborder, playerName, left) => {
    let radiusleft, radiusright;
    if (left) {
      radiusleft = 50;
      radiusright = 0;
    } else {
      radiusleft = 0;
      radiusright = 50;
    }
    return (
      <div
        className="playerbar-div"
        style={{
          '--player-color': color,
          '--player-color-2': colorborder,
          '--radius-left': `${radiusleft}px`,
          '--radius-right': `${radiusright}px`,
        }}
      >
        {playerName ? (
          <p className="playername-text">{player1Name}</p>
        ) : (
          <div className="loading-icon-image">
            <img
              src={smallloadingicon}
              className="loading-icon-image-icon"
              alt="small loading icon"
            />
          </div>
        )}
      </div>
    );
  };
  return (
    <div className="waiting-room-page">
      <PageTopBar />
      <div className="foreground-waitingroom">
        <div className="code">
          <img src={pengu} alt="pengu logo" className="pengu-logo" />
          <div className="code-text">
            {Array.from(code).map((letter, index) => (
              <div className="code-circle">{letter}</div>
            ))}
          </div>
          <h2>
            Share this code with
            <br /> your friends!
          </h2>
        </div>
        <div className="display-all-players">
          <div className="display-players">
            {playerBar('#E32222', '#EE6363', player1Name, true)}
            {playerBar('#28B3DF', '#60CBED', player2Name, false)}
          </div>
          <div className="display-players">
            {playerBar('#EFD910', '#FFE76C', player3Name, true)}
            {playerBar('#27DE2E', '#62F370', player4Name, false)}
          </div>
        </div>
      </div>
      <div className="background-waitingroom">
        <div className="loading-circle-div">
          <img src={loadingcircle} alt="loading" className="big-loading" />
        </div>
      </div>
    </div>
  );
}

export default WaitingRoom;
