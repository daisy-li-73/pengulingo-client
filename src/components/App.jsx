import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CreateGame from './CreateGame';
import LandingScreen from './landing-page/landingpage';
import JoinGame from './JoinGame';
import LetsGo from './lets-go/lets-go';
import LoadingPage from './loading-page/loading-screen';
import WaitingRoom from './WaitingRoom';
import ChooseGame from './choose-game/choose-game';
import 'react-toastify/dist/ReactToastify.css';
import GroceryGame from './GroceryGame';
import GoGoGroceries from './go-go-groceries/groceries-background';
import GroceryEndScreen from './GroceryEndScreen';
import Test from './Test';

function FallBack(props) {
  return <div>URL Not Found</div>;
}

// function Test(props) {
//   return <div>Testing page for now</div>;
// }

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/creategame" element={<CreateGame />} />
          <Route path="/joingame" element={<JoinGame />} />
          <Route path="/letsgo" element={<LetsGo />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/room/:roomID" element={<WaitingRoom />} />
          <Route path="/room/:roomID/choosegame" element={<ChooseGame />} />
          <Route path="/room/:roomID/:gameID" element={<GroceryGame />} />
          <Route path="/gogogroceries" element={<GoGoGroceries />} />
          <Route
            path="/room/:roomID/:gameID/end"
            element={<GroceryEndScreen />}
          />
          <Route path="*" element={<FallBack />} />
          <Route path="/room/:roomID/test" element={<Test />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
