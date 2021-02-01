import React from 'react';
import './button.css';

//non outline button version 
const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide' ]

const COLOR = ['primary', 'blue', 'red', 'green']

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize, 
    buttonColor
}) => {

    //functions to showcase the style we want 
    //conditional operator 
    // button that we created has a style use that style if it does NOT then defaults to the first position styling above 

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0];

    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

    //Created Button
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type}>{children}
        </button>
    )
}

