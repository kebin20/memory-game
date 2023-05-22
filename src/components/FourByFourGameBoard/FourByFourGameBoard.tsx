import { CircleButton } from '../ButtonComponents';
import ScoreBox from '../PlayerScoreBox';

function FourByFourGameBoard() {
  const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

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
