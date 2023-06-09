import { useEffect, useState } from 'react';
import { CircleButton } from '../ButtonComponents';
import ScoreBox from '../PlayerScoreBox';
import MenuModal from '../MenuModal';
// import SoloGameOver from '../GameOverScreen/SoloGameOver';
import { nanoid } from 'nanoid';

function FourByFour({ menuModalOpen, onStartGame, onOpenMenu }: any) {
  const [numbers, setNumbers] = useState(createNumbers());

  useEffect(() => {
    checkForMatch();
  }, [numbers]);

  function checkForMatch() {
    const flippedNumbers = numbers.filter((number) => number.isFlipped && !number.isMatched);
    console.log(flippedNumbers);
    if (flippedNumbers.length >= 2) {
      const matchedValues = flippedNumbers.map((number) => number.value);
      const isAllMatched = flippedNumbers.every((number) => number.value === matchedValues[0]);
      if (isAllMatched) {
        console.log('Match!');
    
        setNumbers((prevNumbers) =>
          prevNumbers.map((number) => {
            if (matchedValues.includes(number.value)) {
              return { ...number, isMatched: true };
            }
            return number;
          })
        );
      } else {
        console.log('No match');
      }
    }
  }

  function createNumbers() {
    const numberArray = [];
    for (let i = 1; i <= 8; i++) {
      const number = {
        id: nanoid(),
        value: i,
        isFlipped: false,
        isMatched: false,
      };
      const duplicateNumber = {
        id: nanoid(),
        value: i,
        isFlipped: false,
        isMatched: false,
      };

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

  const circles = numbers.map((number) => {
    return (
      <CircleButton
        onFlipNumber={() => flipNumbers(number.id)}
        key={number.id}
        isFlipped={number.isFlipped}
        isMatched={number.isMatched}
      >
        {number.value}
      </CircleButton>
    );
  });

  console.log(circles);

  return (
    <>
      {menuModalOpen && (
        <MenuModal onStartGame={onStartGame} onOpenMenu={onOpenMenu} />
      )}
      {/* <SoloGameOver onStartGame={onStartGame} /> */}
      <div className="game-board-container">{circles}</div>
      <ScoreBox />
    </>
  );
}

export default FourByFour;
