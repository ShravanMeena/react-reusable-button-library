import React from 'react';

export interface ButtonProps {
    label: string;
    color: string;
    size: string;
    colorScheme: string;
    style: object;
}

const Button = (props: ButtonProps) => {
    let { label, color, size, colorScheme, style } = props;

    let sizeStyle = {};
    let backgroundColor;
    if (size === 'xs') {
        sizeStyle = {
            minWidth: 60,
            height: 30,
            fontSize: 12,
            padding: '2px 8px'
        };
    } else if (size === 'sm') {
        sizeStyle = {
            minWidth: 70,
            height: 32,
            fontSize: 14,
            padding: '3px 12px'
        };
    } else if (size === 'md') {
        sizeStyle = {
            minWidth: 85,
            height: 35,
            fontSize: 16,
            padding: '4px 16px'
        };
    } else if (size === 'lg') {
        sizeStyle = {
            minWidth: 100,
            height: 45,
            fontSize: 18,
            padding: '5px 20px'
        };
    } else {
        sizeStyle = {
            minWidth: 90,
            height: 38,
            fontSize: 16,
            padding: '4px 16px'
        };
    }

    if (colorScheme === 'red') {
        backgroundColor = '#e53e3e';
    } else if (colorScheme === 'orange') {
        backgroundColor = '#dd6b20';
    } else if (colorScheme === 'yellow') {
        backgroundColor = '#ecc94b';
        color = '#000';
    } else if (colorScheme === 'green') {
        backgroundColor = '#38a169';
    } else if (colorScheme === 'teal') {
        backgroundColor = '#319795';
    } else if (colorScheme === 'blue') {
        backgroundColor = '#3182ce';
    } else if (colorScheme === 'cyan') {
        backgroundColor = '#0bcc5ea';
        color = '#000';
    } else if (colorScheme === 'purple') {
        backgroundColor = '#805ad5';
    } else if (colorScheme === 'pink') {
        backgroundColor = '#d53f8c';
    } else if (colorScheme === 'linkedin') {
        backgroundColor = '#00a0dc';
    } else if (colorScheme === 'facebook') {
        backgroundColor = '#385898';
    } else if (colorScheme === 'messenger') {
        backgroundColor = '#0078ff';
    } else if (colorScheme === 'whatsapp') {
        backgroundColor = '#22c35e';
    } else if (colorScheme === 'twitter') {
        backgroundColor = '#1da1f2';
    } else if (colorScheme === 'telegram') {
        backgroundColor = '#0088cc';
    } else {
        backgroundColor = '#edf2f6';
        color = '#000';
    }

    return (
        <button
            {...props}
            style={{
                backgroundColor,
                color: color || '#fff',
                fontWeight: 'bold',
                border: 'none',
                outline: 'none',
                borderRadius: 4,
                cursor: 'pointer',
                ...sizeStyle,
                ...style
            }}
        >
            {label || 'Button'}
        </button>
    );
};

export default Button;
