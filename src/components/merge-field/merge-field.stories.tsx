import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import Typography from "components/typography/typography";
import * as React from "react";

import MergeField, { MergeFieldProps, MergeFieldProvider } from "./merge-field";

export default {
  title: "Utilities/Merge Field",
  component: MergeField,
  decorators: [
    (Story: StoryFn) => (
      <MergeFieldProvider
        data={{
          animal: "turtle",
        }}
      >
        <Story />
      </MergeFieldProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<MergeFieldProps> = (args) => <MergeField {...args} />;

export const Basic = Template.bind({});
export const NoDefault = Template.bind({});
export const WithDefault = Template.bind({});

Basic.args = {
  text: "I like {{animal}}s",
};

NoDefault.args = {
  text: "I make {{adjective}} websites",
};

WithDefault.args = {
  text: "I make {{adjective|React}} websites",
};
