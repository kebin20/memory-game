import Button from './Button';

import { CircleButtonType } from '../types';

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

function CircleButton(props: CircleButtonType) {
  const buttonStyle = {
    backgroundColor: props.isMatched ? 'green' : 'blue', // Set the desired colors for matched and unmatched numbers
    // Other styles...
  };

  return (
    <button
      onClick={props.onFlipNumber}
      style={buttonStyle}
      className={
        props.isFlipped
          ? 'circle-button'
          : 'circle-button circle-button__flipped'
      }
    >
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
