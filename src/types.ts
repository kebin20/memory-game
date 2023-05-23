import { ReactNode } from "react";

export type CircleButtonType = {
  onFlipNumber: () => void;
  isFlipped: boolean;
  children?: ReactNode;
};
