import { PrimaryButton, SecondaryButton } from '../ButtonComponents';

export default function SoloGameOver({ onStartGame }) {
  return (
    <div className="backdrop">
      <div className="game-over-modal">
        <h2>You did it!</h2>
        <p>Game over! Here's how you got on...</p>
        <div className="time-elapsed-container">
          <p>Time Elapsed</p>
          <p>1:59</p>
        </div>
        <div className="moves-taken-container">
          <p>Moves Taken</p>
          <p>39 Moves</p>
        </div>
        <PrimaryButton>Restart</PrimaryButton>
        <SecondaryButton onClick={onStartGame}>
          Start a New Game
        </SecondaryButton>
      </div>
    </div>
  );
}
