import React from 'react';
import Jobs from './Jobs';
import { render } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { useStaticQuery } from 'gatsby';
import { jobs } from 'mocks/jobs';

jest.mock('gatsby');
jest.mock('gatsby-plugin-mdx', () => ({
  MDXRenderer: () => <div></div>,
}));

const useStaticQueryMock = mocked(useStaticQuery);

describe('Jobs', () => {
  useStaticQueryMock.mockReturnValue(jobs);

  it('should render the Jobs component', () => {
    const { container } = render(<Jobs />);
    expect(container).toMatchSnapshot();
  });
});
