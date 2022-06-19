import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stack from './Stack';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactReusableButtonLibrary/Stack',
    component: Stack,
    argTypes: {
        numberOfChildren: { type: 'number', defaultValue: 4 }
    }
} as ComponentMeta<typeof Stack>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Stack> = ({ numberOfChildren, ...args }) => (
    <Stack {...args}>
        {[...Array(numberOfChildren).keys()].map((item, index) => {
            return <div style={{ backgroundColor: 'red', width: 100, height: 100 }}></div>;
        })}
    </Stack>
);

export const Vertical = Template.bind({});
Vertical.args = {
    row: true
};

export const Horizontal = Template.bind({});
Horizontal.args = {
    row: false
};

export const NoSpacing = Template.bind({});
NoSpacing.args = {
    spacing: 0,
    row: true
};

export const Spacing = Template.bind({});
Spacing.args = {
    row: true,
    spacing: 20
};

export const Wrap = Template.bind({});
Wrap.args = {
    row: true,
    wrap: true
};

export const NoWrap = Template.bind({});
NoWrap.args = {
    row: true,
    wrap: false
};
