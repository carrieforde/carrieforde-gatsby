import React from "react";
import { Story, Meta } from "@storybook/react";
import Category from "./Category";
import { CategoryProps } from "./Category.interface";

export default {
  title: "Category",
  component: Category,
} as Meta;

const Template: Story<CategoryProps> = (args) => <Category {...args} />;

export const Default = Template.bind({});

Default.args = {
  category: "JavaScript",
};
