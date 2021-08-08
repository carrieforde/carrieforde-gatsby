import React from 'react';
import CallOut from './CallOut';
import { CallOutProps } from './CallOut.interface';
import { Story, Meta } from '@storybook/react';
import MergeFieldProvider from 'components/MergeField/MergeField.context';

export default {
  title: 'Call Out',
  component: CallOut,
  decorators: [
    (Story) => (
      <MergeFieldProvider data={{ animal: 'turtle' }}>
        <Story />
      </MergeFieldProvider>
    ),
  ],
} as Meta;

const Template: Story<CallOutProps> = (args) => <CallOut {...args} />;

export const Default = Template.bind({});
export const Tip = Template.bind({});
export const Info = Template.bind({});
export const Warning = Template.bind({});
export const Danger = Template.bind({});
export const MultiLine = Template.bind({});
export const WithMergeField = Template.bind({});

Default.args = {
  text: 'This is the default call out.',
};

Tip.args = {
  type: 'TIP',
  text: 'This is a tip call out.',
};

Info.args = {
  type: 'INFO',
  text: 'This is an info call out.',
};

Warning.args = {
  type: 'WARNING',
  text: 'This is a warning call out.',
};

Danger.args = {
  type: 'DANGER',
  text: 'This is a danger call out.',
};

MultiLine.args = {
  type: 'INFO',
  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
};

WithMergeField.args = {
  text: 'I like {{animal}}s',
};
