import { useState } from 'react';
import { CircleButton } from '../ButtonComponents';
import ScoreBox from '../PlayerScoreBox';

function FourByFourGameBoard() {
  const [numbers, setNumbers] = useState(createNumbers());

  function createNumbers() {
    const numberArray = [];
    for (let i = 1; i <= 8; i++) {
      numberArray.push(i, i);
    }
    return numberArray;
  }

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
