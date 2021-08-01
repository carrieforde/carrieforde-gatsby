import React from 'react';
import { Story, Meta } from '@storybook/react';
import PageHeader from './PageHeader';
import { PageHeaderProps } from './PageHeader.interface';

export default {
  title: 'Page Header',
  component: PageHeader,
} as Meta;

const Template: Story<PageHeaderProps> = (args) => <PageHeader {...args} />;

export const Default = Template.bind({});
export const WithCategoryDate = Template.bind({});
export const WithDescription = Template.bind({});
export const WithCategoryDescription = Template.bind({});
export const WithUpdate = Template.bind({});

Default.args = {
  title: 'About Me',
};

WithCategoryDate.args = {
  title: 'How to build an interactive web component with LitElement',
  date: 'March 28, 2020',
  category: 'JavaScript',
};

WithDescription.args = {
  title: 'Blog',
  description:
    'Occasional posts on JavaScript, WordPress, and front end development.',
};

WithCategoryDescription.args = {
  title: 'Going Gatsby',
  date: 'May 26, 2019',
  category: 'Development',
  description:
    'After six years with WordPress, I switched to Gatsby&ndash;a static site generator.',
};

WithUpdate.args = {
  title: 'Webpack for WordPress',
  date: 'October 13, 2018',
  updated: 'October 6, 2019',
  category: 'WordPress',
  description:
    'With the rise of React in WordPress, there are more and more developers turning to webpack for managing and bundling front end assets.',
};
