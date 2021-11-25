import React from "react";
import { Story, Meta } from "@storybook/react";
import Pagination from "./Pagination";
import { PaginationProps } from "./Pagination.interface";

export default {
  title: "Pagination",
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const Previous = Template.bind({});
export const Next = Template.bind({});
export const PreviousNext = Template.bind({});

Previous.args = {
  previous: {
    fields: { slug: "/angular-testing-with-protractor-cucumber/" },
    frontmatter: { title: "Testing Angular apps with Protractor & Cucumber" },
  },
};

Next.args = {
  next: {
    fields: { slug: "/webpack-wordpress/" },
    frontmatter: { title: "Webpack for WordPress" },
  },
};

PreviousNext.args = {
  previous: {
    fields: { slug: "/angular-testing-with-protractor-cucumber/" },
    frontmatter: { title: "Testing Angular apps with Protractor & Cucumber" },
  },
  next: {
    fields: { slug: "/webpack-wordpress/" },
    frontmatter: { title: "Webpack for WordPress" },
  },
};
