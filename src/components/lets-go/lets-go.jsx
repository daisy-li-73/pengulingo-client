/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import p1light from './images-lets-go/Pink Light.png';
import p2light from './images-lets-go/Blue Light.png';
import p3light from './images-lets-go/Yellow Light.png';
import p4light from './images-lets-go/Green Light.png';
import p1 from './images-lets-go/P1.png';
import p2 from './images-lets-go/P2.png';
import p3 from './images-lets-go/P3.png';
import p4 from './images-lets-go/P4.png';
import penguhappy from './images-lets-go/Pengu Happy.png';
import letsgopng from './images-lets-go/lets-go.png';
import ellipse from './images-lets-go/Ellipse 15.png';
import star6 from './images-lets-go/Star 6.png';
import star7 from './images-lets-go/Star 7.png';
import star8 from './images-lets-go/Star 8.png';
import star9 from './images-lets-go/Star 9.png';
import star10 from './images-lets-go/Star 10.png';
import star11 from './images-lets-go/Star 11.png';
import star12 from './images-lets-go/Star 12.png';
import star13 from './images-lets-go/Star 13.png';
import star14 from './images-lets-go/Star 14.png';
import star15 from './images-lets-go/Star 15.png';
import star16 from './images-lets-go/Star 16.png';
import star17 from './images-lets-go/Star 17.png';

function LetsGo() {
  return (
    <div className="lets-go-class">
      <div className="lights">
        <img src={p1light} className="P1Light" />
        <img src={p2light} className="P2Light" />
        <img src={p3light} className="P3Light" />
        <img src={p4light} className="P4Light" />
      </div>
      <div className="players" id="letsgo">
        <img src={p1} className="P1" id="letsgo" />
        <img src={p2} className="P2" id="letsgo" />
        <img src={p3} className="P3" id="letsgo" />
        <img src={p4} className="P4" id="letsgo" />
      </div>
      <div className="pengu" id="letsgo">
        <img src={penguhappy} className="pengu-img" id="letsgo" />
        <div className="lets-go-text">
          <img src={letsgopng} className="lets-go-img" />
        </div>
      </div>
      <div className="circle">
        <img src={ellipse} className="ellipse" />
      </div>
      <div className="sparkles">
        <div className="red-sparkles">
          <img src={star6} className="star-6" />
          <img src={star7} className="star-7" />
          <img src={star8} className="star-8" />
        </div>
        <div className="blue-sparkles">
          <img src={star9} className="star-9" />
          <img src={star10} className="star-10" />
          <img src={star11} className="star-11" />
        </div>
        <div className="yellow-sparkles">
          <img src={star12} className="star-12" />
          <img src={star13} className="star-13" />
          <img src={star14} className="star-14" />
        </div>
        <div className="green-sparkles">
          <img src={star15} className="star-15" />
          <img src={star16} className="star-16" />
          <img src={star17} className="star-17" />
        </div>
      </div>
    </div>
  );
}

export default LetsGo;
