import { MenuSelectionButton } from './ButtonComponents';

function MenuModal() {
  return (
    <div className="backdrop">
      <div className="menu-modal">
        <MenuSelectionButton>Restart</MenuSelectionButton>
        <MenuSelectionButton>New Game</MenuSelectionButton>
        <MenuSelectionButton>Resume Game</MenuSelectionButton>
      </div>
    </div>
  );
}

export default MenuModal;
