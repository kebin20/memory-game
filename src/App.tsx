import { useState } from 'react';
import StartGameMenu from './components/StartGameMenu';
import Navbar from './components/Navbar';
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
      >
        {!gameStart && <StartGameMenu startGame={startGame} />}
      </main>
    </>
  );
}

export default App;
