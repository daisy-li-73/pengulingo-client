import React, { useEffect } from 'react';
import pengu from './images-loading/pengu.png';
import blackunpopped from './images-loading/black-unpopped.png';
import blackpopped from './images-loading/black-popped.png';
import blueunpopped from './images-loading/blue-unpopped.png';
import bluepopped from './images-loading/blue-popped.png';
import greenunpopped from './images-loading/green-unpopped.png';
import greenpopped from './images-loading/green-popped.png';
import pinkunpopped from './images-loading/pink-unpopped.png';
import pinkpopped from './images-loading/pink-popped.png';
import redunpopped from './images-loading/red-unpopped.png';
import redpopped from './images-loading/red-popped.png';
import whiteunpopped from './images-loading/white-unpopped.png';
import whitepopped from './images-loading/white-popped.png';
import yellowunpopped from './images-loading/yellow-unpopped.png';
import yellowpopped from './images-loading/yellow-popped.png';
import yellow2unpopped from './images-loading/yellow2-unpopped.png';
import yellow2popped from './images-loading/yellow2-popped.png';

function LoadingScreen(props) {
  const showText = props.text || 'The Anticipation!';
  useEffect(() => {
    const balloonPairs = document.querySelectorAll('.balloon');

    function animateBalloons(index = 0) {
      if (index < balloonPairs.length) {
        const unpoppedImg = balloonPairs[index].querySelector('.unpopped');
        const poppedImg = balloonPairs[index].querySelector('.popped');

        unpoppedImg.style.opacity = '1';
        poppedImg.style.opacity = '0';
        unpoppedImg.classList.add('animate-pop');

        setTimeout(() => {
          unpoppedImg.classList.remove('animate-pop');
          unpoppedImg.style.opacity = '0';
          poppedImg.style.opacity = '1';
        }, 750);

        setTimeout(() => {
          animateBalloons(index + 1);
        }, 1000);
      } else {
        setTimeout(() => {
          balloonPairs.forEach((balloon) => {
            const unpoppedImg = balloon.querySelector('.unpopped');
            const poppedImg = balloon.querySelector('.popped');
            unpoppedImg.style.opacity = '1';
            poppedImg.style.opacity = '0';
          });

          setTimeout(() => animateBalloons(0), 500);
        }, 1000);
      }
    }

    animateBalloons();
  }, []);

  return (
    <div className="loading-screen">
      <div className="pengu">
        <img
          src={pengu}
          className="pengu-img"
          alt="Pengu"
        />
      </div>
      <div className="balloons">
        <div className="black balloon">
          <img
            src={blackunpopped}
            className="black-unpopped unpopped"
            alt="Black Unpopped"
          />
          <img
            src={blackpopped}
            className="black-popped popped"
            alt="Black Popped"
          />
        </div>
        <div className="blue balloon">
          <img
            src={blueunpopped}
            className="blue-unpopped unpopped"
            alt="Blue Unpopped"
          />
          <img
            src={bluepopped}
            className="blue-popped popped"
            alt="Blue Popped"
          />
        </div>
        <div className="green balloon">
          <img
            src={greenunpopped}
            className="green-unpopped unpopped"
            alt="Green Unpopped"
          />
          <img
            src={greenpopped}
            className="green-popped popped"
            alt="Green Popped"
          />
        </div>
        <div className="pink balloon">
          <img
            src={pinkunpopped}
            className="pink-unpopped unpopped"
            alt="Pink Unpopped"
          />
          <img
            src={pinkpopped}
            className="pink-popped popped"
            alt="Pink Popped"
          />
        </div>
        <div className="red balloon">
          <img
            src={redunpopped}
            className="red-unpopped unpopped"
            alt="Red Unpopped"
          />
          <img
            src={redpopped}
            className="red-popped popped"
            alt="Red Popped"
          />
        </div>
        <div className="white balloon">
          <img
            src={whiteunpopped}
            className="white-unpopped unpopped"
            alt="White Unpopped"
          />
          <img
            src={whitepopped}
            className="white-popped popped"
            alt="White Popped"
          />
        </div>
        <div className="yellow balloon">
          <img
            src={yellowunpopped}
            className="yellow-unpopped unpopped"
            alt="Yellow Unpopped"
          />
          <img
            src={yellowpopped}
            className="yellow-popped popped"
            alt="Yellow Popped"
          />
        </div>
        <div className="yellow2 balloon">
          <img
            src={yellow2unpopped}
            className="yellow2-unpopped unpopped"
            alt="Yellow2 Unpopped"
          />
          <img
            src={yellow2popped}
            className="yellow2-popped popped"
            alt="Yellow2 Popped"
          />
        </div>
      </div>
      <div className="text">{showText}</div>
    </div>
  );
}

export default LoadingScreen;
