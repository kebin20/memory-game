import { useState } from 'react';
import FourByFourGameBoard from './components/FourByFourGameBoard/FourByFourGameBoard';
import Navbar from './components/Navbar';
import StartGameMenu from './components/StartGameMenu';
import './scss/index.scss';

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [openMenuModal, setOpenMenuModal] = useState(false);

  function startGame() {
    setGameStart((prevStart) => !prevStart);
  }

  function openMenu() {
    setOpenMenuModal((prevOpen) => !prevOpen);
  }

  return (
    <>
      {gameStart && <Navbar openMenu={openMenu} />}
      <main
        className={`centered-container ${gameStart ? 'white-bg' : 'black-bg'}`}
        style={{ height: gameStart ? '100%' : '100vh' }}
      >
        {!gameStart && <StartGameMenu startGame={startGame} />}
        {gameStart && <FourByFourGameBoard openMenuModal={openMenuModal} />}
      </main>
    </>
  );
}

export default App;
