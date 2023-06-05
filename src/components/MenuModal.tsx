import { PrimaryButton, SecondaryButton } from './ButtonComponents';

function MenuModal({ onStartGame, onOpenMenu }) {
  return (
    <div className="backdrop">
      <div className="menu-modal">
        <PrimaryButton>Restart</PrimaryButton>
        <SecondaryButton onClick={onStartGame}>New Game</SecondaryButton>
        <SecondaryButton onClick={onOpenMenu}>Resume Game</SecondaryButton>
      </div>
    </div>
  );
}

export default MenuModal;
