import { useState } from 'react';
import StartGameMenu from './components/StartGameMenu';
import './scss/index.scss';

function App() {
  const [gameStart, setGameStart] = useState(false);

  function startGame() {
    setGameStart(true);
    console.log('clicked');
  }

  return (
    <>
      <main
        className={`centered-container ${gameStart ? 'white-bg' : 'black-bg'}`}
      >
        {!gameStart && <StartGameMenu startGame={startGame} />}
      </main>
    </>
  );
}

export default App;
