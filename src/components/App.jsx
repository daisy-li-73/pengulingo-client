import React from 'react';
import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import CreateGame from './CreateGame';

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function NavBar(props) {
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

function Test(props) {
  return <div>Testing page for now</div>;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/creategame" element={<CreateGame />} />
          <Route path="/joingame" element={<Test />} />
          <Route path="/joingame/:roomID" element={<Test />} />
          <Route path="/room/:roomID" element={<Test />} />
          <Route path="/room/:roomID/:gameID" element={<Test />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
