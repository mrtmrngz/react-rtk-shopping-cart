import React from "react";

const Button = ({className, children, onClick, disabled}) => {
  return <button disabled={disabled && "disabled"} onClick={onClick} className={`btn ${className}`}>{children}</button>;
};

export default Button;
