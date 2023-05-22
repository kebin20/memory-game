import { useState } from 'react';
import FourByFourGameBoard from './components/FourByFourGameBoard/FourByFourGameBoard';
import Navbar from './components/Navbar';
import StartGameMenu from './components/StartGameMenu';
import './scss/index.scss';

function App() {
  const [gameStart, setGameStart] = useState(false);

  function startGame() {
    setGameStart(true);
  }

  function returnToMenu() {
    setGameStart(false);
  }

  return (
    <>
      {gameStart && <Navbar returnToMenu={returnToMenu} />}
      <main
        className={`centered-container ${gameStart ? 'white-bg' : 'black-bg'}`}
        style={{ height: gameStart ? '100%' : '100vh' }}
      >
        {!gameStart && <StartGameMenu startGame={startGame} />}
        {gameStart && <FourByFourGameBoard />}
      </main>
    </>
  );
}

export default App;