import { render } from '@testing-library/react';
import React from 'react';
import { DefaultFooter } from './Footer.stories';
import { useStaticQuery } from 'gatsby';
import { mocked } from 'ts-jest/utils';

jest.mock('gatsby');

const mockedUseStaticQuery = mocked(useStaticQuery);

describe('Footer', () => {
  it('should render correctly', () => {
    mockedUseStaticQuery.mockImplementationOnce(() => ({
      site: {
        siteMetadata: {
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
              label: 'https://codepen.io/carrieforde',
              value: 'CodePen',
              icon: ['fab', 'codepen'],
            },
          ],
        },
      },
    }));
    const { asFragment } = render(<DefaultFooter />);
    expect(asFragment()).toMatchSnapshot();
  });
});
