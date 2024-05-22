import React from 'react';
import { NavLink } from 'react-router-dom'; // useLocation

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/creategame">Create Game</NavLink>
        </li>
        <li>
          <NavLink to="/joingame">Join Game</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
