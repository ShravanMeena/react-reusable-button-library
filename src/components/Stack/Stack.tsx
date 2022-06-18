import React from 'react';

export interface StackProps {
    spacing: number;
    wrap: boolean;
    direction: string;
    children: any;
}

const Stack = (props: StackProps) => {
    let { children, spacing = 2, direction = 'row', wrap = false } = props;

    const style = {
        display: 'flex',
        gap: `${spacing * 0.25}rem`,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        flexDirection: direction
    };

    return <div style={style}>{children}</div>;
};

export default Stack;
