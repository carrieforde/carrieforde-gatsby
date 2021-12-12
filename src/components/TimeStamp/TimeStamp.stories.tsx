import React from "react";
import { Story, Meta } from "@storybook/react";
import TimeStamp from "./TimeStamp";
import { TimeStampProps } from "./TimeStamp.interface";

export default {
  title: "TimeStamp",
  component: TimeStamp,
} as Meta;

const Template: Story<TimeStampProps> = (args) => <TimeStamp {...args} />;

export const Default = Template.bind({});
export const Updated = Template.bind({});
export const IsSmall = Template.bind({});

Default.args = {
  date: "October 13, 2018",
};

Updated.args = {
  ...Default.args,
  updated: true,
};

IsSmall.args = {
  ...Default.args,
  isSmall: true,
};
