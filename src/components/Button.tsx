function Button({type, onClick, className, children} : any) {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;
