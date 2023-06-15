import { useState } from 'react';
import FourByFour from './components/GameBoards/FourByFour';
import SixBySix from './components/GameBoards/SixBySix';
import Navbar from './components/Navbar';
import StartGameMenu from './components/StartGameMenu';
import './scss/index.scss';

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [fourByFourOptionClicked, setFourByFourOptionClicked] = useState(false);
  const [sixBySixOptionClicked, setSixBySixOptionClicked] = useState(false);

  function startGame() {
    setGameStart((prevStart) => !prevStart);
    setMenuModalOpen(false);
  }

  function openMenu() {
    setMenuModalOpen((prevOpen) => !prevOpen);
  }

  function onFourByFourClick() {
    setFourByFourOptionClicked(true);
    setSixBySixOptionClicked(false);
  }

  function onSixBySixClick() {
    setSixBySixOptionClicked(true);
    setFourByFourOptionClicked(false);
  }

  return (
    <>
      {gameStart && <Navbar openMenu={openMenu} />}
      <main
        className={`centered-container ${gameStart ? 'white-bg' : 'black-bg'}`}
        style={{ height: gameStart ? '100%' : '100vh' }}
      >
        {!gameStart && (
          <StartGameMenu
            onFourByFourClick={onFourByFourClick}
            onSixBySixClick={onSixBySixClick}
            startGame={startGame}
          />
        )}
        {gameStart && fourByFourOptionClicked && (
          <FourByFour
            onStartGame={startGame}
            onOpenMenu={openMenu}
            menuModalOpen={menuModalOpen}
          />
        )}
        {gameStart && sixBySixOptionClicked && (
          <SixBySix
            onStartGame={startGame}
            onOpenMenu={openMenu}
            menuModalOpen={menuModalOpen}
          />
        )}
      </main>
    </>
  );
}

export default App;
