import React from 'react';
import TextWithSeparator from './TextWithSeparator';
import { TextWithSeparatorProps } from './TextWithSeparator.interface';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'TextWithSeparator',
  component: TextWithSeparator,
} as Meta;

const Template: Story<TextWithSeparatorProps> = (args) => (
  <TextWithSeparator {...args} />
);

export const Default = Template.bind({});
export const WithCustomSeparator = Template.bind({});

Default.args = {
  text1: 'San Mateo, CA',
  text2: 'June 2018 &ndash; Present',
};

WithCustomSeparator.args = {
  text1: 'March 08, 2021',
  text2: '9 minute read',
  separator: '&vert;',
};
