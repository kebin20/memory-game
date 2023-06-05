import { PrimaryButton } from './ButtonComponents';

function Navbar({ openMenu }: { openMenu: () => void }) {
  return (
    <header className="navbar">
      <h1 className="navbar__logo">memory</h1>
      <nav>
        <PrimaryButton onClick={openMenu}>Menu</PrimaryButton>
      </nav>
    </header>
  );
}

export default Navbar;
