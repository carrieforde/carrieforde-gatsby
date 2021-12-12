import React from "react";
import { Story, Meta } from "@storybook/react";
import PageDescription from "./PageDescription";
import { PageDescriptionProps } from "./PageDescription.interface";

export default {
  title: "Page Description",
  component: PageDescription,
} as Meta;

const Template: Story<PageDescriptionProps> = (args) => (
  <PageDescription {...args} />
);

export const Simple = Template.bind({});
export const Complex = Template.bind({});

Simple.args = {
  description:
    "With the rise of React in WordPress, there are more and more developers turning to webpack for managing and bundling front end assets.",
};

Complex.args = {
  multiLineDescription: [
    "I am a front end software engineer in San Mateo, California. With a background in business analysis, I bring a unique set of skills that helps me understand how the features I build bring value to end users.",
    'Send me a message <a href="mailto:carrie@carrieforde.com">carrie@carrieforde.com</a>',
  ],
};
