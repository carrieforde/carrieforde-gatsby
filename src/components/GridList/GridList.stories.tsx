import { Meta, Story } from "@storybook/react";
import React from "react";
import GridList, { GridListItem } from "./GridList";

export default {
  title: "GridList",
  component: GridList,
} as Meta;

const Template: Story = (args) => <GridList {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: [
    <GridListItem key="Typescript">Typescript</GridListItem>,
    <GridListItem key="React">React</GridListItem>,
    <GridListItem key="HTML">HTML</GridListItem>,
    <GridListItem key="CSS (& Sass)">CSS (& Sass)</GridListItem>,
    <GridListItem key="Git">Git</GridListItem>,
    <GridListItem key="Firebase">Firebase</GridListItem>,
  ],
};
