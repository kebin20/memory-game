import Button from './Button';

function BigMenuButton(props) {
  return <Button className="btn btn__menu-big">{props.children}</Button>;
}

function MenuSelectionButton(props) {
  return <Button className="btn btn__menu-selection">{props.children}</Button>;
}

function PrimaryButton(props) {
  return <Button className="btn btn__primary">{props.children}</Button>;
}

function SecondaryButton(props) {
  return <Button className="btn btn__secondary">{props.children}</Button>;
}

export { BigMenuButton, MenuSelectionButton, PrimaryButton, SecondaryButton };