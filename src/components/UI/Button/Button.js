import React from 'react';

import './Button.css';

const Button = props => {
  const isValid=props.Disabled;
  return (
    <button
      type={props.type}
      className={`button ${
        isValid ? "enabled" : "disabled"
      }`}
      onClick={props.onClick}
      disabled={!isValid}
    >
      {props.children}
    </button>
  );
};

export default Button;
