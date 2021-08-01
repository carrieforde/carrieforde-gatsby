import { render } from '@testing-library/react';
import React from 'react';
import { DefaultArticle } from './Article.stories';

describe('Article', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<DefaultArticle {...DefaultArticle.args} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
