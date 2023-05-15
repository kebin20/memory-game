import Logo from './Logo';
import { PrimaryButton } from './ButtonComponents';

function Navbar({ returnToMenu }) {
  return (
    <header className="navbar">
      <Logo />
      <nav>
        <PrimaryButton onClick={returnToMenu}>Menu</PrimaryButton>
      </nav>
    </header>
  );
}

export default Navbar;
