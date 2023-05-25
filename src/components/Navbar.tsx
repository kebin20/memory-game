import { PrimaryButton } from './ButtonComponents';

function Navbar({ returnToMenu }) {
  return (
    <header className="navbar">
      <h1 className="navbar__logo">memory</h1>
      <nav>
        <PrimaryButton onClick={returnToMenu}>Menu</PrimaryButton>
      </nav>
    </header>
  );
}

export default Navbar;
