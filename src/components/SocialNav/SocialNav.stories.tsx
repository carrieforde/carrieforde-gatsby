import React from "react";
import SocialNav from "./SocialNav";
import { Story, Meta } from "@storybook/react";
import { SocialNavProps } from "./SocialNav.interface";

export default {
  title: "Social Nav",
  component: SocialNav,
} as Meta;

const Template: Story<SocialNavProps> = () => <SocialNav />;

export const SocialNavMenu = Template.bind({});
