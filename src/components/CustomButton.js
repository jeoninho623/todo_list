import React from 'react';
import '../App.js';
 
const CustomButton = (props) => {
  const { onClick, children, buttonColor } = props;
  return (
    <button
      style={{ backgroundColor: buttonColor }}
      onClick={onClick}
      className='Button'
    >
      {children}
    </button>
  );
};
 
export default CustomButton;