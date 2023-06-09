import { ReactNode } from 'react';

export type CircleButtonType = {
  onFlipNumber: () => void;
  isFlipped: boolean;
  isMatched: boolean;
  children?: ReactNode;
};
