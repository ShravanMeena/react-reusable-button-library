import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stack from './Stack';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactReusableButtonLibrary/Stack',
    component: Stack
} as ComponentMeta<typeof Stack>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const Dummy = Template.bind({});
Dummy.args = {
    children: 'Dummy Stack'
};
