import React from 'react';
// import './FancyButton.css';

export interface ButtonProps {
    type: string;
    children: any;
}

const FancyButton = (props: ButtonProps) => {
    let { children, type } = props;

    return (
        <button>
            <span>{children || '🚀'}</span>
        </button>
    );
};

export default FancyButton;

// type
// fill,enter,expand,collapse
