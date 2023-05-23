import { useState } from 'react';
import { CircleButton } from '../ButtonComponents';
import ScoreBox from '../PlayerScoreBox';
import { nanoid } from 'nanoid';

function FourByFourGameBoard() {
  const [numbers, setNumbers] = useState(createNumbers());

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
      <div className="game-board-container">{circles}</div>
      <ScoreBox />
    </>
  );
}

export default FourByFourGameBoard;
