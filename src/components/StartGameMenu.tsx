import {
  BigMenuButton,
  MenuSelectionButton,
  PrimaryButton,
  SecondaryButton,
} from './ButtonComponents';

function StartGameMenu() {
  return (
    <>
      <h1 className="game-menu-title">memory</h1>
      <div className="start-game-menu">
        <div className="select-theme-container">
          <p>Select Theme</p>
          <MenuSelectionButton>Numbers</MenuSelectionButton>
          <MenuSelectionButton>Icons</MenuSelectionButton>
        </div>
      </div>
    </>
  );
}

export default StartGameMenu;
