import React from 'react';

import "./Button.scss";

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--large', 'btn--medium',  'btn--mobile' ,'btn--wide'];

const COLORS = ['primary', 'blue', 'green', 'red'];

export const Button = ({
  children,
  type,
  buttonStyle,
  buttonSize,
  buttonColor,
  onClick
}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : null;


  return (
    <button onClick={onClick}
      type={type}
      className={` btn
      ${checkButtonStyle}
      ${checkButtonSize}
      ${checkButtonColor}`}
    >
      
      {children}
    </button>
  )
}


