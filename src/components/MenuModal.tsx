import {
  PrimaryButton,
  SecondaryButton,
} from './ButtonComponents';

function MenuModal() {
  return (
    <div className="backdrop">
      <div className="menu-modal">
        <PrimaryButton>Restart</PrimaryButton>
        <SecondaryButton>New Game</SecondaryButton>
        <SecondaryButton>Resume Game</SecondaryButton>
      </div>
    </div>
  );
}

export default MenuModal;
