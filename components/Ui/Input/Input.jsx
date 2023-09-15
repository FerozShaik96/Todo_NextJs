import React from 'react';

function Input({
  type,
  className,
  value,
  // defaultValue,
  placeholder,
  onChange,
}) {
  return (
    <input
      // defaultValue={defaultValue ? defaultValue : ' '}
      onChange={onChange}
      type={type}
      value={value}
      className={className}
      placeholder={placeholder}
    />
  );
}

export default Input;
