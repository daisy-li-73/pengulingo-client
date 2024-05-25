import React from 'react';
import { NavLink } from 'react-router-dom';

function PageTopBar() {
  return (
    <div className="page-top-bar">
      <div className="invis-top-bar">
        <NavLink to="/">
          <p className="pengulingo-title">pengulingo</p>
        </NavLink>
      </div>
      <div className="top-bar" />
    </div>
  );
}

export default PageTopBar;
