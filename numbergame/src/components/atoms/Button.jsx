import React from "react";

const Button = ({ cName, text, onClick, disabled }) => {
  return (
    <button className={cName} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
