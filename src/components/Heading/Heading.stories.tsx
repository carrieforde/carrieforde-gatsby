import React from 'react';
import Heading from './Heading';
import { HeadingProps } from './Heading.interface';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Heading',
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const H1 = Template.bind({});
export const H2 = Template.bind({});
export const H3 = Template.bind({});
export const H4 = Template.bind({});
export const H5 = Template.bind({});
export const H6 = Template.bind({});

H1.args = {
  level: 'h1',
  children: 'Using cat rivalry to understand the <code>bind()</code> method',
};

H2.args = {
  level: 'h2',
  children: (
    <>
      Using cat rivalry to understand the <code>bind()</code> method
    </>
  ),
};

H3.args = {
  ...H1.args,
  level: 'h3',
};

H4.args = {
  ...H1.args,
  level: 'h4',
};

H5.args = {
  ...H1.args,
  level: 'h5',
};

H6.args = {
  ...H1.args,
  level: 'h6',
};
