import React from 'react';

export interface ButtonProps {
    label: string;
}

const ButtonRed = (props: ButtonProps) => {
    return (
        <button {...props} style={{ backgroundColor: 'red' }}>
            {props.label}
        </button>
    );
};

export default ButtonRed;
