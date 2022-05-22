import React from "react";
import CallOut from "./CallOut";
import { CallOutProps } from "./CallOut.interface";
import { Story, Meta } from "@storybook/react";
import MergeFieldProvider from "components/MergeField/MergeField.context";
import { AlertLevel } from "entities/alertLevel";

export default {
  title: "Call Out",
  component: CallOut,
  decorators: [
    (StoryComp) => (
      <MergeFieldProvider data={{ animal: "turtle" }}>
        <StoryComp />
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
  children: "This is the default call out.",
};

Tip.args = {
  type: AlertLevel.TIP,
  children: "This is a tip call out.",
};

Info.args = {
  type: AlertLevel.INFO,
  children: "This is an info call out.",
};

Warning.args = {
  type: AlertLevel.WARNING,
  children: "This is a warning call out.",
};

Danger.args = {
  type: AlertLevel.DANGER,
  children: "This is a danger call out.",
};

MultiLine.args = {
  type: "INFO",
  children:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
};

WithMergeField.args = {
  text: "I like {{animal}}s",
};
