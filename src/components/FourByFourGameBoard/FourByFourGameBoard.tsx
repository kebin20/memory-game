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
    return numberArray;
  }

console.log(numbers)

  const circles = numbers.map((number) => (
    <CircleButton className="circle-buttons" key={number}>
      {number}
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
