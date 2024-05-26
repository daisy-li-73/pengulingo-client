import React from 'react';
import { NavLink } from 'react-router-dom';

function PageTopBar() {
  return (
    <div className="page-top-bar">
      <div className="invis-top-bar">
        <NavLink className="pengulingo-title" to="/">
          <p>pengulingo</p>
        </NavLink>
      </div>
      <div className="top-bar" />
    </div>
  );
}

export default PageTopBar;
