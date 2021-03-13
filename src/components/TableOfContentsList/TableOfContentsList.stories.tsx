import React from 'react';
import { Story, Meta } from '@storybook/react';
import TableOfContentsList from './TableOfContentsList';
import { TableOfContentsListProps } from './TableOfContentsList.interface';

export default {
  title: 'TableOfContentsList',
  component: TableOfContentsList,
} as Meta;

const Template: Story<TableOfContentsListProps> = (args) => (
  <TableOfContentsList {...args} />
);

export const SingleLevel = Template.bind({});
export const MultiLevel = Template.bind({});

SingleLevel.args = {
  listItems: [
    {
      url: '#gutenberg-is-greatuntil-you-need-custom-components',
      title: 'Gutenberg is great…until you need custom components',
    },
    {
      url: '#markdown-to-the-rescue',
      title: 'Markdown to the rescue',
    },
    {
      url: '#an-improved-editing-experience',
      title: 'An improved editing experience',
    },
  ],
};

MultiLevel.args = {
  listItems: [
    {
      url: '#getting-started-with-webpack',
      title: 'Getting started with webpack',
    },
    {
      url: '#creating-a-webpack-file-for-a-wordpress-theme',
      title: 'Creating a webpack file for a WordPress theme',
      items: [
        {
          url: '#basic-webpack-setup',
          title: 'Basic webpack setup',
        },
        {
          url: '#setting-up-development-modes',
          title: 'Setting up development modes',
          items: [
            {
              url: '#adding-node-scripts',
              title: 'Adding Node scripts',
            },
          ],
        },
        {
          url: '#loaders',
          title: 'Loaders',
          items: [
            {
              url: '#going-beyond-javascript',
              title: 'Going beyond JavaScript',
            },
          ],
        },
        {
          url: '#plugins',
          title: 'Plugins',
          items: [
            {
              url: '#using-plugins-for-bundle-optimization',
              title: 'Using plugins for bundle optimization',
            },
            {
              url: '#browser-reloading-with-browsersync',
              title: 'Browser Reloading with BrowserSync',
            },
          ],
        },
        {
          url: '#multiple-entries--outputs',
          title: 'Multiple entries & outputs',
        },
        {
          url: '#finishing-touches',
          title: 'Finishing touches',
        },
      ],
    },
  ],
};
