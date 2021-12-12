import React from "react";
import { Story, Meta } from "@storybook/react";
import TableOfContents from "./TableOfContents";
import { TableOfContentsProps } from "./TableOfContents.interface";

export default {
  title: "Table of Contents",
  component: TableOfContents,
} as Meta;

const Template: Story<TableOfContentsProps> = (args) => (
  <TableOfContents {...args} />
);

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      url: "#getting-started-with-webpack",
      title: "Getting started with webpack",
    },
    {
      url: "#creating-a-webpack-file-for-a-wordpress-theme",
      title: "Creating a webpack file for a WordPress theme",
      items: [
        {
          url: "#basic-webpack-setup",
          title: "Basic webpack setup",
        },
        {
          url: "#setting-up-development-modes",
          title: "Setting up development modes",
          items: [
            {
              url: "#adding-node-scripts",
              title: "Adding Node scripts",
            },
          ],
        },
        {
          url: "#loaders",
          title: "Loaders",
          items: [
            {
              url: "#going-beyond-javascript",
              title: "Going beyond JavaScript",
            },
          ],
        },
        {
          url: "#plugins",
          title: "Plugins",
          items: [
            {
              url: "#using-plugins-for-bundle-optimization",
              title: "Using plugins for bundle optimization",
            },
            {
              url: "#browser-reloading-with-browsersync",
              title: "Browser Reloading with BrowserSync",
            },
          ],
        },
        {
          url: "#multiple-entries--outputs",
          title: "Multiple entries & outputs",
        },
        {
          url: "#finishing-touches",
          title: "Finishing touches",
        },
      ],
    },
  ],
};
