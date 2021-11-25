import React from "react";
import { Story, Meta } from "@storybook/react";
import PageTitle from "./PageTitle";
import { PageTitleProps } from "./PageTitle.interface";

export default {
  title: "Page Title",
  component: PageTitle,
} as Meta;

const Template: Story<PageTitleProps> = (args) => <PageTitle {...args} />;

export const ShortTitle = Template.bind({});
export const LongTitle = Template.bind({});
export const WithMarkup = Template.bind({});

ShortTitle.args = {
  title: "Going Gatsby",
};

LongTitle.args = {
  title:
    "Aurora Project: a clean, modern Sass and ES Next-ready project boilerplate",
};

WithMarkup.args = {
  title: "Using cat rivalry to understand the <code>bind()</code> method",
};
