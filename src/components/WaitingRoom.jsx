/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import PageTopBar from './PageTopBar';
import useStore from '../store';
import smallloadingicon from '../img/smallloadingicon.png';
import loadingcircle from '../img/loading_circle.png';
import pengu from '../img/pengu_happy.png';
import admincolorbg from '../img/admin_color_bg.png';
import playercolorbg from '../img/player_color_bg.png';

function WaitingRoom(props) {
  const { roomID } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const { playerName, isAdmin } = location.state || {
    playerName: '',
    isAdmin: false,
  };
  const getState = useStore(({ gameSlice }) => gameSlice.getState);
  const changeGameStatus = useStore(
    ({ gameSlice }) => gameSlice.changeGameStatus,
  );
  useEffect(() => {
    getState(roomID);
    // }, []);
  });
  const gameInfo = useStore(({ gameSlice }) => gameSlice.current);
  console.log(gameInfo);
  if (gameInfo?.status === 'CLOSED') {
    navigate(`/room/${roomID}/1`, {
      state: { playerName, isAdmin },
    });
  }
  const player1Name = gameInfo?.players?.[0]?.name || '';
  const player2Name = gameInfo?.players?.[1]?.name || '';
  const player3Name = gameInfo?.players?.[2]?.name || '';
  const player4Name = gameInfo?.players?.[3]?.name || '';
  const code = gameInfo.roomKey || 'xxxx';
  const backgroundUrl = isAdmin ? admincolorbg : playercolorbg;
  const bgstyle = {
    '--bg-url': `url("${backgroundUrl}")`,
  };
  const onStartGameClick = async () => {
    await changeGameStatus(roomID, 'CLOSED');
  };
  const codeDiv = () => {
    return gameInfo?.players.length === 4 ? (
      <div className="code">
        <img src={pengu} alt="pengu logo" className="pengu-logo" />
        {isAdmin ? (
          <button type="button" onClick={onStartGameClick}>
            Let&apos;s Go!
          </button>
        ) : (
          <p>Waiting on host...</p>
        )}
      </div>
    ) : (
      <div className="code">
        <img src={pengu} alt="pengu logo" className="pengu-logo" />
        <div className="code-text">
          {Array.from(code).map((letter) => (
            <div className="code-circle">{letter}</div>
          ))}
        </div>
        <h2>
          Share this code with
          <br /> your friends!
        </h2>
      </div>
    );
  };
  const playerBar = (color, colorborder, pName, left) => {
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
        {pName ? (
          <p className="playername-text">{pName}</p>
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
    <div className="waiting-room-page" style={bgstyle}>
      <PageTopBar />
      <div className="foreground-waitingroom">
        {codeDiv()}
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
