import { useEffect, useState } from 'react';
import { CircleButton } from '../ButtonComponents';
import ScoreBox from '../PlayerScoreBox';
import MenuModal from '../MenuModal';
import SoloGameOver from '../GameOverScreen/SoloGameOver';
import { nanoid } from 'nanoid';

function FourByFour({ menuModalOpen, onStartGame, onOpenMenu }: any) {
  const [numbers, setNumbers] = useState(createNumbers());
  // const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    checkForMatch();
  }, [numbers]);

  function checkForMatch() {
    const flippedNumbers = numbers.filter((number) => number.isFlipped);

    if (flippedNumbers.length === 2) {
      if (flippedNumbers[0].value === flippedNumbers[1].value) {
        console.log('Match!');
      } else {
        console.log('No match');
      }
    }
  }

  function createNumbers() {
    const numberArray = [];
    for (let i = 1; i <= 8; i++) {
      const number = { id: nanoid(), value: i, isFlipped: false };
      const duplicateNumber = { id: nanoid(), value: i, isFlipped: false };

      numberArray.push(number, duplicateNumber);
    }
    const randomisedNumbers = numberArray.sort(() => Math.random() - 0.5);
    return randomisedNumbers;
  }

  function flipNumbers(id: string) {
    setNumbers((prevNumbers) =>
      prevNumbers.map((number) => {
        return number.id === id
          ? { ...number, isFlipped: !number.isFlipped }
          : number;
      })
    );
  }

  const circles = numbers.map((number) => (
    <CircleButton
      onFlipNumber={() => flipNumbers(number.id)}
      key={number.id}
      isFlipped={number.isFlipped}
    >
      {number.value}
    </CircleButton>
  ));

  return (
    <>
      {menuModalOpen && (
        <MenuModal onStartGame={onStartGame} onOpenMenu={onOpenMenu} />
      )}
      <SoloGameOver />
      <div className="game-board-container">{circles}</div>
      <ScoreBox />
    </>
  );
}

export default FourByFour;
