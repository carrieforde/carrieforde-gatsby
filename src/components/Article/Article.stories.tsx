import React from 'react';
import { Story, Meta } from '@storybook/react';
import Article from './Article';
import { ArticleProps } from './Article.interface';

export default {
  title: 'Article',
  component: Article,
} as Meta;

const Template: Story<ArticleProps> = (args) => <Article {...args} />;

export const DefaultArticle = Template.bind({});

DefaultArticle.args = {
  frontmatter: {
    title: 'Inject dynamic data into static content with merge fields',
    date: 'March 08, 2021',
    category: 'JavaScript',
    description: null,
  },
  timeToRead: 9,
  excerpt:
    'Last year, I worked on upgrading one of our consumer-facing applications from a standard Angular application with static content hard-coded…',
  fields: {
    slug: '/dynamic-data-merge-fields/',
  },
};
