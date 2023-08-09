import { GenericButtonType } from "../types";

function Button({ type, onClick, className, children }: GenericButtonType) {
  return (
    <button type={type || "button"} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
