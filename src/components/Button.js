// import React from 'react';

// export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
//     backgroundColor?: string;
//     color?: string;
// }

// export const Button: React.FunctionComponent<IButtonProps> = (props) => {
//     const { children, backgroundColor, color, style } = props;

//     let _style: React.CSSProperties = style || {};

//     /** Override Defaults */
//     if (backgroundColor && _style) _style.backgroundColor = backgroundColor;
//     if (color && _style) _style.color = color;

//     return (
//         <button style= { _style } {...props }>
//             { children }
//             < /button>
//     );
// };

import React from 'react';

export function Button(props) {
    const { children, backgroundColor, color, style } = props;
    let _style = style || {};

    /** Override Defaults */
    if (backgroundColor && _style) _style.backgroundColor = backgroundColor;
    if (color && _style) _style.color = color;

    return (
        <div style={{ ..._style, backgroundColor: 'pink' }} {...props}>
            {children}
        </div>
    );
}

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
