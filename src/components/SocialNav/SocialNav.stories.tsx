import React from 'react';
import { SocialNav } from './SocialNav';
import { Story, Meta } from '@storybook/react';
import { SocialNavProps } from './SocialNav.interface';

export default {
  title: 'Social Nav',
  component: SocialNav,
} as Meta;

const Template: Story<SocialNavProps> = (args) => <SocialNav {...args} />;

export const SocialNavMenu = Template.bind({});

SocialNavMenu.args = {
  socials: [
    {
      label: 'Email',
      value: 'mailto:carrie@carrieforde.com',
      icon: ['fal', 'paper-plane'],
    },
    {
      label: 'LinkedIn',
      value: 'https://linkedin.com/in/carrieforde',
      icon: ['fab', 'linkedin-in'],
    },
    {
      label: 'Github',
      value: 'https://github.com/carrieforde',
      icon: ['fab', 'github'],
    },
    {
      value: 'CodePen',
      label: 'https://codepen.io/carrieforde',
      icon: ['fab', 'codepen'],
    },
  ],
};
