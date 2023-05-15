import {
  BigMenuButton,
  MenuSelectionButton,
  SecondaryButton,
} from './ButtonComponents';

function StartGameMenu({ startGame }) {
  return (
    <>
      <h1 className="game-menu-title">memory</h1>
      <div className="option">
        <div className="option__container">
          <p className="option__container__title">Select Theme</p>
          <MenuSelectionButton>Numbers</MenuSelectionButton>
          <MenuSelectionButton>Icons</MenuSelectionButton>
        </div>
        <div className="option__container">
          <p className="option__container__title">Numbers of Players</p>
          <SecondaryButton>1</SecondaryButton>
          <SecondaryButton>2</SecondaryButton>
          <SecondaryButton>3</SecondaryButton>
          <SecondaryButton>4</SecondaryButton>
        </div>
        <div className="option__container">
          <p className="option__container__title">Grid Size</p>
          <MenuSelectionButton>4x4</MenuSelectionButton>
          <MenuSelectionButton>6x6</MenuSelectionButton>
        </div>
        <BigMenuButton onClick={startGame}>Start Game</BigMenuButton>
      </div>
    </>
  );
}

export default StartGameMenu;
