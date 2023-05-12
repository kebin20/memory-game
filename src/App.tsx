import Button from './components/Button';
import './scss/index.scss';

function App() {
  return (
    <>
      <Button className="btn btn__menu-big">Big Menu</Button>
      <Button className="btn btn__menu-selection">Selection</Button>
      <Button className="btn btn__primary">Primary</Button>
      <Button className="btn btn__secondary">Secondary</Button>
    </>
  );
}

export default App;
