import { useState } from 'react';
import FourByFourGameBoard from './components/FourByFourGameBoard/FourByFourGameBoard';
import Navbar from './components/Navbar';
import StartGameMenu from './components/StartGameMenu';
import './scss/index.scss';

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  function startGame() {
    setGameStart((prevStart) => !prevStart);
  }

  function openMenu() {
    setMenuModalOpen((prevOpen) => !prevOpen);
  }

  return (
    <>
      {gameStart && <Navbar openMenu={openMenu} />}
      <main
        className={`centered-container ${gameStart ? 'white-bg' : 'black-bg'}`}
        style={{ height: gameStart ? '100%' : '100vh' }}
      >
        {!gameStart && <StartGameMenu startGame={startGame} />}
        {gameStart && <FourByFourGameBoard menuModalOpen={menuModalOpen} />}
      </main>
    </>
  );
}

export default App;
