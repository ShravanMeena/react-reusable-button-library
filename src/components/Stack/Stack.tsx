import React from 'react';

export interface StackProps {
    spacing: number;
    wrap: boolean;
    children: any;
    flexDirection: string;
}

const Stack = (props: StackProps) => {
    let { children, spacing = 2, flexDirection, wrap } = props;

    return (
        <div
            style={{
                display: 'flex',
                gap: `${spacing * 0.25}rem`,
                flexWrap: wrap ? 'wrap' : 'nowrap',
                flexDirection: 'row'
            }}
        >
            {children}
        </div>
    );
};

export default Stack;
