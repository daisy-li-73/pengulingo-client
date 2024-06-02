import React from 'react';
import { NavLink } from 'react-router-dom';
import frenchflag from '../img/frenchflag.png';

function PageTopBar(props) {
  return (
    <div className="page-top-bar">
      <div className="invis-top-bar">
        <NavLink className="pengulingo-title" to="/">
          <p>pengulingo</p>
        </NavLink>
        <img src={frenchflag} alt="language icon" className="language-icon" />
      </div>
      <div className="page-top-bar" />
    </div>
  );
}

export default PageTopBar;
