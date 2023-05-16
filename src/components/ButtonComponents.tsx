import Button from './Button';

function BigMenuButton(props) {
  return (
    <Button onClick={props.onClick} className="btn btn__menu-big">
      {props.children}
    </Button>
  );
}

function MenuSelectionButton(props) {
  return (
    <Button onClick={props.onClick} className="btn btn__menu-selection">
      {props.children}
    </Button>
  );
}

function PrimaryButton(props) {
  return (
    <Button onClick={props.onClick} className="btn btn__primary">
      {props.children}
    </Button>
  );
}

function SecondaryButton(props) {
  return (
    <Button onClick={props.onClick} className="btn btn__secondary">
      {props.children}
    </Button>
  );
}

function CircleButton(props) {
  return (
    <button onClick={props.onClick} className="circle-button">
      {props.children}
    </button>
  );
}

export {
  BigMenuButton,
  MenuSelectionButton,
  PrimaryButton,
  SecondaryButton,
  CircleButton,
};
