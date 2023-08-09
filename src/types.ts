import { ReactNode } from 'react';

export type CircleButtonType = {
  onFlipNumber: () => void;
  isFlipped: boolean;
  isMatched: boolean;
  children?: ReactNode;
};

type ButtonType = "button" | "submit" | "reset";

export type GenericButtonType = {
  type: ButtonType
  onClick: () => void;
  className: string;
  children?: ReactNode;
}