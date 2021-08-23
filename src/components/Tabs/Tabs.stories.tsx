import React from 'react';
import Tabs from './Tabs';
import { TabsProps } from './Tabs.interface';
import { Story, Meta } from '@storybook/react';
import Heading from 'components/Heading/Heading';

export default {
  title: 'Tabs',
  component: Tabs,
} as Meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});

Default.args = {
  ariaLabel: 'Experience',
  tabItems: [
    {
      title: 'FFN',
      content: (
        <>
          <Heading level="h3">Senior Software Engineer</Heading>
          <p>I do things</p>
        </>
      ),
    },
    {
      title: 'WDS',
      content: 'Some content',
    },
    {
      title: 'MIGHTYminno',
      content: 'Some content',
    },
    {
      title: 'Cisco',
      content: 'Some content',
    },
  ],
};
