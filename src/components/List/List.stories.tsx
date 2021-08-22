import React from 'react';
import List, { ListItem } from './List';
import { ListProps } from './List.interface';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'List',
  component: List,
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const BulletedList = Template.bind({});
export const NumberedList = Template.bind({});

BulletedList.args = {
  type: 'BULLETED',
  children: [
    <ListItem key="Typescript">Typescript</ListItem>,
    <ListItem key="React">React</ListItem>,
    <ListItem key="HTML">HTML</ListItem>,
    <ListItem key="CSS (& Sass)">CSS (& Sass)</ListItem>,
    <ListItem key="Git">Git</ListItem>,
    <ListItem key="Firebase">Firebase</ListItem>,
  ],
};

NumberedList.args = {
  ...BulletedList.args,
  type: 'NUMBERED',
};
