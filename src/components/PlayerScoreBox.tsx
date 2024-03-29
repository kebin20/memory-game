function PlayerScoreBox({ score }: { score: number }) {
  return (
    <div className="score-box-container">
      <div className="score-box">
        <span className="score-box__player">P1</span>
        <span className="score-box__score">{score}</span>
      </div>
      <div className="score-box">
        <span className="score-box__player">P2</span>
        <span className="score-box__score">4</span>
      </div>
      <div className="score-box">
        <span className="score-box__player">P3</span>
        <span className="score-box__score">4</span>
      </div>
      <div className="score-box">
        <span className="score-box__player">P4</span>
        <span className="score-box__score">4</span>
      </div>
    </div>
  );
}

export default PlayerScoreBox;
