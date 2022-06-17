import React from 'react';

export function CircleButton(props) {
    const { children, backgroundColor, color, style } = props;
    let _style = style || {};

    /** Override Defaults */
    if (backgroundColor && _style) _style.backgroundColor = backgroundColor;
    if (color && _style) _style.color = color;

    return (
        <div style={{ ..._style, border: '1px solid pink', borderRadius: 100 }} {...props}>
            {children} CircleButton
        </div>
    );
}
