import React from "react";
import { Story, Meta } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Footer",
  component: Footer,
} as Meta;

const Template: Story<void> = () => <Footer />;

export const DefaultFooter = Template.bind({});
