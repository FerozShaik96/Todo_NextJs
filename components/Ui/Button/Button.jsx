import React from 'react';

function Button(props) {
  return (
    <button
      type={props.type}
      placeholder={props.placeholder}
      onClick={props.onClick}
      className={props.className}
    >
      {props.children}
    </button>
  );
}

export default Button;
