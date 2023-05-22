import { CircleButton } from '../ButtonComponents';
import ScoreBox from '../playerScoreBox';

function FourByFourGameBoard() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

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
