import React from 'react';

// one button component utilized by multiple button containers that use different actions

const Button = (props) => {
    return (
        <button 
            className="button" 
            onClick={props.action}
            disabled={props.disabled}>
            {props.text}
        </button>
    );
}

export default Button;