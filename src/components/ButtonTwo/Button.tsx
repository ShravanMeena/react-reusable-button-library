import React from 'react';

export interface ButtonProps {
    label: string;
}

const ButtonTwo = (props: ButtonProps) => {
    return <button>{props.label}</button>;
};

export default ButtonTwo;
